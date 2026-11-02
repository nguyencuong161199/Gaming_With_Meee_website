import { ExamPackage } from '../types/academy'

export const EXAM_PACKAGES: ExamPackage[] = [
  {
    id: 'psm-1',
    title: 'PSM I™ // Professional Scrum Master',
    subtitle: 'Chuẩn Scrum.org (Scrum Guide 2020)',
    category: 'agile',
    badge: 'SCRUM.ORG ALIGNED',
    totalQuestions: 15, // Curated full practice set
    durationMinutes: 20,
    passRate: 85,
    level: 'Professional',
    iconName: 'Award',
    description: 'Master the fundamentals of Scrum, accountabilities of Scrum Master, Product Owner, Developers, artifacts and events.',
    descriptionVi: 'Luyện thi chứng chỉ quốc tế Scrum Master (PSM I) chuẩn Scrum Guide 2020. Tối ưu tư duy Agile và giải thích chi tiết từng câu hỏi.',
    questions: [
      {
        id: 1,
        question: 'Who is accountable for managing the Product Backlog in a Scrum Team?',
        questionVi: 'Ai là người chịu trách nhiệm (accountable) quản lý Product Backlog trong một Scrum Team?',
        options: [
          { id: 'A', text: 'The Scrum Master', textVi: 'Scrum Master' },
          { id: 'B', text: 'The Product Owner', textVi: 'Product Owner' },
          { id: 'C', text: 'The Developers', textVi: 'Các Developers' },
          { id: 'D', text: 'The Lead Project Manager', textVi: 'Lead Project Manager' }
        ],
        correctAnswers: ['B'],
        explanation: 'According to the 2020 Scrum Guide, the Product Owner is solely accountable for effective Product Backlog management, including developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, and ordering them.',
        explanationVi: 'Theo Scrum Guide 2020, Product Owner là người duy nhất chịu trách nhiệm quản lý Product Backlog một cách hiệu quả, bao gồm xác định Product Goal, tạo và sắp xếp thứ tự ưu tiên các hạng mục.',
        reference: 'Scrum Guide 2020 - Product Owner Accountabilities',
        topic: 'Scrum Roles & Accountabilities'
      },
      {
        id: 2,
        question: 'What is the maximum recommended duration for the Daily Scrum?',
        questionVi: 'Thời lượng tối đa được khuyến nghị cho sự kiện Daily Scrum là bao lâu?',
        options: [
          { id: 'A', text: '30 minutes', textVi: '30 phút' },
          { id: 'B', text: '15 minutes', textVi: '15 phút' },
          { id: 'C', text: '45 minutes for a 4-week Sprint', textVi: '45 phút đối với Sprint 4 tuần' },
          { id: 'D', text: 'As long as the team needs to solve blockers', textVi: 'Tùy ý đến khi giải quyết xong vướng mắc' }
        ],
        correctAnswers: ['B'],
        explanation: 'The Daily Scrum is a 15-minute event for the Developers of the Scrum Team to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.',
        explanationVi: 'Daily Scrum là sự kiện bị giới hạn thời gian (timeboxed) đúng 15 phút dành riêng cho Developers để kiểm tra tiến độ hướng tới Sprint Goal.',
        reference: 'Scrum Guide 2020 - Daily Scrum',
        topic: 'Scrum Events'
      },
      {
        id: 3,
        question: 'Who creates the Definition of Done if it is not an organizational standard?',
        questionVi: 'Nếu tổ chức không có sẵn tiêu chuẩn chung, ai sẽ là người tạo ra Definition of Done (Định nghĩa hoàn thành)?',
        options: [
          { id: 'A', text: 'The Scrum Master and QA Lead', textVi: 'Scrum Master cùng với Trưởng nhóm QA' },
          { id: 'B', text: 'The Scrum Team', textVi: 'Toàn bộ Scrum Team' },
          { id: 'C', text: 'The Product Owner alone', textVi: 'Chỉ riêng Product Owner' },
          { id: 'D', text: 'External Stakeholders', textVi: 'Các bên liên quan (Stakeholders)' }
        ],
        correctAnswers: ['B'],
        explanation: 'If the Definition of Done for an increment is not part of the organizational standards, the Scrum Team must create a Definition of Done appropriate for the product.',
        explanationVi: 'Nếu Definition of Done không phải là tiêu chuẩn chung của tổ chức, thì chính Scrum Team (gồm PO, SM và Developers) phải cùng nhau tạo ra Definition of Done phù hợp.',
        reference: 'Scrum Guide 2020 - Artifact: Increment & Definition of Done',
        topic: 'Artifacts & Commitments'
      },
      {
        id: 4,
        question: 'What are the three pillars of empirical process control in Scrum?',
        questionVi: 'Ba trụ cột của lý thuyết kiểm soát thực nghiệm (Empiricism) trong Scrum là gì?',
        options: [
          { id: 'A', text: 'Planning, Execution, Monitoring', textVi: 'Kế hoạch, Thực thi, Giám sát' },
          { id: 'B', text: 'Transparency, Inspection, Adaptation', textVi: 'Minh bạch, Kiểm tra, Thích ứng' },
          { id: 'C', text: 'Respect, Courage, Openness', textVi: 'Tôn trọng, Dũng cảm, Cởi mở' },
          { id: 'D', text: 'Velocity, Capacity, Burn-down', textVi: 'Vận tốc, Năng lực, Đồ thị Burn-down' }
        ],
        correctAnswers: ['B'],
        explanation: 'Scrum is founded on empiricism and lean thinking. The three pillars of empirical process control are Transparency, Inspection, and Adaptation.',
        explanationVi: 'Scrum dựa trên lý thuyết thực nghiệm (empiricism). Ba trụ cột bất biến của nó là: Minh bạch (Transparency), Kiểm tra (Inspection), và Thích ứng (Adaptation).',
        reference: 'Scrum Guide 2020 - Scrum Theory',
        topic: 'Scrum Theory & Values'
      },
      {
        id: 5,
        question: 'Which of the following is the commitment for the Sprint Backlog?',
        questionVi: 'Cam kết (commitment) gắn liền với Sprint Backlog là gì?',
        options: [
          { id: 'A', text: 'Definition of Done', textVi: 'Definition of Done' },
          { id: 'B', text: 'The Product Goal', textVi: 'Product Goal' },
          { id: 'C', text: 'The Sprint Goal', textVi: 'Sprint Goal' },
          { id: 'D', text: 'The Release Burn-up Chart', textVi: 'Release Burn-up Chart' }
        ],
        correctAnswers: ['C'],
        explanation: 'Each artifact contains a commitment: For the Product Backlog, it is the Product Goal; for the Sprint Backlog, it is the Sprint Goal; for the Increment, it is the Definition of Done.',
        explanationVi: 'Mỗi tạo tác (artifact) đều có 1 cam kết đi kèm: Product Backlog có Product Goal; Sprint Backlog có Sprint Goal; và Increment có Definition of Done.',
        reference: 'Scrum Guide 2020 - Artifact Commitments',
        topic: 'Artifacts & Commitments'
      },
      {
        id: 6,
        question: 'When is a Sprint cancelled?',
        questionVi: 'Khi nào một Sprint có thể bị hủy bỏ?',
        options: [
          { id: 'A', text: 'When the Developers realize they cannot finish all planned items', textVi: 'Khi Developers nhận ra họ không thể hoàn thành hết các task đã lên kế hoạch' },
          { id: 'B', text: 'Only when the Sprint Goal becomes obsolete', textVi: 'Chỉ khi Sprint Goal trở nên lỗi thời / không còn giá trị' },
          { id: 'C', text: 'Whenever the Scrum Master decides team morale is low', textVi: 'Bất cứ khi nào Scrum Master thấy tinh thần nhóm đi xuống' },
          { id: 'D', text: 'At the end of every week if bugs exceed 10', textVi: 'Vào cuối mỗi tuần nếu có trên 10 lỗi' }
        ],
        correctAnswers: ['B'],
        explanation: 'A Sprint could be cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint.',
        explanationVi: 'Một Sprint chỉ có thể bị hủy nếu Sprint Goal trở nên lỗi thời (do thay đổi chiến lược hoặc thị trường). Chỉ có Product Owner mới có thẩm quyền hủy Sprint.',
        reference: 'Scrum Guide 2020 - The Sprint',
        topic: 'Scrum Events'
      },
      {
        id: 7,
        question: 'Which topics are addressed during Sprint Planning? (Select the most complete answer)',
        questionVi: 'Những chủ đề cốt lõi nào được giải quyết trong buổi họp Sprint Planning?',
        options: [
          { id: 'A', text: 'Why is this Sprint valuable? What can be Done? How will the chosen work get done?', textVi: 'Tại sao Sprint này có giá trị? Cái gì có thể hoàn thành? Công việc sẽ được làm như thế nào?' },
          { id: 'B', text: 'Individual salary reviews, team velocity metrics, customer billing', textVi: 'Đánh giá lương cá nhân, chỉ số vận tốc nhóm, hóa đơn khách hàng' },
          { id: 'C', text: 'Only bug fixing prioritization and code review approvals', textVi: 'Chỉ ưu tiên sửa bug và phê duyệt code review' },
          { id: 'D', text: 'Detailed Gantt chart creation for the upcoming 6 months', textVi: 'Tạo biểu đồ Gantt chi tiết cho 6 tháng tới' }
        ],
        correctAnswers: ['A'],
        explanation: 'Sprint Planning addresses three specific topics: Topic One: Why is this Sprint valuable? Topic Two: What can be Done this Sprint? Topic Three: How will the chosen work get done?',
        explanationVi: 'Sprint Planning giải quyết đúng 3 chủ đề: Chủ đề 1: Tại sao Sprint này có giá trị? Chủ đề 2: Có thể làm gì trong Sprint này? Chủ đề 3: Làm thế nào để hoàn thành công việc đã chọn?',
        reference: 'Scrum Guide 2020 - Sprint Planning',
        topic: 'Scrum Events'
      },
      {
        id: 8,
        question: 'True or False: The Scrum Master is a management position.',
        questionVi: 'Đúng hay Sai: Scrum Master là một vị trí quản lý (Management Position)?',
        options: [
          { id: 'A', text: 'True. The Scrum Master manages the Scrum process and effectiveness.', textVi: 'Đúng. Scrum Master quản lý quy trình Scrum và mức độ hiệu quả của team.' },
          { id: 'B', text: 'False. Scrum has no managers at all.', textVi: 'Sai. Trong Scrum hoàn toàn không có khái niệm quản lý.' }
        ],
        correctAnswers: ['A'],
        explanation: 'True. The Scrum Master is a manager, not in the traditional sense of managing people, but in the sense of managing the Scrum process, ensuring Scrum is understood and enacted, and fostering team effectiveness.',
        explanationVi: 'Đúng! Scrum Master là một vị trí quản lý, nhưng không phải quản lý con người theo kiểu cấp trên - cấp dưới, mà là quản lý việc thực thi quy trình Scrum và tính hiệu quả của cả team.',
        reference: 'Scrum.org Professional Scrum Master Concept',
        topic: 'Scrum Roles & Accountabilities'
      },
      {
        id: 9,
        question: 'Who has the final say on the order of the Product Backlog?',
        questionVi: 'Ai là người có tiếng nói quyết định cuối cùng về thứ tự ưu tiên của Product Backlog?',
        options: [
          { id: 'A', text: 'The Lead Architect', textVi: 'Lead Architect' },
          { id: 'B', text: 'The Scrum Master', textVi: 'Scrum Master' },
          { id: 'C', text: 'The Product Owner', textVi: 'Product Owner' },
          { id: 'D', text: 'The Chief Executive Officer (CEO)', textVi: 'Tổng Giám đốc (CEO)' }
        ],
        correctAnswers: ['C'],
        explanation: 'The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog, but those wanting to change the Product Backlog’s content or order must convince the Product Owner.',
        explanationVi: 'Product Owner là một cá nhân duy nhất, không phải một ủy ban. Bất kỳ ai (kể cả sếp lớn) muốn thay đổi thứ tự ưu tiên của Product Backlog đều phải thuyết phục Product Owner.',
        reference: 'Scrum Guide 2020 - Product Owner',
        topic: 'Scrum Roles & Accountabilities'
      },
      {
        id: 10,
        question: 'What is the purpose of the Sprint Retrospective?',
        questionVi: 'Mục đích chính của buổi họp Sprint Retrospective là gì?',
        options: [
          { id: 'A', text: 'To demonstrate the Increment to customers and gather market feedback', textVi: 'Trình diễn Increment cho khách hàng xem và thu thập phản hồi thị trường' },
          { id: 'B', text: 'To plan ways to increase quality and effectiveness regarding individuals, interactions, processes, and tools', textVi: 'Lên kế hoạch cải tiến chất lượng và hiệu quả về con người, mối tương tác, quy trình và công cụ' },
          { id: 'C', text: 'To estimate the remaining Product Backlog items for the next year', textVi: 'Ước lượng các hạng mục Product Backlog còn lại cho năm tới' },
          { id: 'D', text: 'To assign blame for incomplete Sprint backlog items', textVi: 'Tìm người chịu trách nhiệm cho các task chưa hoàn thành' }
        ],
        correctAnswers: ['B'],
        explanation: 'The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.',
        explanationVi: 'Mục đích của Sprint Retrospective là tìm cách cải tiến chất lượng và hiệu quả làm việc bằng cách nhìn lại Sprint vừa qua về con người, sự tương tác, quy trình và công cụ.',
        reference: 'Scrum Guide 2020 - Sprint Retrospective',
        topic: 'Scrum Events'
      }
    ]
  },
  {
    id: 'ccar-f',
    title: 'CCAR-F // Capital & Risk Fundamentals',
    subtitle: 'Comprehensive Capital Analysis & Review (US Fed Standard)',
    category: 'finance',
    badge: 'BANKING & RISK',
    totalQuestions: 10,
    durationMinutes: 15,
    passRate: 80,
    level: 'Advanced',
    iconName: 'BarChart3',
    description: 'Fundamental principles of the Federal Reserve CCAR framework, capital stress testing, CET1 requirements, and macroeconomic shock modeling.',
    descriptionVi: 'Bộ đề ôn tập nền tảng khung phân tích và đánh giá vốn toàn diện CCAR của Cục Dự trữ Liên bang Mỹ (Fed), kiểm tra sức chịu đựng (Stress Testing), chuẩn mực Basel III và an toàn vốn ngân hàng.',
    questions: [
      {
        id: 1,
        question: 'What is the primary objective of the Federal Reserve’s CCAR (Comprehensive Capital Analysis and Review)?',
        questionVi: 'Mục tiêu chính của khung CCAR do Cục Dự trữ Liên bang Mỹ (Fed) ban hành là gì?',
        options: [
          { id: 'A', text: 'To maximize bank dividend yields for international shareholders', textVi: 'Tối đa hóa tỷ suất cổ tức ngân hàng cho cổ đông quốc tế' },
          { id: 'B', text: 'To ensure large Bank Holding Companies (BHCs) maintain sufficient capital to continue operations throughout severe economic and financial stress', textVi: 'Đảm bảo các tập đoàn ngân hàng lớn duy trì đủ vốn tự có để tiếp tục hoạt động qua các cuộc khủng hoảng kinh tế và tài chính nghiêm trọng' },
          { id: 'C', text: 'To set real-time daily retail foreign exchange rates', textVi: 'Thiết lập tỷ giá hối đoái bán lẻ hàng ngày theo thời gian thực' },
          { id: 'D', text: 'To replace all internal commercial underwriting models with Fed algorithms', textVi: 'Thay thế toàn bộ mô hình tín dụng thương mại bằng thuật toán của Fed' }
        ],
        correctAnswers: ['B'],
        explanation: 'CCAR is an annual exercise by the Federal Reserve to assess whether large bank holding companies have robust forward-looking capital planning processes and sufficient capital to absorb losses under severely adverse economic conditions.',
        explanationVi: 'Mục tiêu cốt lõi của CCAR là đánh giá xem các định chế tài chính lớn có quy trình lập kế hoạch vốn vững chắc và đủ vốn để chịu đựng thua lỗ trong kịch bản khủng hoảng kinh tế nghiêm trọng.',
        reference: 'Federal Reserve CCAR Principles & Framework',
        topic: 'Regulatory Objectives'
      },
      {
        id: 2,
        question: 'Under Basel III and CCAR standards, which capital metric represents the highest quality of regulatory loss-absorbing capital?',
        questionVi: 'Theo chuẩn mực Basel III và CCAR, chỉ số vốn nào đại diện cho nguồn vốn có chất lượng hấp thụ tổn thất cao nhất?',
        options: [
          { id: 'A', text: 'Tier 2 Subordinated Debt', textVi: 'Nợ thứ cấp Cấp 2 (Tier 2 Subordinated Debt)' },
          { id: 'B', text: 'Common Equity Tier 1 (CET1)', textVi: 'Vốn Cấp 1 Cổ phần Phổ thông (CET1)' },
          { id: 'C', text: 'Additional Tier 1 Preferred Shares', textVi: 'Cổ phiếu ưu đãi Vốn cấp 1 bổ sung (AT1)' },
          { id: 'D', text: 'Short-term Liquidity Repurchase Agreements', textVi: 'Hợp đồng mua lại thanh khoản ngắn hạn (Repo)' }
        ],
        correctAnswers: ['B'],
        explanation: 'Common Equity Tier 1 (CET1) consists primarily of common stock, retained earnings, and accumulated other comprehensive income. It is the core measure of a bank’s financial strength because it can absorb losses on a going-concern basis.',
        explanationVi: 'Vốn Cấp 1 Cổ phần Phổ thông (CET1) gồm vốn cổ phần thường và lợi nhuận giữ lại, là thước đo an toàn vốn cao nhất vì có khả năng hấp thụ rủi ro trực tiếp khi ngân hàng còn đang hoạt động.',
        reference: 'Basel III & US Basel Capital Rules',
        topic: 'Capital Metrics'
      },
      {
        id: 3,
        question: 'What is the distinction between DFAST (Dodd-Frank Act Stress Testing) and CCAR?',
        questionVi: 'Điểm khác biệt then chốt giữa DFAST (Dodd-Frank Stress Testing) và CCAR là gì?',
        options: [
          { id: 'A', text: 'DFAST is purely quantitative testing of capital adequacy, while CCAR includes both quantitative adequacy and a qualitative assessment of capital planning processes & capital distributions', textVi: 'DFAST thuần túy là kiểm tra định lượng mức đủ vốn, trong khi CCAR bao gồm cả định lượng lẫn đánh giá định tính quy trình phân bổ vốn & kế hoạch chia cổ tức' },
          { id: 'B', text: 'DFAST applies only to foreign banks, while CCAR applies only to credit unions', textVi: 'DFAST chỉ áp dụng cho ngân hàng nước ngoài, còn CCAR cho quỹ tín dụng' },
          { id: 'C', text: 'CCAR does not use macroeconomic scenarios', textVi: 'CCAR không sử dụng kịch bản kinh tế vĩ mô' },
          { id: 'D', text: 'There is no difference; they are identical regulations with different acronyms', textVi: 'Hai khái niệm hoàn toàn giống nhau, chỉ khác tên viết tắt' }
        ],
        correctAnswers: ['A'],
        explanation: 'DFAST evaluates whether institutions have sufficient capital to absorb losses under baseline, adverse, and severely adverse conditions. CCAR goes further by evaluating the firm’s forward-looking capital distribution plans (dividends, share repurchases) and qualitative internal governance.',
        explanationVi: 'DFAST đánh giá định lượng xem ngân hàng có đủ vốn khi gặp khủng hoảng hay không. CCAR đi xa hơn khi đánh giá toàn diện cả kế hoạch phân phối vốn (chia cổ tức, mua lại cổ phiếu) và năng lực quản trị nội bộ.',
        reference: 'Federal Reserve Dodd-Frank Act Stress Testing Overview',
        topic: 'Stress Testing Frameworks'
      },
      {
        id: 4,
        question: 'Which macroeconomic scenario published annually by the Federal Reserve is designed to simulate a severe global recession?',
        questionVi: 'Kịch bản kinh tế vĩ mô nào do Fed công bố hàng năm được thiết kế để mô phỏng một cuộc suy thoái kinh tế toàn cầu nghiêm trọng?',
        options: [
          { id: 'A', text: 'Baseline Scenario', textVi: 'Kịch bản Cơ sở (Baseline Scenario)' },
          { id: 'B', text: 'Supervisory Severely Adverse Scenario', textVi: 'Kịch bản Giám sát Khủng hoảng Nghiêm trọng (Severely Adverse)' },
          { id: 'C', text: 'Benign Expansion Scenario', textVi: 'Kịch bản Mở rộng Thuận lợi (Benign Expansion)' },
          { id: 'D', text: 'Hyperinflationary Currency Peg Scenario', textVi: 'Kịch bản Siêu lạm phát tỷ giá cố định' }
        ],
        correctAnswers: ['B'],
        explanation: 'The Supervisory Severely Adverse scenario is characterized by a severe global recession accompanied by a period of heightened stress in commercial and residential real estate markets, along with elevated corporate debt markets.',
        explanationVi: 'Kịch bản Giám sát Khủng hoảng Nghiêm trọng (Severely Adverse) mô phỏng cú sốc suy thoái kinh tế sâu, tỷ lệ thất nghiệp tăng vọt, thị trường bất động sản và trái phiếu doanh nghiệp sụt giảm nghiêm trọng.',
        reference: 'Fed Comprehensive Capital Analysis Guidelines',
        topic: 'Macro Scenarios'
      },
      {
        id: 5,
        question: 'What is the minimum regulatory Common Equity Tier 1 (CET1) ratio threshold required under the standard US Basel III capital framework (excluding firm-specific buffers)?',
        questionVi: 'Tỷ lệ an toàn vốn tối thiểu CET1 theo chuẩn Basel III của Mỹ (chưa tính các bộ đệm rủi ro bổ sung) là bao nhiêu?',
        options: [
          { id: 'A', text: '2.0%', textVi: '2.0%' },
          { id: 'B', text: '4.5%', textVi: '4.5%' },
          { id: 'C', text: '8.0%', textVi: '8.0%' },
          { id: 'D', text: '12.5%', textVi: '12.5%' }
        ],
        correctAnswers: ['B'],
        explanation: 'The minimum regulatory CET1 capital ratio requirement under Basel III is 4.5% of risk-weighted assets (RWA). Banks must also maintain a Capital Conservation Buffer of 2.5%, bringing the effective minimum to 7.0%.',
        explanationVi: 'Tỷ lệ vốn tối thiểu CET1 theo Basel III là 4.5% tổng tài sản có rủi ro (RWA). Ngoài ra ngân hàng phải có thêm bộ đệm bảo toàn vốn 2.5% (đưa mức thực tế lên 7.0%).',
        reference: 'Basel III Capital Accord - Pillar 1 Requirements',
        topic: 'Capital Metrics'
      }
    ]
  }
]

