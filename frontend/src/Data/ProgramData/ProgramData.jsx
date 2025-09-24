export const programsData = {
  // 1. Data Science with AI
  "data-science-ai": {
    title: "Data Science with AI or mern stack",
    hero: {
      heading: "Master Data Science with AI",
      subheading:
        "Hands-on learning in Python, Machine Learning, Deep Learning & AI",
      image: "/assets/image/datascience.png",
    },
    overview: {
      description:
        "This program is designed to make you an expert in data science, machine learning, and artificial intelligence. You will work on projects involving predictive analytics, computer vision, and NLP.",
    },
    outcomes: [
      "Proficiency in Python, ML, DL, and AI",
      "Build deployable ML/AI applications",
      "Work-ready portfolio with real projects",
    ],
    syllabus: [
      "Python & Data Handling",
      "Statistics & Data Analysis",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "AI Applications",
    ],
    projects: [
      { title: "AI Chatbot", desc: "NLP-based conversational bot" },
      { title: "Fraud Detection", desc: "Credit card fraud prediction" },
      { title: "Image Classifier", desc: "Deep learning model for image recognition" },
    ],
    tools: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-Learn"],
    trainer: {
      name: "Dr. John Doe",
      exp: "10+ Years Experience in AI/ML",
      image: "/images/trainers/john.png",
    },
    keyBenefits: ["Capstone AI Projects", "Placement Assistance", "1:1 Mentorship"],
    additionalBenefits: ["Soft Skills Training", "Mock Interviews", "Resume Building"],
    feeStructure: { amount: 85000, emi: 7500 },
    hiringPartners: [
      "/images/partners/google.png",
      "/images/partners/amazon.png",
      "/images/partners/microsoft.png",
    ],
    successStories: [
      { name: "Ravi Kumar", job: "Data Scientist @ TCS", image: "/images/students/ravi.png" },
      { name: "Sneha Patel", job: "ML Engineer @ Infosys", image: "/images/students/sneha.png" },
    ],
    cta: {
      heading: "Ready to Become a Data Scientist?",
      subheading: "Apply now and start your journey with AI & ML.",
      buttonText: "Apply for Data Science with AI",
    },
  },

  // 2. Data Analytics
  "data-analytics": {
    title: "Data Analytics",
    hero: {
      heading: "Become a Professional Data Analyst",
      subheading:
        "Learn Excel, SQL, Tableau, and Power BI with hands-on projects",
      image: "/assets/image/dataanalytics.png",
    },
    overview: {
      description:
        "This program teaches you how to analyze data, create dashboards, and generate business insights using SQL, Excel, Power BI, and Tableau.",
    },
    outcomes: [
      "Master Excel, SQL, and BI tools",
      "Create business dashboards",
      "Perform advanced business analysis",
    ],
    syllabus: [
      "Excel for Business",
      "SQL Queries",
      "Data Visualization with Power BI",
      "Tableau",
      "Case Studies",
    ],
    projects: [
      { title: "Sales Dashboard", desc: "Retail sales analysis in Power BI" },
      { title: "Customer Segmentation", desc: "Clustering customers for marketing" },
    ],
    tools: ["Excel", "SQL", "Power BI", "Tableau"],
    trainer: {
      name: "Anita Sharma",
      exp: "8+ Years in Business Analytics",
      image: "/images/trainers/anita.png",
    },
    keyBenefits: ["Hands-on BI Projects", "Placement Support"],
    additionalBenefits: ["Soft Skills Training", "Aptitude Sessions"],
    feeStructure: { amount: 65000, emi: 6000 },
    hiringPartners: [
      "/images/partners/accenture.png",
      "/images/partners/wipro.png",
      "/images/partners/infosys.png",
    ],
    successStories: [
      { name: "Priya Mehta", job: "Data Analyst @ Infosys", image: "/images/students/priya.png" },
      { name: "Arjun Singh", job: "BI Analyst @ Wipro", image: "/images/students/arjun.png" },
    ],
    cta: {
      heading: "Launch Your Career in Data Analytics",
      subheading: "Learn tools that every business needs.",
      buttonText: "Apply for Data Analytics",
    },
  },

  // 3. MERN Stack
  "mern-stack": {
    title: "MERN Stack Development",
    hero: {
      heading: "Become a MERN Stack Developer",
      subheading:
        "Learn MongoDB, Express, React, Node.js and build full-stack apps",
      image: "/assets/image/mernstack.png",
    },
    overview: {
      description:
        "This program makes you industry-ready as a MERN full-stack developer. You will build dynamic, scalable, and modern web applications.",
    },
    outcomes: [
      "Master MongoDB, Express, React, and Node.js",
      "Build and deploy full-stack apps",
      "Hands-on portfolio with live projects",
    ],
    syllabus: [
      "HTML, CSS, JS Basics",
      "React & Redux",
      "Node.js & Express",
      "MongoDB",
      "Deployment & DevOps Basics",
    ],
    projects: [
      { title: "E-commerce Website", desc: "Full-stack shopping site" },
      { title: "Social Media App", desc: "MERN app with authentication & posts" },
    ],
    tools: ["React", "Node.js", "MongoDB", "Express", "GitHub", "Postman"],
    trainer: {
      name: "Rahul Verma",
      exp: "7+ Years in Full-Stack Development",
      image: "/images/trainers/rahul.png",
    },
    keyBenefits: ["Industry Projects", "Job-Ready Skills", "Resume Portfolio"],
    additionalBenefits: ["Mock Interviews", "DSA Sessions"],
    feeStructure: { amount: 75000, emi: 7000 },
    hiringPartners: [
      "/images/partners/flipkart.png",
      "/images/partners/paytm.png",
    ],
    successStories: [
      { name: "Kunal Gupta", job: "Full-Stack Dev @ Flipkart", image: "/images/students/kunal.png" },
    ],
    cta: {
      heading: "Become a Full-Stack Developer",
      subheading: "Build scalable web apps using MERN.",
      buttonText: "Apply for MERN Stack",
    },
  },

  // 4. Java Full Stack
  "java-full-stack": {
    title: "Java Full Stack Development",
    hero: {
      heading: "Become a Java Full Stack Developer",
      subheading:
        "Learn Java, Spring Boot, Angular/React, SQL, and Deployment",
      image: "/assets/image/javafullstack.png",
    },
    overview: {
      description:
        "Learn how to build enterprise-level applications with Java Spring Boot and frontend frameworks like Angular/React.",
    },
    outcomes: [
      "Proficiency in Java + Spring Boot",
      "Backend + Frontend development",
      "Deploy enterprise apps",
    ],
    syllabus: [
      "Core Java",
      "Spring Boot",
      "REST APIs",
      "SQL/Database",
      "Frontend Framework (Angular/React)",
    ],
    projects: [
      { title: "Banking App", desc: "Secure Java banking system" },
      { title: "HR Management System", desc: "Employee data management app" },
    ],
    tools: ["Java", "Spring Boot", "MySQL", "Angular", "React"],
    trainer: {
      name: "Sandeep Mishra",
      exp: "12+ Years in Java Development",
      image: "/images/trainers/sandeep.png",
    },
    keyBenefits: ["Enterprise Projects", "Interview Prep", "Placement Guidance"],
    additionalBenefits: ["Coding Challenges", "Soft Skills Training"],
    feeStructure: { amount: 80000, emi: 7200 },
    hiringPartners: [
      "/images/partners/hcl.png",
      "/images/partners/ibm.png",
    ],
    successStories: [
      { name: "Meena Rathi", job: "Java Developer @ IBM", image: "/images/students/meena.png" },
    ],
    cta: {
      heading: "Start Your Java Full Stack Career",
      subheading: "Build enterprise-grade apps with Java & Spring Boot.",
      buttonText: "Apply for Java Full Stack",
    },
  },

  // 5. DevOps Engineering
  "devops-engineering": {
    title: "DevOps Engineering",
    hero: {
      heading: "Become a DevOps Engineer",
      subheading: "Learn Docker, Kubernetes, Jenkins, AWS, CI/CD Pipelines",
      image: "/assets/image/devops.png",
    },
    overview: {
      description:
        "Master DevOps practices and tools to automate deployments, manage infrastructure, and ensure continuous delivery.",
    },
    outcomes: [
      "Hands-on with CI/CD tools",
      "Cloud deployment expertise",
      "Automate software delivery",
    ],
    syllabus: [
      "Linux Basics",
      "Git & GitHub",
      "Docker & Kubernetes",
      "Jenkins & CI/CD",
      "AWS Deployment",
    ],
    projects: [
      { title: "CI/CD Pipeline", desc: "Automated pipeline with Jenkins & Docker" },
      { title: "Kubernetes Cluster", desc: "Deploying microservices on Kubernetes" },
    ],
    tools: ["Docker", "Kubernetes", "Jenkins", "AWS", "Git"],
    trainer: {
      name: "Amit Khanna",
      exp: "9+ Years in DevOps & Cloud",
      image: "/images/trainers/amit.png",
    },
    keyBenefits: ["Cloud Hands-on", "Industry Projects", "Placement Support"],
    additionalBenefits: ["Resume Prep", "Soft Skills Training"],
    feeStructure: { amount: 90000, emi: 8000 },
    hiringPartners: [
      "/images/partners/aws.png",
      "/images/partners/redhat.png",
    ],
    successStories: [
      { name: "Vikas Yadav", job: "DevOps Engineer @ RedHat", image: "/images/students/vikas.png" },
    ],
    cta: {
      heading: "Step into the Future with DevOps",
      subheading: "Learn CI/CD, Cloud, and Automation.",
      buttonText: "Apply for DevOps Engineering",
    },
  },

  // 6. UI/UX Design
  "ui-ux-design": {
    title: "UI/UX Design",
    hero: {
      heading: "Become a UI/UX Designer",
      subheading:
        "Learn Figma, Adobe XD, Wireframing, Prototyping, and Usability",
      image: "/assets/image/uiux.png",
    },
    overview: {
      description:
        "This program teaches you modern UI/UX design skills to create user-friendly and visually appealing applications.",
    },
    outcomes: [
      "Create wireframes & prototypes",
      "Master UI tools like Figma",
      "Build strong design portfolio",
    ],
    syllabus: [
      "Design Thinking",
      "Wireframing",
      "Prototyping",
      "UI Tools",
      "Usability Testing",
    ],
    projects: [
      { title: "Mobile App UI", desc: "Design an e-learning mobile app" },
      { title: "Website Redesign", desc: "Redesign corporate website for better UX" },
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    trainer: {
      name: "Neha Kapoor",
      exp: "6+ Years in UI/UX Design",
      image: "/images/trainers/neha.png",
    },
    keyBenefits: ["Design Portfolio", "1:1 Mentorship", "Placement Support"],
    additionalBenefits: ["Freelance Guidance", "Soft Skills"],
    feeStructure: { amount: 60000, emi: 5500 },
    hiringPartners: [
      "/images/partners/adobe.png",
      "/images/partners/zoho.png",
    ],
    successStories: [
      { name: "Rohit Sen", job: "UI/UX Designer @ Zoho", image: "/images/students/rohit.png" },
    ],
    cta: {
      heading: "Shape the Digital World with Design",
      subheading: "Create user-friendly experiences with modern tools.",
      buttonText: "Apply for UI/UX Design",
    },
  },
};
