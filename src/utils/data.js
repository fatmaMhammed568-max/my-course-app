// src/utils/data.js
const courses = [
  // ================= ICDL =================
  {
    id: 1,
    slug: "icdl",
    title: "ICDL",
    description: "تعلم أساسيات الحاسب الآلي والبرامج المكتبية",
    image: "/assets/6.jpg",
    price: 300,
    duration: "5 أسابيع",
    lectures: "3 مرات في الأسبوع",
    certificate: "شهادة معتمدة دوليًا",
    features: [
      "التعامل مع نظام التشغيل",
      "استخدام برنامج Microsoft Word",
      "جداول Excel وإدارتها",
      "العروض التقديمية بـ PowerPoint",
      "أساسيات الإنترنت والبريد الإلكتروني"
    ],
    levels: [
      { name: "أساسيات الكمبيوتر", details: ["أجزاء الكمبيوتر", "نظام التشغيل", "تنظيم الملفات والفولدرات", "تثبيت البرامج"] },
      { name: "أساسيات الإنترنت", details: ["استخدام المتصفح", "البحث في جوجل", "إدارة البريد الإلكتروني", "الأمن والسلامة على الإنترنت"] },
      { name: "معالجة النصوص", details: ["كتابة وتنسيق النصوص", "إدراج صور وجداول", "إنشاء خطابات وتقارير"] },
      { name: "الجداول الإلكترونية", details: ["إنشاء جداول", "استخدام الصيغ والدوال", "تنسيق البيانات", "الرسوم البيانية"] },
      { name: "العروض التقديمية", details: ["إنشاء عرض تقديمي", "إضافة صور وفيديو", "تصميم الشرائح", "الحركات والانتقالات"] },
      { name: "قواعد البيانات", details: ["إنشاء جداول", "العلاقات بين الجداول", "الاستعلامات", "النماذج والتقارير"] },
      { name: "التعاون عبر الإنترنت", details: ["التخزين السحابي", "مشاركة الملفات", "أدوات Google Docs"] }
    ],
    topics: ["Computer Essentials", "Online Essentials", "Word", "Excel", "PowerPoint", "Databases", "Online Collaboration"],
    courseDuration: { intensive: "شهر", normal: "شهرين – 3 شهور" },
    projects: ["تمارين على Word وExcel", "إنشاء عرض تقديمي", "تنظيم ملفات", "مشروع تطبيقي صغير"]
  },

  // ================= Soft Skills =================
  {
    id: 2,
    slug: "soft-skills",
    title: "Soft Skills",
    description: "تطوير المهارات الشخصية والقيادية",
    image: "/assets/10.jpg",
    price: 250,
    duration: "3 أسابيع",
    lectures: "مرتين في الأسبوع",
    certificate: "Smart Skills Academyشهادة معتمدة من المركز",
    features: [
      "مهارات التواصل الفعال",
      "العمل ضمن فريق",
      "مهارات القيادة",
      "إدارة الوقت والضغوط",
      "التفكير النقدي وحل المشكلات"
    ],
    levels: [
      { name: "مهارات التواصل", details: ["التعبير عن النفس بوضوح", "لغة الجسد", "الاستماع الفعال"] },
      { name: "إدارة الوقت", details: ["تحديد الأولويات", "تنظيم اليوم", "التخلص من التسويف"] },
      { name: "العمل ضمن فريق", details: ["العمل في جروب", "حل النزاعات", "توزيع المهام"] },
      { name: "حل المشكلات واتخاذ القرار", details: ["التفكير المنطقي", "حل مبتكر للمشكلات"] },
      { name: "مهارات العرض والإلقاء", details: ["Presentation مقنع", "التعامل مع التوتر"] },
      { name: "إدارة الضغوط", details: ["التحكم في القلق", "التوازن بين الشغل والحياة"] },
      { name: "الذكاء العاطفي", details: ["فهم مشاعرك والتحكم فيها", "التعاطف مع الآخرين"] },
      { name: "مهارات القيادة", details: ["تحفيز الآخرين", "اتخاذ قرارات جماعية", "إدارة فرق العمل"] }
    ],
    topics: ["Communication Skills", "Time Management", "Teamwork", "Problem Solving", "Presentation Skills", "Stress Management", "Emotional Intelligence", "Leadership Skills"],
    courseDuration: { intensive: "أسبوعين", normal: "شهر – شهرين" },
    projects: ["Role Play", "تقديم عرض قصير", "أنشطة جماعية لحل مشكلة"]
  },

  // ================= HR Basics =================
  {
    id: 3,
    slug: "hr-basics",
    title: "HR Basics",
    description: "مقدمة في إدارة الموارد البشرية",
    image: "/assets/9.jpg",
    price: 350,
    duration: "4 أسابيع",
    lectures: "مرتين في الأسبوع",
    certificate: "شهادة معتمدة بعد اجتياز الكورس",
    features: [
      "مبادئ إدارة الموارد البشرية",
      "خطوات التوظيف والاختيار",
      "إعداد ملف الموظف",
      "التدريب وتطوير الأداء",
      "قوانين العمل والتأمينات"
    ],
    levels: [
      { name: "مقدمة", details: ["تعريف HR ودوره", "الفرق بين HR و Admin", "المهام الأساسية للموظف"] },
      { name: "التوظيف", details: ["خطوات التوظيف", "مقابلات شخصية", "اختيار المرشحين"] },
      { name: "التدريب والتطوير", details: ["تحديد احتياجات التدريب", "تصميم برامج تدريبية", "متابعة الأداء"] },
      { name: "إدارة الأداء", details: ["تقييم الأداء", "KPIs", "تحسين مستوى الفريق"] },
      { name: "التعويضات والمكافآت", details: ["الرواتب والحوافز", "التأمينات"] },
      { name: "علاقات العمل", details: ["التعامل مع مشاكل الموظفين", "بناء ثقافة عمل إيجابية"] },
      { name: "التخطيط الاستراتيجي", details: ["احتياجات الموظفين على المدى الطويل", "Succession Planning"] },
      { name: "القوانين والتشريعات", details: ["حقوق وواجبات الموظف وصاحب العمل", "عقود العمل", "التأمينات الاجتماعية"] }
    ],
    topics: ["HR Introduction", "Recruitment", "Training & Development", "Performance Management", "Compensation", "Employee Relations", "HR Planning", "Laws"],
    courseDuration: { intensive: "شهر", normal: "شهرين – 3 شهور" },
    projects: ["كتابة Job Description", "نموذج تقييم أداء", "إجراء Interview عملي", "خطة تدريبية"]
  },

  // ================= English =================
  {
    id: 4,
    slug: "english-course",
    title: "English Course",
    description: "تحسين مهارات اللغة الإنجليزية",
    image: "/assets/8.jpg",
    price: 300,
    duration: "6 أسابيع",
    lectures: "3 أيام في الأسبوع",
    certificate: "شهادة معتمدة بعد إتمام المستوى",
    features: [
      "تحسين مهارات المحادثة",
      "قواعد اللغة والكتابة",
      "استماع وفهم المحادثات اليومية",
      "تدريبات على المواقف العملية",
      "اختبارات تحديد المستوى"
    ],
    levels: [
      { name: "Beginner – A1", details: ["أساسيات الحروف، الأرقام، الألوان، أيام الأسبوع", "جمل بسيطة للتعريف بالنفس", "قواعد بسيطة (am, is, are)"] },
      { name: "Elementary – A2", details: ["التعريف بالوقت، الاتجاهات، العائلة، الطعام", "تكوين جمل أطول", "أزمنة بسيطة"] },
      { name: "Pre-Intermediate – B1", details: ["مهارات المحادثة اليومية", "كتابة إيميل بسيط", "قواعد: المضارع المستمر، المستقبل"] },
      { name: "Intermediate – B2", details: ["مناقشات أطول بمواضيع عامة", "كتابة مقالات قصيرة", "قواعد أعمق: المبني للمجهول، الجمل الشرطية"] },
      { name: "Upper-Intermediate – C1", details: ["استخدام مفردات متنوعة", "مناقشة مواضيع أكاديمية", "تحسين النطق والفهم السمعي"] },
      { name: "Advanced – C2", details: ["تحدث بطلاقة شبه كاملة", "كتابة مقالات وتقارير", "فهم أفلام وكتب بدون ترجمة"] }
    ],
    topics: ["Vocabulary", "Grammar", "Speaking", "Listening", "Reading", "Writing"],
    courseDuration: { intensive: "شهر", normal: "1 – 3 شهور" },
    projects: ["محادثات مع زملاء", "كتابة Paragraph", "تلخيص فيديو أو مقالة"]
  },

  // ================= Programming Basics =================
  {
    id: 5,
    slug: "programming-basics",
    title: "Programming Basics",
    description: "تعلم مبادئ البرمجة من الصفر",
    image: "/assets/1.png",
    price: 350,
    duration: "6 أسابيع",
    lectures: "مرتين في الأسبوع",
    certificate: "شهادة معتمدة بعد المشاريع العملية",
    features: [
      "أساسيات البرمجة",
      "التحكم بالبيانات",
      "الشروط والحلقات",
      "المصفوفات والدوال",
      "مشروع نهائي صغير"
    ],
    levels: [
      { name: "مقدمة", details: ["تعريف لغة البرمجة", "الفرق بين Software و Hardware", "أنواع لغات البرمجة"] },
      { name: "المتغيرات وأنواع البيانات", details: ["String, Integer, Float, Boolean"] },
      { name: "الجمل الشرطية والحلقات", details: ["If / Else", "Switch Case", "For / While / Do…While"] },
      { name: "الدوال Functions", details: ["تعريف Function", "Parameters & Return Values", "إعادة استخدام الكود"] },
      { name: "مقدمة OOP", details: ["Class & Object", "Constructors init", "Inheritance"] },
      { name: "حل المشكلات", details: ["التفكير المنطقي", "كتابة خطوات الحل Algorithm", "مخططات الانسياب Flowcharts"] }
    ],
    topics: ["Programming Basics", "Variables", "Operators", "Control Flow", "Loops", "Functions", "OOP", "Problem Solving"],
    courseDuration: { intensive: "3 أسابيع", normal: "شهر – شهرين" },
    projects: ["آلة حاسبة", "برنامج درجات الطلاب", "لعبة Guess Number", "جدول الضرب"]
  },

  // ================= Full Stack =================
  {
    id: 6,
    slug: "fullstack",
    title: "Full Stack",
    description: "من البداية حتى الاحتراف في تطوير الويب",
    image: "/assets/4.webp",
    price: 1200,
    duration: "3 شهور",
    lectures: "3 مرات في الأسبوع",
    certificate: "شهادة معتمدة ومشروع تخرج عملي",
    features: [
      "HTML, CSS, JavaScript",
      "React لبناء الواجهات التفاعلية",
      "Node.js و Express.js لتطوير الخادم",
      "MongoDB لتخزين البيانات",
      "APIs و Git و نشر المواقع"
    ],
    levels: [
      { name: "Front-End", details: ["HTML/CSS", "JavaScript Advanced", "React.js", "Fetch API و DOM"] },
      { name: "Back-End", details: ["Node.js + Express", "REST APIs", "Authentication", "CRUD"] },
      { name: "Databases", details: ["MongoDB / SQL", "عمليات CRUD"] },
      { name: "Version Control", details: ["Git & GitHub"] },
      { name: "Deployment", details: ["Netlify / Vercel / Heroku / Render"] }
    ],
    topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Deployment"],
    courseDuration: { intensive: "4 – 6 شهور", normal: "6 – 9 شهور" },
    projects: ["Portfolio Website", "Blog", "Login/Signup System", "E-Commerce Website"]
  },

  // ================= Back-End =================
  {
    id: 7,
    slug: "backend",
    title: "Back End Development",
    description: "تعلم بناء الخوادم باستخدام PHP وNode.js",
    image: "/assets/5.jpg",
    price: 500,
    duration: "2 شهور",
    lectures: "مرتين في الأسبوع",
    certificate: "شهادة معتمدة بعد مشروع عملي",
    features: [
      "أساسيات PHP و Node.js",
      "قواعد البيانات MySQL",
      "بناء REST APIs",
      "التعامل مع السيرفرات",
      "مشروع عملي متكامل"
    ],
    levels: [
      { name: "مقدمة", details: ["Front-End vs Back-End", "Server & Client", "APIs"] },
      { name: "Server-Side", details: ["Node.js + Express", "PHP / MySQL", "Frameworks"] },
      { name: "Databases", details: ["SQL / NoSQL", "CRUD"] },
      { name: "Authentication & Security", details: ["Login/Signup", "Encryption", "JWT"] },
      { name: "APIs", details: ["RESTful APIs", "JSON"] },
      { name: "File & Session Management", details: ["Upload Files", "Cookies & Sessions"] },
      { name: "Git & Deployment", details: ["GitHub", "Heroku / Render / AWS"] }
    ],
    topics: ["Back-End Basics", "Server-Side Language", "Databases", "Authentication", "APIs", "File & Session", "Git", "Deployment"],
    courseDuration: { intensive: "شهرين", normal: "3 – 6 شهور" },
    projects: ["Auth System", "Blog System", "To-Do App", "E-Commerce Back-End"]
  },

  // ================= Python =================
  {
    id: 8,
    slug: "python",
    title: "Python",
    description: "تعلم لغة بايثون من الأساسيات حتى المشاريع",
    image: "/assets/2.webp",
    price: 900,
    duration: "8 أسابيع",
    lectures: "مرتين في الأسبوع",
    certificate: "شهادة معتمدة مع مشروع نهائي",
    features: [
      "أساسيات البرمجة بلغة بايثون",
      "التعامل مع قواعد البيانات",
      "تحليل البيانات باستخدام Pandas و NumPy",
      "البرمجة الكائنية (OOP)",
      "مقدمة في الذكاء الاصطناعي وتعلم الآلة"
    ],
    levels: [
      { name: "المقدمة", details: ["ما هي Python ولماذا سهلة", "تنصيب Python + محرر", "أول برنامج print"] },
      { name: "الأساسيات", details: ["Variables & Data Types", "Operators", "Input/Output"] },
      { name: "Control Flow", details: ["if/elif/else", "for/while loops", "break/continue"] },
      { name: "Collections", details: ["Lists", "Tuples", "Sets", "Dictionaries"] },
      { name: "Functions", details: ["تعريف function", "Parameters & Return", "Scope"] },
      { name: "File Handling", details: ["فتح وقراءة الملفات", "الكتابة"] },
      { name: "OOP Basics", details: ["Class & Object", "Constructors", "Inheritance"] },
      { name: "Libraries & Modules", details: ["import libraries", "pandas, numpy, math"] },
      { name: "Error Handling", details: ["try/except", "raise"] }
    ],
    topics: ["Python Basics", "Control Flow", "Collections", "Functions", "OOP", "File Handling", "Libraries", "Error Handling"],
    courseDuration: { intensive: "شهر – شهرين", normal: "3 شهور مع مشروع" },
    projects: ["آلة حاسبة", "To-Do App", "قراءة بيانات من Excel", "لعبة Guess Number"]
  },

  // ================= Front-End =================
  {
    id: 9,
    slug: "frontend",
    title: "Front End Development",
    description: "تعلم HTML, CSS, JavaScript وبناء واجهات المستخدم",
    image: "/assets/1.jpg",
    price: 1000,
    duration: "8 أسابيع",
    lectures: "مرتين في الأسبوع",
    certificate: "شهادة معتمدة مع مشروع تصميم واجهة",
    features: [
      "أساسيات HTML5 و CSS3",
      "استخدام JavaScript لبناء تفاعلات ديناميكية",
      "تطوير واجهات باستخدام React.js",
      "تصميم متجاوب يناسب جميع الأجهزة",
      "تحسين الأداء وتجربة المستخدم"
    ],
    levels: [
      { name: "أساسيات الويب", details: ["HTML", "CSS", "Bootstrap / Tailwind"] },
      { name: "JavaScript Basics", details: ["Variables, Data Types", "Operators", "Control Flow", "Loops", "Functions", "DOM", "Events"] },
      { name: "JavaScript Advanced", details: ["ES6 Features", "Arrow Functions", "Template Literals", "Modules"] },
      { name: "APIs", details: ["Fetch API", "JSON", "عرض البيانات من السيرفر"] },
      { name: "React.js", details: ["Component-Based Development", "State Management", "Props", "useState, useEffect"] },
      { name: "Responsive Design", details: ["Flexbox & Grid", "Media Queries"] },
      { name: "Deployment", details: ["Netlify", "Vercel", "GitHub Pages"] }
    ],
    topics: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "APIs", "Deployment"],
    courseDuration: { intensive: "شهرين", normal: "3 – 4 شهور" },
    projects: ["Portfolio Page", "Landing Page", "To-Do App", "E-Commerce Front-End"]
  }
];

export default courses;
