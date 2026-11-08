import { ExamPackage } from '../types/academy'

export const EXAM_PACKAGES: ExamPackage[] = [
  {
    id: 'psm-1',
    title: 'PSM I™ // Professional Scrum Master',
    subtitle: 'Chuẩn Scrum.org (Scrum Guide 2020)',
    category: 'agile',
    badge: 'SCRUM.ORG ALIGNED',
    totalQuestions: 15, // Complete 15-question curated set
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
          { id: 'A', text: 'The Scrum Master', textVi: 'Chuyên gia điều phối Scrum (Scrum Master)' },
          { id: 'B', text: 'The Product Owner', textVi: 'Chủ sở hữu sản phẩm (Product Owner)' },
          { id: 'C', text: 'The Developers', textVi: 'Đội ngũ phát triển (Developers)' },
          { id: 'D', text: 'The Lead Project Manager', textVi: 'Trưởng ban quản lý dự án truyền thống' }
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
          { id: 'B', text: '15 minutes', textVi: '15 phút giới hạn thời gian' },
          { id: 'C', text: '45 minutes for a 4-week Sprint', textVi: '45 phút đối với Sprint 4 tuần' },
          { id: 'D', text: 'As long as the team needs to solve blockers', textVi: 'Kéo dài tùy ý đến khi giải quyết xong vướng mắc' }
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
          { id: 'A', text: 'The Scrum Master and QA Lead', textVi: 'Scrum Master cùng với Trưởng nhóm kiểm thử QA' },
          { id: 'B', text: 'The Scrum Team', textVi: 'Toàn bộ các thành viên Scrum Team' },
          { id: 'C', text: 'The Product Owner alone', textVi: 'Chỉ riêng cá nhân Product Owner' },
          { id: 'D', text: 'External Stakeholders', textVi: 'Các bên liên quan và khách hàng bên ngoài' }
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
          { id: 'A', text: 'Planning, Execution, Monitoring', textVi: 'Lập kế hoạch, Thực thi, Giám sát' },
          { id: 'B', text: 'Transparency, Inspection, Adaptation', textVi: 'Minh bạch, Kiểm tra, Thích ứng' },
          { id: 'C', text: 'Respect, Courage, Openness', textVi: 'Tôn trọng, Dũng cảm, Cởi mở' },
          { id: 'D', text: 'Velocity, Capacity, Burn-down', textVi: 'Vận tốc nhóm, Dung lượng, Biểu đồ Burn-down' }
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
          { id: 'A', text: 'Definition of Done', textVi: 'Định nghĩa hoàn thành (Definition of Done)' },
          { id: 'B', text: 'The Product Goal', textVi: 'Mục tiêu sản phẩm dài hạn (Product Goal)' },
          { id: 'C', text: 'The Sprint Goal', textVi: 'Mục tiêu Sprint ngắn hạn (Sprint Goal)' },
          { id: 'D', text: 'The Release Burn-up Chart', textVi: 'Biểu đồ tiến độ phát hành (Release Burn-up)' }
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
        question: 'How does the 2020 Scrum Guide define the accountability and leadership style of the Scrum Master?',
        questionVi: 'Scrum Guide 2020 định nghĩa vai trò và phong cách lãnh đạo của Scrum Master như thế nào?',
        options: [
          { id: 'A', text: 'As a "true leader who serves" the Scrum Team and the larger organization', textVi: 'Là một "nhà lãnh đạo phục vụ thực thụ" (true leader who serves) cho Scrum Team và tổ chức' },
          { id: 'B', text: 'As a traditional command-and-control project manager who assigns daily tasks', textVi: 'Là một quản lý dự án truyền thống có quyền chỉ huy, kiểm soát và giao việc hàng ngày' },
          { id: 'C', text: 'As an administrative meeting secretary without any accountability for team effectiveness', textVi: 'Là một thư ký hành chính chỉ ghi chép biên bản cuộc họp và không chịu trách nhiệm về hiệu quả của nhóm' },
          { id: 'D', text: 'As the technical lead who exclusively decides product architecture', textVi: 'Là một trưởng nhóm kỹ thuật duy nhất có quyền quyết định kiến trúc sản phẩm' }
        ],
        correctAnswers: ['A'],
        explanation: 'According to the 2020 Scrum Guide, "Scrum Masters are true leaders who serve the Scrum Team and the larger organization." They foster team effectiveness without traditional command-and-control authority.',
        explanationVi: 'Theo Scrum Guide 2020, "Scrum Master là những nhà lãnh đạo thực thụ phục vụ Scrum Team và tổ chức" (true leaders who serve), giúp cả nhóm tự quản và nâng cao hiệu quả làm việc thay vì quản lý phân cấp truyền thống.',
        reference: 'Scrum Guide 2020 - Scrum Master Accountabilities',
        topic: 'Scrum Roles & Accountabilities'
      },
      {
        id: 9,
        question: 'Who has the final say on the order of the Product Backlog?',
        questionVi: 'Ai là người có tiếng nói quyết định cuối cùng về thứ tự ưu tiên của Product Backlog?',
        options: [
          { id: 'A', text: 'The Lead Architect', textVi: 'Kiến trúc sư trưởng giải pháp (Lead Architect)' },
          { id: 'B', text: 'The Scrum Master', textVi: 'Chuyên gia điều phối Scrum Master' },
          { id: 'C', text: 'The Product Owner', textVi: 'Chủ sở hữu sản phẩm (Product Owner)' },
          { id: 'D', text: 'The Chief Executive Officer (CEO)', textVi: 'Tổng Giám đốc điều hành (CEO)' }
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
      },
      {
        id: 11,
        question: 'What happens to a Product Backlog item if it does not meet the Definition of Done by the end of the Sprint?',
        questionVi: 'Điều gì xảy ra với một hạng mục Product Backlog nếu nó không đáp ứng Definition of Done vào cuối Sprint?',
        options: [
          { id: 'A', text: 'It cannot be released or presented at the Sprint Review; it returns to the Product Backlog', textVi: 'Không thể phát hành hay trình diễn tại Sprint Review; hạng mục đó phải quay trở lại Product Backlog' },
          { id: 'B', text: 'It is released with a documented disclaimer of known defects', textVi: 'Vẫn phát hành kèm theo bản ghi nhận các lỗi đã biết' },
          { id: 'C', text: 'It is carried over automatically into the next Sprint backlog without re-estimation', textVi: 'Tự động chuyển thẳng sang Sprint tiếp theo mà không cần ước lượng lại' },
          { id: 'D', text: 'The Scrum Master reviews and approves an emergency exception', textVi: 'Scrum Master phê duyệt một ngoại lệ kỹ thuật khẩn cấp' }
        ],
        correctAnswers: ['A'],
        explanation: 'If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it re-enters the Product Backlog for future consideration.',
        explanationVi: 'Nếu một hạng mục không đạt Definition of Done, nó không bao giờ được coi là một phần của Increment và không được đem ra trình diễn tại Sprint Review; nó phải quay lại Product Backlog.',
        reference: 'Scrum Guide 2020 - Definition of Done',
        topic: 'Artifacts & Commitments'
      },
      {
        id: 12,
        question: 'Who is required to attend the Daily Scrum?',
        questionVi: 'Những ai bắt buộc phải tham gia cuộc họp Daily Scrum?',
        options: [
          { id: 'A', text: 'The entire organization and project stakeholders', textVi: 'Toàn bộ tổ chức và các bên liên quan dự án' },
          { id: 'B', text: 'Only the Developers of the Scrum Team', textVi: 'Chỉ riêng các Developers của Scrum Team' },
          { id: 'C', text: 'The Scrum Master and Product Owner only', textVi: 'Chỉ riêng Scrum Master và Product Owner' },
          { id: 'D', text: 'The Developers and the external Project Manager', textVi: 'Các Developers cùng với Quản lý dự án bên ngoài' }
        ],
        correctAnswers: ['B'],
        explanation: 'The Daily Scrum is an event for the Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.',
        explanationVi: 'Daily Scrum là sự kiện thiết kế dành riêng cho Developers. Nếu PO hoặc SM có trực tiếp làm task trong Sprint Backlog, họ sẽ tham gia với tư cách Developers.',
        reference: 'Scrum Guide 2020 - Daily Scrum',
        topic: 'Scrum Events'
      },
      {
        id: 13,
        question: 'What is the primary purpose of the Sprint Review?',
        questionVi: 'Mục đích cốt lõi của sự kiện Sprint Review là gì?',
        options: [
          { id: 'A', text: 'To inspect the outcome of the Sprint and determine future adaptations with stakeholders', textVi: 'Kiểm tra kết quả tạo ra trong Sprint và cùng các bên liên quan thích ứng kế hoạch tương lai' },
          { id: 'B', text: 'To evaluate individual developer performance metrics for annual appraisals', textVi: 'Đánh giá chỉ số hiệu suất cá nhân của từng lập trình viên để xét lương thưởng' },
          { id: 'C', text: 'To write code documentation and sign final acceptance contracts', textVi: 'Viết tài liệu kỹ thuật và ký hợp đồng nghiệm thu cuối cùng' },
          { id: 'D', text: 'To conduct an internal team retrospective without customer presence', textVi: 'Tổ chức họp rút kinh nghiệm nội bộ mà không có mặt khách hàng' }
        ],
        correctAnswers: ['A'],
        explanation: 'The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.',
        explanationVi: 'Mục đích của Sprint Review là kiểm tra thành quả của Sprint và cùng các bên liên quan thảo luận để thích ứng Product Backlog cho các bước tiếp theo.',
        reference: 'Scrum Guide 2020 - Sprint Review',
        topic: 'Scrum Events'
      },
      {
        id: 14,
        question: 'Which of the following best describes the Scrum Team according to the 2020 Scrum Guide?',
        questionVi: 'Mô tả nào sau đây đúng nhất về một Scrum Team theo Scrum Guide 2020?',
        options: [
          { id: 'A', text: 'A cohesive, cross-functional, self-managing unit of professionals focused on one Product Goal', textVi: 'Một tập thể gắn kết, liên chức năng, tự quản lý và cùng tập trung vào một Product Goal' },
          { id: 'B', text: 'A hierarchical team led by a Project Manager with separated QA and Dev sub-teams', textVi: 'Nhóm phân cấp do Project Manager chỉ đạo với các nhóm con tách biệt cho QA và Lập trình' },
          { id: 'C', text: 'A pool of temporary contractors directed daily by external stakeholders', textVi: 'Nhóm cộng tác viên thời vụ do khách hàng bên ngoài trực tiếp điều hành hàng ngày' },
          { id: 'D', text: 'An unlimited group of engineers without defined individual accountabilities', textVi: 'Một nhóm kỹ sư không giới hạn số lượng và không có phân định trách nhiệm' }
        ],
        correctAnswers: ['A'],
        explanation: 'The Scrum Team is a cohesive unit of professionals focused on one active Product Goal at a time. They are cross-functional (having all skills needed) and self-managing (internally deciding who does what, when, and how).',
        explanationVi: 'Scrum Team là một thể thống nhất gồm các chuyên gia tập trung vào một Product Goal tại một thời điểm. Nhóm có tính liên chức năng và tự quản lý hoàn toàn.',
        reference: 'Scrum Guide 2020 - Scrum Team',
        topic: 'Scrum Roles & Accountabilities'
      },
      {
        id: 15,
        question: 'What are the five core values of Scrum?',
        questionVi: 'Năm giá trị cốt lõi của Scrum là gì?',
        options: [
          { id: 'A', text: 'Commitment, Focus, Openness, Respect, and Courage', textVi: 'Cam kết, Tập trung, Cởi mở, Tôn trọng và Dũng cảm' },
          { id: 'B', text: 'Speed, Low Cost, Perfection, Control, and Authority', textVi: 'Tốc độ, Chi phí thấp, Hoàn hảo, Kiểm soát và Quyền lực' },
          { id: 'C', text: 'Documentation, Negotiation, Processes, Tools, and Plans', textVi: 'Tài liệu, Đàm phán, Quy trình, Công cụ và Kế hoạch' },
          { id: 'D', text: 'Analysis, Architecture, Hierarchy, Metrics, and Compliance', textVi: 'Phân tích, Kiến trúc, Thứ bậc, Chỉ số và Tuân thủ' }
        ],
        correctAnswers: ['A'],
        explanation: 'Successful use of Scrum depends on people becoming more proficient in living five values: Commitment, Focus, Openness, Respect, and Courage.',
        explanationVi: 'Thành công của Scrum phụ thuộc vào việc cả nhóm sống và thực hành 5 giá trị cốt lõi: Cam kết (Commitment), Tập trung (Focus), Cởi mở (Openness), Tôn trọng (Respect), và Dũng cảm (Courage).',
        reference: 'Scrum Guide 2020 - Scrum Values',
        topic: 'Scrum Theory & Values'
      }
    ]
  },
  {
    id: 'ccar-f',
    title: 'CCAR-F // Capital & Risk Fundamentals',
    subtitle: 'Comprehensive Capital Analysis & Review (US Fed Standard)',
    category: 'finance',
    badge: 'BANKING & RISK',
    totalQuestions: 10, // Full 10-question set
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
          { id: 'A', text: '2.0%', textVi: '2.0% tổng tài sản rủi ro' },
          { id: 'B', text: '4.5%', textVi: '4.5% tổng tài sản rủi ro (RWA)' },
          { id: 'C', text: '8.0%', textVi: '8.0% tổng tài sản rủi ro' },
          { id: 'D', text: '12.5%', textVi: '12.5% tổng tài sản rủi ro' }
        ],
        correctAnswers: ['B'],
        explanation: 'The minimum regulatory CET1 capital ratio requirement under Basel III is 4.5% of risk-weighted assets (RWA). Banks must also maintain a Capital Conservation Buffer of 2.5%, bringing the effective minimum to 7.0%.',
        explanationVi: 'Tỷ lệ vốn tối thiểu CET1 theo Basel III là 4.5% tổng tài sản có rủi ro (RWA). Ngoài ra ngân hàng phải có thêm bộ đệm bảo toàn vốn 2.5% (đưa mức thực tế lên 7.0%).',
        reference: 'Basel III Capital Accord - Pillar 1 Requirements',
        topic: 'Capital Metrics'
      },
      {
        id: 6,
        question: 'What restrictions are imposed on a bank holding company if its capital ratios fall into the Capital Conservation Buffer (CCB)?',
        questionVi: 'Những hạn chế nào được áp đặt lên ngân hàng nếu tỷ lệ an toàn vốn rơi vào vùng Bộ đệm Bảo toàn Vốn (CCB)?',
        options: [
          { id: 'A', text: 'Progressive percentage caps on capital distributions (dividends, share repurchases) and discretionary bonus payments', textVi: 'Áp trần tỷ lệ tăng dần đối với việc chia cổ tức, mua lại cổ phiếu và tiền thưởng điều hành' },
          { id: 'B', text: 'Immediate revocation of the commercial banking operating license', textVi: 'Thu hồi giấy phép hoạt động ngân hàng thương mại ngay lập tức' },
          { id: 'C', text: 'Mandatory freeze on all retail customer deposit withdrawals', textVi: 'Đóng băng bắt buộc toàn bộ tiền gửi rút ra của khách hàng cá nhân' },
          { id: 'D', text: 'Forced liquidation of all residential mortgage assets', textVi: 'Bắt buộc thanh lý toàn bộ tài sản thế chấp nhà ở' }
        ],
        correctAnswers: ['A'],
        explanation: 'When a bank’s capital ratios dip into the Capital Conservation Buffer (below 2.5% above regulatory minimums), the firm faces progressively tighter caps on the percentage of eligible retained earnings it can distribute via dividends, share buybacks, and discretionary bonuses.',
        explanationVi: 'Khi tỷ lệ vốn của ngân hàng rơi vào vùng đệm CCB, tổ chức này sẽ chịu các hạn chế nghiêm ngặt tăng dần về tỷ lệ cổ tức được chia, việc mua lại cổ phiếu và tiền thưởng cho ban lãnh đạo.',
        reference: 'Basel III Framework - Capital Conservation Buffer Standards',
        topic: 'Capital Distribution Restrictions'
      },
      {
        id: 7,
        question: 'What is the role of the Federal Reserve FR Y-14 regulatory reporting schedules in the CCAR process?',
        questionVi: 'Vai trò của hệ thống báo cáo giám sát FR Y-14 trong quy trình CCAR là gì?',
        options: [
          { id: 'A', text: 'To collect granular historical portfolio data, balance sheet projections, and capital plan details from large bank holding companies', textVi: 'Thu thập dữ liệu danh mục chi tiết, dự phóng bảng cân đối kế toán và kế hoạch vốn của các ngân hàng lớn' },
          { id: 'B', text: 'To publish daily retail consumer loan interest rates', textVi: 'Công bố lãi suất cho vay tiêu dùng bán lẻ hàng ngày' },
          { id: 'C', text: 'To audit personal tax returns of commercial banking clients', textVi: 'Kiểm toán tờ khai thuế cá nhân của khách hàng vay vốn' },
          { id: 'D', text: 'To serve as a marketing registry for cross-border financial services', textVi: 'Làm sổ đăng bạ quảng cáo cho các dịch vụ tài chính xuyên biên giới' }
        ],
        correctAnswers: ['A'],
        explanation: 'The FR Y-14 regulatory reports (FR Y-14A annual, FR Y-14Q quarterly, FR Y-14M monthly) collect detailed data on credit exposures, trading risk, counterparty exposures, and capital planning projections used directly in Fed supervisory stress testing models.',
        explanationVi: 'Báo cáo FR Y-14 (A hàng năm, Q hàng quý, M hàng tháng) thu thập dữ liệu rủi ro tín dụng, danh mục đầu tư và kế hoạch vốn chi tiết để Fed chạy mô hình stress test độc lập.',
        reference: 'Federal Reserve Board - FR Y-14 Reporting Overview',
        topic: 'Regulatory Reporting'
      },
      {
        id: 8,
        question: 'Under CCAR capital stress projections, how are pre-provision net revenue (PPNR) and credit loss provisions modeled?',
        questionVi: 'Trong dự phóng sức chịu tải vốn CCAR, doanh thu thuần trước dự phòng (PPNR) và dự phòng rủi ro tín dụng được mô hình hóa như thế nào?',
        options: [
          { id: 'A', text: 'As dynamic multi-quarter econometric projections driven by macroeconomic shock variables (unemployment, GDP contraction, credit spreads)', textVi: 'Dưới dạng các hàm kinh tế lượng đa quý động chịu tác động bởi biến số sốc vĩ mô (thất nghiệp tăng, GDP sụt giảm, chênh lệch tín dụng dãn rộng)' },
          { id: 'B', text: 'As flat fixed historical averages without any scenario sensitivity', textVi: 'Dưới dạng số bình quân cố định trong quá khứ không nhạy cảm với kịch bản khủng hoảng' },
          { id: 'C', text: 'Using subjective management intuition without quantitative risk models', textVi: 'Dựa trên phán đoán cảm tính của ban quản lý mà không dùng mô hình toán lượng' },
          { id: 'D', text: 'By assuming zero loan defaults throughout the entire 9-quarter horizon', textVi: 'Bằng giả định không có bất kỳ khoản nợ xấu nào phát sinh trong suốt 9 quý' }
        ],
        correctAnswers: ['A'],
        explanation: 'PPNR and loan loss provisions in CCAR are modeled using sophisticated econometric equations over a forward-looking 9-quarter horizon, linking net interest margin, non-interest revenue, and defaults to macroeconomic stress factors.',
        explanationVi: 'PPNR và tổn thất tín dụng trong CCAR được dự phóng trong 9 quý liên tiếp thông qua các mô hình kinh tế lượng gắn kết trực tiếp với các cú sốc vĩ mô của kịch bản Severely Adverse.',
        reference: 'Federal Reserve Dodd-Frank Act Stress Testing Methodology',
        topic: 'Quantitative Modeling'
      },
      {
        id: 9,
        question: 'What does the "qualitative assessment" component in the Federal Reserve CCAR evaluate?',
        questionVi: 'Hợp phần "đánh giá định tính" trong khung CCAR của Fed xem xét nội dung gì?',
        options: [
          { id: 'A', text: 'The strength of internal governance, risk identification, model risk management, and internal audit oversight supporting capital planning', textVi: 'Năng lực quản trị nội bộ, quy trình nhận diện rủi ro, quản trị rủi ro mô hình và kiểm toán nội bộ phục vụ kế hoạch vốn' },
          { id: 'B', text: 'The visual branding and exterior architecture of physical bank branches', textVi: 'Thiết kế thương hiệu và kiến trúc bên ngoài của các phòng giao dịch ngân hàng' },
          { id: 'C', text: 'Customer satisfaction ratings on digital mobile apps', textVi: 'Điểm đánh giá mức độ hài lòng của người dùng trên ứng dụng di động' },
          { id: 'D', text: 'The volume of sponsorship contracts with sports leagues', textVi: 'Khối lượng hợp đồng tài trợ cho các giải đấu thể thao' }
        ],
        correctAnswers: ['A'],
        explanation: 'The qualitative assessment examines whether a bank has rigorous capital planning governance, comprehensive risk identification, independent model validation, and effective internal controls to ensure sound capital decisions.',
        explanationVi: 'Đánh giá định tính trong CCAR thẩm định năng lực quản trị nội bộ, mức độ độc lập của kiểm định mô hình rủi ro (Model Validation) và sự giám sát chặt chẽ của Hội đồng Quản trị đối với kế hoạch vốn.',
        reference: 'Federal Reserve CCAR Summary Instructions & Guidelines',
        topic: 'Qualitative Governance'
      },
      {
        id: 10,
        question: 'What is the purpose of the Stress Capital Buffer (SCB) framework introduced by the Federal Reserve?',
        questionVi: 'Mục đích của quy định Bộ đệm Vốn Thử nghiệm Căng thẳng (SCB) do Fed áp dụng là gì?',
        options: [
          { id: 'A', text: 'It integrates bank-specific annual stress test loss results directly into ongoing point-in-time regulatory CET1 requirements', textVi: 'Tích hợp kết quả suy giảm vốn từ bài test căng thẳng hàng năm trực tiếp vào yêu cầu an toàn vốn CET1 thường xuyên của từng ngân hàng' },
          { id: 'B', text: 'It completely exempts large US banks from Basel III capital standards', textVi: 'Miễn trừ hoàn toàn các ngân hàng lớn khỏi chuẩn mực an toàn vốn Basel III' },
          { id: 'C', text: 'It freezes all corporate lending during economic recessions', textVi: 'Đình chỉ toàn bộ hoạt động cho vay doanh nghiệp trong thời kỳ suy thoái kinh tế' },
          { id: 'D', text: 'It requires commercial banks to maintain 100% cash reserves for all loans', textVi: 'Bắt buộc các ngân hàng phải giữ 100% tiền mặt dự trữ cho mọi khoản vay' }
        ],
        correctAnswers: ['A'],
        explanation: 'The Stress Capital Buffer (SCB) rule combines the static 2.5% buffer with firm-specific stress test losses from the Supervisory Severely Adverse scenario plus 4 quarters of planned common stock dividends, creating a risk-sensitive capital requirement.',
        explanationVi: 'Quy định SCB thay thế bộ đệm 2.5% cố định bằng mức tổn thất thực tế tính từ bài stress test của Fed cộng với 4 quý cổ tức kế hoạch, tạo ra yêu cầu an toàn vốn cá nhân hóa theo mức độ rủi ro của từng ngân hàng.',
        reference: 'Federal Reserve Final Rule: Stress Capital Buffer Framework',
        topic: 'Stress Capital Buffer'
      }
    ]
  }
]
