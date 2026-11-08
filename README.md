# Gaming_With_Meee_website
# Vietnam Website Legal Compliance Kit

A repo-ready set of AI-agent rules and a reusable skill for a Vietnam-facing website.

## Included

- `AGENTS.md` — repository-wide instructions for agents that support AGENTS.md.
- `skills/vietnam-website-legal-compliance/SKILL.md` — detailed skill and review workflow.
- `.agent/rules/vietnam-legal-compliance.md` — concise rule for agent environments using .agent/rules.
- `.cursor/rules/vietnam-legal-compliance.mdc` — always-on Cursor project rule.
- `compliance/LEGAL_FEATURE_REGISTER.md` — feature-by-feature status register.
- `compliance/LEGAL_REVIEW_LOG.md` — dated source/review trail.

## Installation

Copy the included files and folders into the root of your website repository, preserving paths.

For Google Antigravity:

1. Keep `.agent/rules/` in the repository.
2. Keep `skills/` in the repository.
3. Add `AGENTS.md` at project root.
4. Verify in the agent's rule/skill settings that these files are active.
5. If your Antigravity version uses a different custom-rule/skill directory, point it to these same files.

For Cursor:

`.cursor/rules/vietnam-legal-compliance.mdc` is configured as an always-applied project rule.

For other agents:

Use `AGENTS.md` where supported and explicitly instruct the agent to load:

`skills/vietnam-website-legal-compliance/SKILL.md`

## Important

- This kit is an engineering guardrail, not legal advice, a permit, filing, or guarantee of compliance.
- It is initialized with legal sources identified as of 2026-11-08.
- Re-check current official texts and amendments before each release.
- Owner identity and the website's real features are not yet confirmed.
- Update the feature register.
- Never publish template policy text without checking it against actual code, vendors, data flows, and the real legal operator.