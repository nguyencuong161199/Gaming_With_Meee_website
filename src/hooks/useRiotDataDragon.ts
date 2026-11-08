import { useState, useEffect } from 'react'

export interface HotChampion {
  id: string
  name: string
  title: string
  iconUrl: string
  tags: string[]
}

export interface RiotDataDragonState {
  patchVersion: string
  patchLabel: string
  isLoading: boolean
  isLiveSync: boolean
  hotChampions: HotChampion[]
}

const CACHE_KEY = 'gwm_riot_ddragon_cache'
const CACHE_EXPIRY_MS = 1000 * 60 * 60 * 12 // 12 hours cache

export const useRiotDataDragon = (): RiotDataDragonState => {
  const [state, setState] = useState<RiotDataDragonState>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < CACHE_EXPIRY_MS && parsed.data) {
          return {
            ...parsed.data,
            isLoading: false,
            isLiveSync: true
          }
        }
      }
    } catch {
      // ignore
    }
    return {
      patchVersion: '16.22.1',
      patchLabel: 'Patch 16.22',
      isLoading: true,
      isLiveSync: false,
      hotChampions: []
    }
  })

  useEffect(() => {
    let isMounted = true

    const fetchRiotData = async () => {
      try {
        // 1. Fetch latest game versions from Riot Data Dragon (Free, Public, CORS-enabled)
        const versionRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
        if (!versionRes.ok) throw new Error('Versions API unreachable')
        const versions: string[] = await versionRes.json()
        const latestVersion = versions[0] || '16.22.1'
        const patchParts = latestVersion.split('.')
        const patchLabel = `Patch ${patchParts.slice(0, 2).join('.')}`

        // 2. Fetch Vietnamese champion meta data
        const champRes = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/vi_VN/champion.json`
        )
        if (!champRes.ok) throw new Error('Champion data unreachable')
        const champData = await champRes.json()
        const allChamps = champData.data || {}

        // Curated competitive meta picks from latest champion roster
        const metaKeys = ['Caitlyn', 'Jinx', 'Ahri', 'Aatrox', 'LeeSin', 'Viktor', 'Ambessa', 'Jayce']
        const hotChampions: HotChampion[] = []

        for (const key of metaKeys) {
          const champ = allChamps[key]
          if (champ) {
            hotChampions.push({
              id: champ.id,
              name: champ.name,
              title: champ.title,
              iconUrl: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champ.image.full}`,
              tags: champ.tags || []
            })
          }
        }

        // If some meta keys aren't matched, pick first 6 champions
        if (hotChampions.length < 4) {
          const fallbackKeys = Object.keys(allChamps).slice(0, 6)
          for (const key of fallbackKeys) {
            if (!hotChampions.some((c) => c.id === key)) {
              const champ = allChamps[key]
              hotChampions.push({
                id: champ.id,
                name: champ.name,
                title: champ.title,
                iconUrl: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champ.image.full}`,
                tags: champ.tags || []
              })
            }
          }
        }

        const resultData = {
          patchVersion: latestVersion,
          patchLabel: patchLabel,
          isLoading: false,
          isLiveSync: true,
          hotChampions
        }

        if (isMounted) {
          setState(resultData)
        }

        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              data: resultData
            })
          )
        } catch {
          // ignore
        }
      } catch (err) {
        console.warn('[RIOT D-DRAGON] Live patch fetch failed, using fallback:', err)
        if (isMounted) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            isLiveSync: false
          }))
        }
      }
    }

    fetchRiotData()

    return () => {
      isMounted = false
    }
  }, [])

  return state
}

