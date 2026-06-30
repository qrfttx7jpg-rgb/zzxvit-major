// ============================================================
// 郑州信息科技职业学院 — 专业推荐数据
// 数据说明：基于历年公开信息编译，仅供志愿填报参考
// ============================================================

const SCHOOL_DATA = {
  id: 1932,
  name: '郑州信息科技职业学院',
  shortName: '郑州信息科技',
  code: '13565',
  type: '公办',
  level: '专科（高职）',
  location: '河南·郑州',
  address: '郑州市金水区龙子湖东路36号',
  website: 'http://www.zzxvit.edu.cn',
  description: '郑州信息科技职业学院是经河南省人民政府批准、教育部备案的公办全日制普通高等职业院校，隶属于河南开放大学。学院始建于2003年，位于郑州市郑东新区龙子湖高校园区，校园占地500余亩。学院以信息技术为特色，工、管、经、文协调发展，是河南省职业教育品牌示范院校。',
  // 近3年河南最低投档线估算
  admissionLines: {
    science: {
      2024: { min: 338, max: 385, avg: 358 },
      2023: { min: 325, max: 378, avg: 348 },
      2022: { min: 312, max: 365, avg: 335 }
    },
    arts: {
      2024: { min: 315, max: 362, avg: 336 },
      2023: { min: 302, max: 355, avg: 325 },
      2022: { min: 290, max: 345, avg: 316 }
    }
  },
  candidates: {
    science: 480000,
    arts: 320000
  }
};

const INTEREST_CATEGORIES = [
  { id: 'it', name: '信息技术', icon: '💻', description: '计算机、软件、网络、大数据等' },
  { id: 'ee', name: '电子机械', icon: '⚙️', description: '电子信息、机电、汽车、自动化等' },
  { id: 'finance', name: '财经管理', icon: '📊', description: '会计、电商、物流、市场营销等' },
  { id: 'construction', name: '建筑工程', icon: '🏗️', description: '建筑工程、造价、室内设计等' },
  { id: 'humanity', name: '人文教育', icon: '📚', description: '学前教育、酒店管理、旅游等' }
];

const MAJORS_DATA = {
  science: [
    {
      id: 'cs-app', name: '计算机应用技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 355, predictScore: 358,
      description: '培养掌握计算机系统基础知识、具备软件开发、Web前端设计、数据库管理能力的高素质技术技能人才。',
      courses: ['C语言程序设计','数据结构与算法','Java面向对象编程','Web前端开发技术','数据库原理与应用','计算机网络基础','Linux操作系统','软件工程概论'],
      employmentRate: '93.2%',
      employmentDirections: ['Web前端开发工程师','Java开发工程师','数据库管理员','软件测试工程师','IT技术支持工程师'],
      relatedJobs: '前端开发、后端开发、数据库运维',
      salaryRange: '4000-8000元/月'
    },
    {
      id: 'software', name: '软件技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 348, predictScore: 352,
      description: '培养掌握主流软件开发平台和开发语言，具备软件设计、编码、测试与维护能力的高素质技术技能人才。',
      courses: ['Java程序设计','数据库技术','软件测试技术','软件工程与UML','Web应用开发','Android移动开发','项目综合实训'],
      employmentRate: '94.5%',
      employmentDirections: ['Java开发工程师','软件测试工程师','移动端开发工程师','软件实施工程师','产品经理'],
      relatedJobs: '软件开发、软件测试、系统实施',
      salaryRange: '4500-8500元/月'
    },
    {
      id: 'bigdata', name: '大数据技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 352, predictScore: 355,
      description: '培养掌握大数据采集、存储、处理和分析技术，具备大数据平台运维与数据可视化能力的高素质技术技能人才。',
      courses: ['Python数据分析','Hadoop分布式计算','数据库原理与应用','数据仓库技术','数据可视化','Spark大数据处理','大数据平台运维'],
      employmentRate: '92.8%',
      employmentDirections: ['大数据开发工程师','数据分析师','数据仓库工程师','大数据平台运维工程师','数据产品经理'],
      relatedJobs: '大数据开发、数据分析、平台运维',
      salaryRange: '5000-9000元/月'
    },
    {
      id: 'ai', name: '人工智能技术应用', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 360, predictScore: 365,
      description: '培养掌握人工智能基础理论和技术，具备AI应用开发、机器学习算法应用、智能系统运维能力的高素质技术技能人才。',
      courses: ['Python编程基础','机器学习基础','深度学习与神经网络','自然语言处理','计算机视觉应用','智能终端应用开发','AI项目综合实训'],
      employmentRate: '93.6%',
      employmentDirections: ['AI应用开发工程师','机器学习工程师','计算机视觉工程师','智能系统运维工程师','数据分析师'],
      relatedJobs: 'AI开发、机器学习、智能系统运维',
      salaryRange: '5500-9500元/月'
    },
    {
      id: 'iot', name: '物联网应用技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 340, predictScore: 345,
      description: '培养掌握物联网基础理论和技术，具备物联网系统集成、嵌入式开发、智能设备调试与维护能力。',
      courses: ['C/C++程序设计','嵌入式系统开发','传感器技术应用','无线通信技术','物联网组网技术','RFID技术应用','物联网综合实训'],
      employmentRate: '91.5%',
      employmentDirections: ['嵌入式开发工程师','物联网实施工程师','智能硬件测试工程师','物联网系统运维','售前技术支持工程师'],
      relatedJobs: '嵌入式开发、物联网实施、智能硬件',
      salaryRange: '4000-8000元/月'
    },
    {
      id: 'cloud', name: '云计算技术应用', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 345, predictScore: 350,
      description: '培养掌握云计算基础架构和技术，具备云平台搭建、运维管理与云应用开发能力。',
      courses: ['Linux系统管理','云计算基础架构','虚拟化技术','Docker容器技术','Kubernetes集群管理','云安全技术','Python运维自动化'],
      employmentRate: '92.1%',
      employmentDirections: ['云计算运维工程师','云平台架构师','DevOps工程师','云安全工程师','SRE运维工程师'],
      relatedJobs: '云运维、云架构、DevOps',
      salaryRange: '5000-9000元/月'
    },
    {
      id: 'mobile-dev', name: '移动应用开发', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 338, predictScore: 342,
      description: '培养掌握移动互联网应用开发技术，具备Android/iOS应用开发、移动端UI设计及后端接口开发能力。',
      courses: ['Java程序设计','Android应用开发','Kotlin语言基础','移动端UI设计','微信小程序开发','移动后端开发','APP项目实战'],
      employmentRate: '91.8%',
      employmentDirections: ['Android开发工程师','iOS开发工程师','小程序开发工程师','移动端测试工程师','跨平台开发工程师'],
      relatedJobs: '移动开发、小程序开发、APP测试',
      salaryRange: '4500-8500元/月'
    },
    {
      id: 'digital-media', name: '数字媒体技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 336, predictScore: 340,
      description: '培养掌握数字媒体内容创作、影视后期制作、交互媒体设计等技术的高素质技术技能人才。',
      courses: ['平面设计基础','摄影与摄像技术','非线性编辑','三维建模与动画','影视后期特效','交互媒体设计','UI/UX设计'],
      employmentRate: '90.5%',
      employmentDirections: ['平面设计师','视频剪辑师','UI/UX设计师','三维建模师','新媒体运营'],
      relatedJobs: '平面设计、视频剪辑、UI设计',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'electronic-info', name: '电子信息工程技术', category: 'ee', categoryName: '电子机械',
      duration: 3, tuition: 4200, avgScore: 335, predictScore: 338,
      description: '培养掌握电子技术、信息处理与通信技术，具备电子设备设计、生产调试及维护能力。',
      courses: ['电路分析基础','模拟电子技术','数字电子技术','单片机技术及应用','信号与系统','电子测量技术','PCB设计与制作'],
      employmentRate: '91.2%',
      employmentDirections: ['电子工程师','嵌入式硬件工程师','电子产品测试工程师','技术支持工程师','生产管理工程师'],
      relatedJobs: '电子设计、硬件测试、技术支持',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'communication', name: '通信技术', category: 'ee', categoryName: '电子机械',
      duration: 3, tuition: 4200, avgScore: 330, predictScore: 335,
      description: '培养掌握通信系统原理和技术，具备通信设备安装调试、网络运维及通信工程管理能力。',
      courses: ['通信原理','数据通信与网络','移动通信技术','光纤通信技术','通信工程管理','网络优化技术','5G技术概论'],
      employmentRate: '90.8%',
      employmentDirections: ['通信工程师','网络优化工程师','通信工程监理','通信设备调试工程师','网络运维工程师'],
      relatedJobs: '通信工程、网络优化、设备调试',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'mechatronics', name: '机电一体化技术', category: 'ee', categoryName: '电子机械',
      duration: 3, tuition: 4200, avgScore: 328, predictScore: 332,
      description: '培养掌握机电一体化技术基础理论和专业知识，具备机电设备安装调试、维护维修及自动化生产线管理能力。',
      courses: ['机械制图与CAD','电工电子技术','PLC可编程控制器','传感器与检测技术','液压与气动技术','机电设备维修','自动化生产线技术'],
      employmentRate: '92.5%',
      employmentDirections: ['机电工程师','自动化工程师','设备维护工程师','PLC编程工程师','生产设备管理员'],
      relatedJobs: '机电设计、自动化控制、设备维护',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'auto', name: '汽车检测与维修技术', category: 'ee', categoryName: '电子机械',
      duration: 3, tuition: 4200, avgScore: 322, predictScore: 326,
      description: '培养掌握汽车构造原理和检测维修技术，具备汽车故障诊断、维护保养及新能源汽车维修能力。',
      courses: ['汽车构造','汽车发动机电控技术','汽车底盘电控技术','汽车故障诊断技术','新能源汽车技术','汽车检测与维护','汽车售后服务管理'],
      employmentRate: '91.0%',
      employmentDirections: ['汽车维修技师','汽车检测工程师','新能源汽车维修师','4S店技术主管','汽车售后服务顾问'],
      relatedJobs: '汽车维修、检测诊断、售后服务',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'intelligent-control', name: '工业机器人技术', category: 'ee', categoryName: '电子机械',
      duration: 3, tuition: 4200, avgScore: 332, predictScore: 336,
      description: '培养掌握工业机器人应用技术，具备机器人工作站安装调试、编程操作与维护管理能力。',
      courses: ['工业机器人基础','PLC编程技术','机器人编程与操作','机器人离线仿真','机器人工作站集成','传感器技术','智能制造概论'],
      employmentRate: '92.8%',
      employmentDirections: ['工业机器人工程师','机器人调试工程师','智能制造工程师','PLC编程工程师','自动化设备管理员'],
      relatedJobs: '机器人编程、工作站集成、智能制造',
      salaryRange: '4500-8500元/月'
    },
    {
      id: 'ecommerce', name: '电子商务', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 330, predictScore: 334,
      description: '培养掌握电子商务基础理论和运营技术，具备网店运营、网络营销、电商数据分析与客户关系管理能力。',
      courses: ['电子商务概论','网络营销实务','网店运营与管理','电商数据分析','客户关系管理','跨境电商实务','电商视觉设计'],
      employmentRate: '90.5%',
      employmentDirections: ['电商运营专员','网络营销策划','新媒体运营','跨境电商运营','电商数据分析师'],
      relatedJobs: '电商运营、网络营销、新媒体',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'accounting', name: '大数据与会计', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 335, predictScore: 340,
      description: '培养掌握会计核算、财务管理与大数据分析技术，具备智能化会计处理、财务数据分析能力。',
      courses: ['基础会计','财务会计实务','成本会计','财务管理','税法与纳税实务','会计信息化','大数据财务分析'],
      employmentRate: '91.8%',
      employmentDirections: ['会计师助理','财务数据分析师','税务专员','成本核算员','审计助理'],
      relatedJobs: '会计、财务分析、审计',
      salaryRange: '3500-6500元/月'
    },
    {
      id: 'logistics', name: '现代物流管理', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 320, predictScore: 325,
      description: '培养掌握现代物流管理理论和技术，具备物流系统规划、仓储配送管理、供应链运营能力。',
      courses: ['物流管理基础','仓储与配送管理','供应链管理','物流信息系统','运输管理实务','采购与供应管理','国际物流实务'],
      employmentRate: '89.5%',
      employmentDirections: ['物流运营专员','仓储主管','供应链分析员','运输调度员','采购专员'],
      relatedJobs: '物流运营、供应链管理、仓储管理',
      salaryRange: '3500-6500元/月'
    },
    {
      id: 'marketing', name: '市场营销', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 325, predictScore: 330,
      description: '培养掌握市场营销理论和实务技能，具备市场调研、营销策划、品牌推广与销售管理能力。',
      courses: ['市场营销学','消费者心理学','市场调查与预测','品牌策划与管理','网络营销','商务谈判技巧','销售管理实务'],
      employmentRate: '89.2%',
      employmentDirections: ['市场营销专员','品牌策划','销售经理助理','新媒体运营','市场调研分析师'],
      relatedJobs: '市场营销、品牌策划、新媒体运营',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'construction-eng', name: '建筑工程技术', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 325, predictScore: 330,
      description: '培养掌握建筑工程基础理论和技术，具备建筑施工组织管理、工程测量、质量验收与资料管理能力。',
      courses: ['建筑制图与识图','建筑力学','建筑材料','建筑施工技术','建筑结构','工程测量','施工组织与管理'],
      employmentRate: '91.5%',
      employmentDirections: ['施工员','质量员','安全员','资料员','工程监理'],
      relatedJobs: '施工管理、质量检测、工程监理',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'eng-cost', name: '工程造价', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 330, predictScore: 335,
      description: '培养掌握工程造价管理理论和技术，具备工程预决算编制、招投标文件编制与成本管控能力。',
      courses: ['建筑工程计量与计价','工程造价管理','工程经济学','建筑CAD','工程招投标与合同管理','安装工程预算','工程项目管理'],
      employmentRate: '92.2%',
      employmentDirections: ['造价员','预算员','招投标专员','成本控制专员','工程审计助理'],
      relatedJobs: '工程造价、工程预算、成本控制',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'interior-design', name: '建筑室内设计', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 322, predictScore: 326,
      description: '培养掌握室内设计基础理论和专业技能，具备室内方案设计、效果图表现与施工图绘制能力。',
      courses: ['设计素描与色彩','室内设计原理','CAD施工图绘制','3D Max效果图','室内装饰材料','软装设计','室内照明设计'],
      employmentRate: '89.8%',
      employmentDirections: ['室内设计师','效果图设计师','施工图绘图员','软装设计师','装修项目经理'],
      relatedJobs: '室内设计、效果图绘制、软装设计',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'preschool-edu', name: '学前教育', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 328, predictScore: 332,
      description: '培养掌握学前教育基本理论和实践技能，具备幼儿教育教学、保育管理及艺术启蒙能力。',
      courses: ['学前教育学','儿童发展心理学','幼儿卫生与保健','幼儿游戏与指导','幼儿语言教育','幼儿艺术教育','钢琴与声乐基础'],
      employmentRate: '93.5%',
      employmentDirections: ['幼儿园教师','早教机构教师','幼儿教育培训师','儿童产品开发','家庭教育指导师'],
      relatedJobs: '幼儿教师、早教培训、教育产品',
      salaryRange: '3000-6000元/月'
    },
    {
      id: 'hotel-mgmt', name: '酒店管理与数字化运营', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 316, predictScore: 320,
      description: '培养掌握酒店管理与数字化运营理论和技能，具备酒店前厅客房管理、餐饮服务及数字化营销能力。',
      courses: ['酒店管理概论','前厅客房服务与管理','餐饮服务与管理','酒店数字化营销','酒店人力资源管理','酒水知识与调酒','酒店英语口语'],
      employmentRate: '88.5%',
      employmentDirections: ['酒店前厅主管','客房部主管','餐饮部主管','酒店营销专员','会展策划专员'],
      relatedJobs: '酒店管理、餐饮管理、会展策划',
      salaryRange: '3000-6000元/月'
    },
    {
      id: 'tourism', name: '旅游管理', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 318, predictScore: 322,
      description: '培养掌握旅游管理理论和业务技能，具备导游讲解、旅游产品策划与旅游电子商务运营能力。',
      courses: ['旅游学概论','导游业务','旅游市场营销','旅游电子商务','景区管理','旅游英语','旅游线路设计'],
      employmentRate: '87.5%',
      employmentDirections: ['导游','旅游顾问','旅游电商运营','景区管理专员','旅游产品策划'],
      relatedJobs: '导游、旅游策划、景区管理',
      salaryRange: '3000-6000元/月'
    }
  ],
  arts: [
    {
      id: 'ecommerce', name: '电子商务', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 328, predictScore: 332,
      description: '培养掌握电子商务基础理论和运营技术，具备网店运营、网络营销、电商数据分析与客户关系管理能力。',
      courses: ['电子商务概论','网络营销实务','网店运营与管理','电商数据分析','客户关系管理','跨境电商实务','电商视觉设计'],
      employmentRate: '90.5%',
      employmentDirections: ['电商运营专员','网络营销策划','新媒体运营','跨境电商运营','电商数据分析师'],
      relatedJobs: '电商运营、网络营销、新媒体',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'accounting', name: '大数据与会计', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 335, predictScore: 340,
      description: '培养掌握会计核算、财务管理与大数据分析技术，具备智能化会计处理、财务数据分析能力。',
      courses: ['基础会计','财务会计实务','成本会计','财务管理','税法与纳税实务','会计信息化','大数据财务分析'],
      employmentRate: '91.8%',
      employmentDirections: ['会计师助理','财务数据分析师','税务专员','成本核算员','审计助理'],
      relatedJobs: '会计、财务分析、审计',
      salaryRange: '3500-6500元/月'
    },
    {
      id: 'logistics', name: '现代物流管理', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 318, predictScore: 322,
      description: '培养掌握现代物流管理理论和技术，具备物流系统规划、仓储配送管理、供应链运营能力。',
      courses: ['物流管理基础','仓储与配送管理','供应链管理','物流信息系统','运输管理实务','采购与供应管理','国际物流实务'],
      employmentRate: '89.5%',
      employmentDirections: ['物流运营专员','仓储主管','供应链分析员','运输调度员','采购专员'],
      relatedJobs: '物流运营、供应链管理、仓储管理',
      salaryRange: '3500-6500元/月'
    },
    {
      id: 'marketing', name: '市场营销', category: 'finance', categoryName: '财经管理',
      duration: 3, tuition: 3700, avgScore: 322, predictScore: 326,
      description: '培养掌握市场营销理论和实务技能，具备市场调研、营销策划、品牌推广与销售管理能力。',
      courses: ['市场营销学','消费者心理学','市场调查与预测','品牌策划与管理','网络营销','商务谈判技巧','销售管理实务'],
      employmentRate: '89.2%',
      employmentDirections: ['市场营销专员','品牌策划','销售经理助理','新媒体运营','市场调研分析师'],
      relatedJobs: '市场营销、品牌策划、新媒体运营',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'preschool-edu', name: '学前教育', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 330, predictScore: 335,
      description: '培养掌握学前教育基本理论和实践技能，具备幼儿教育教学、保育管理及艺术启蒙能力。',
      courses: ['学前教育学','儿童发展心理学','幼儿卫生与保健','幼儿游戏与指导','幼儿语言教育','幼儿艺术教育','钢琴与声乐基础'],
      employmentRate: '93.5%',
      employmentDirections: ['幼儿园教师','早教机构教师','幼儿教育培训师','儿童产品开发','家庭教育指导师'],
      relatedJobs: '幼儿教师、早教培训、教育产品',
      salaryRange: '3000-6000元/月'
    },
    {
      id: 'hotel-mgmt', name: '酒店管理与数字化运营', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 315, predictScore: 318,
      description: '培养掌握酒店管理与数字化运营理论和技能，具备酒店前厅客房管理、餐饮服务及数字化营销能力。',
      courses: ['酒店管理概论','前厅客房服务与管理','餐饮服务与管理','酒店数字化营销','酒店人力资源管理','酒水知识与调酒','酒店英语口语'],
      employmentRate: '88.5%',
      employmentDirections: ['酒店前厅主管','客房部主管','餐饮部主管','酒店营销专员','会展策划专员'],
      relatedJobs: '酒店管理、餐饮管理、会展策划',
      salaryRange: '3000-6000元/月'
    },
    {
      id: 'tourism', name: '旅游管理', category: 'humanity', categoryName: '人文教育',
      duration: 3, tuition: 3700, avgScore: 316, predictScore: 320,
      description: '培养掌握旅游管理理论和业务技能，具备导游讲解、旅游产品策划与旅游电子商务运营能力。',
      courses: ['旅游学概论','导游业务','旅游市场营销','旅游电子商务','景区管理','旅游英语','旅游线路设计'],
      employmentRate: '87.5%',
      employmentDirections: ['导游','旅游顾问','旅游电商运营','景区管理专员','旅游产品策划'],
      relatedJobs: '导游、旅游策划、景区管理',
      salaryRange: '3000-6000元/月'
    },
    {
      id: 'digital-media', name: '数字媒体技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 326, predictScore: 330,
      description: '培养掌握数字媒体内容创作、影视后期制作、交互媒体设计等技术的高素质技术技能人才。',
      courses: ['平面设计基础','摄影与摄像技术','非线性编辑','三维建模与动画','影视后期特效','交互媒体设计','UI/UX设计'],
      employmentRate: '90.5%',
      employmentDirections: ['平面设计师','视频剪辑师','UI/UX设计师','三维建模师','新媒体运营'],
      relatedJobs: '平面设计、视频剪辑、UI设计',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'eng-cost', name: '工程造价', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 325, predictScore: 328,
      description: '培养掌握工程造价管理理论和技术，具备工程预决算编制、招投标文件编制与成本管控能力。',
      courses: ['建筑工程计量与计价','工程造价管理','工程经济学','建筑CAD','工程招投标与合同管理','安装工程预算','工程项目管理'],
      employmentRate: '92.2%',
      employmentDirections: ['造价员','预算员','招投标专员','成本控制专员','工程审计助理'],
      relatedJobs: '工程造价、工程预算、成本控制',
      salaryRange: '4000-7500元/月'
    },
    {
      id: 'interior-design', name: '建筑室内设计', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 320, predictScore: 324,
      description: '培养掌握室内设计基础理论和专业技能，具备室内方案设计、效果图表现与施工图绘制能力。',
      courses: ['设计素描与色彩','室内设计原理','CAD施工图绘制','3D Max效果图','室内装饰材料','软装设计','室内照明设计'],
      employmentRate: '89.8%',
      employmentDirections: ['室内设计师','效果图设计师','施工图绘图员','软装设计师','装修项目经理'],
      relatedJobs: '室内设计、效果图绘制、软装设计',
      salaryRange: '3500-7000元/月'
    },
    {
      id: 'cs-app', name: '计算机应用技术', category: 'it', categoryName: '信息技术',
      duration: 3, tuition: 4200, avgScore: 340, predictScore: 345,
      description: '培养掌握计算机系统基础知识、具备软件开发、Web前端设计、数据库管理能力的高素质技术技能人才。',
      courses: ['C语言程序设计','数据结构与算法','Java面向对象编程','Web前端开发技术','数据库原理与应用','计算机网络基础','Linux操作系统','软件工程概论'],
      employmentRate: '93.2%',
      employmentDirections: ['Web前端开发工程师','Java开发工程师','数据库管理员','软件测试工程师','IT技术支持工程师'],
      relatedJobs: '前端开发、后端开发、数据库运维',
      salaryRange: '4000-8000元/月'
    },
    {
      id: 'construction-eng', name: '建筑工程技术', category: 'construction', categoryName: '建筑工程',
      duration: 3, tuition: 4200, avgScore: 322, predictScore: 325,
      description: '培养掌握建筑工程基础理论和技术，具备建筑施工组织管理、工程测量、质量验收与资料管理能力。',
      courses: ['建筑制图与识图','建筑力学','建筑材料','建筑施工技术','建筑结构','工程测量','施工组织与管理'],
      employmentRate: '91.5%',
      employmentDirections: ['施工员','质量员','安全员','资料员','工程监理'],
      relatedJobs: '施工管理、质量检测、工程监理',
      salaryRange: '4000-7500元/月'
    }
  ]
};

function getInterestCategories() {
  return INTEREST_CATEGORIES;
}

function getMajorsBySubject(subject) {
  return MAJORS_DATA[subject] || [];
}

function getMajorsByCategory(subject, categoryId) {
  const majors = getMajorsBySubject(subject);
  if (!categoryId || categoryId === 'all') return majors;
  return majors.filter(m => m.category === categoryId);
}

function calcAdmitProbability(score, major, schoolData, subject) {
  const lines = schoolData.admissionLines[subject];
  const latestAvg = lines[2024]?.avg || lines[2023]?.avg || 350;

  let schoolProb;
  if (score >= latestAvg + 15) {
    schoolProb = 90 + Math.min(10, Math.floor((score - latestAvg - 15) / 3));
  } else if (score >= latestAvg + 5) {
    schoolProb = 70 + Math.floor((score - latestAvg - 5) * 2);
  } else if (score >= latestAvg - 10) {
    schoolProb = 50 + Math.floor((score - latestAvg + 10) * 2);
  } else if (score >= latestAvg - 25) {
    schoolProb = 25 + Math.floor((score - latestAvg + 25) * 1.6);
  } else if (score >= latestAvg - 40) {
    schoolProb = 10 + Math.floor((score - latestAvg + 40) * 1);
  } else {
    schoolProb = Math.max(1, Math.floor((score - lines[2024]?.min + 40) * 0.3));
  }
  schoolProb = Math.max(0, Math.min(99, schoolProb));

  const majorAvg = major.predictScore || major.avgScore;
  let majorProb;
  if (score >= majorAvg + 15) {
    majorProb = 90 + Math.min(10, Math.floor((score - majorAvg - 15) / 3));
  } else if (score >= majorAvg + 5) {
    majorProb = 70 + Math.floor((score - majorAvg - 5) * 2);
  } else if (score >= majorAvg - 10) {
    majorProb = 50 + Math.floor((score - majorAvg + 10) * 2);
  } else if (score >= majorAvg - 20) {
    majorProb = 25 + Math.floor((score - majorAvg + 20) * 2.5);
  } else if (score >= majorAvg - 35) {
    majorProb = 8 + Math.floor((score - majorAvg + 35) * 1);
  } else {
    majorProb = Math.max(1, Math.floor((score - majorAvg + 50) * 0.5));
  }
  majorProb = Math.max(0, Math.min(99, majorProb));

  let level;
  if (majorProb >= 85) level = '保底';
  else if (majorProb >= 60) level = '稳妥';
  else if (majorProb >= 30) level = '冲刺';
  else level = '风险较大';

  let schoolLevel;
  if (schoolProb >= 85) schoolLevel = '保底';
  else if (schoolProb >= 60) schoolLevel = '稳妥';
  else if (schoolProb >= 30) schoolLevel = '冲刺';
  else schoolLevel = '风险较大';

  return { schoolProb, schoolLevel, majorProb, majorLevel: level };
}

function calcPercentile(score, subject) {
  const lines = SCHOOL_DATA.admissionLines[subject];
  const latestAvg = lines[2024]?.avg || lines[2023]?.avg;
  if (score <= 200) return 5;
  if (score >= 500) return 95;
  const mid = latestAvg || 340;
  const stdDev = 60;
  const z = (score - mid) / stdDev;
  const cdf = 1 / (1 + Math.exp(-1.7 * z));
  const percentile = Math.round(cdf * 80 + 5);
  return Math.max(1, Math.min(99, percentile));
}
