export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    // {
    //   id: 3,
    //   name: "Works",
    //   href: "/works",
    // },
    {
      id: 4,
      name: "Works",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/threejs.png",
      name: "ThreeJS",
      alt: "ThreeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/gsap.png",
      name: "Gsap",
      alt: "Gsap logo",
      width: 150,
      height: 150,
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Moonphase Prints",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/moonlight.png", // Add a real screenshot here
      description:
        "An e-commerce storefront built using Shopify Hydrogen and React. Improved mobile experience and optimized performance, leading to faster load times and better conversions.",
      techStack: ["Shopify Hydrogen", "React", "TailwindCSS", "GraphQL"],
      isUrl: true,
      urlLink: "https://moonphaseprints.com/en-us/",
    },
    {
      isReverse: true,
      title: "Insignia Glass",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/insigniaglass.png", // Replace with actual screenshot
      description:
        "A custom-designed business website showcasing premium glass solutions. Built with performance, SEO, and responsiveness in mind.",
      techStack: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
      isUrl: true,
      urlLink: "https://www.insigniaglass.com/",
    },
    {
      isReverse: false,
      title: "FoodLynk",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/foodlynk.png", // Replace with actual screenshot
      description:
        "A platform to connect restaurants and local vendors. Worked on frontend UI, improving accessibility and responsiveness across devices.",
      techStack: ["React", "TailwindCSS", "Next.js", "Firebase"],
      isUrl: true,
      urlLink: "https://foodlynk.org/",
    },
  ];

  // new timeline
  const timeline = [
    {
      companyName: "Zensar Technologies",
      duration: "Jan 2021 - Current",
      jobScope: [
        "Web Interface Design and Implementation: Designed and implemented efficient, scalable, and accessible web interfaces aimed at optimizing user experience.",
        "Framework Expertise: Extensive proficiency in utilizing Nuxt.js for frontend development, ensuring robust and performant applications.",
        "API Integration: Demonstrated success in integrating RESTful APIs into diverse client-side projects, enhancing functionality and interactivity.",
        "Optimization Strategies: Implemented caching mechanisms and optimized code and asset delivery for both REST APIs and server-side applications, employing strategies like lazy loading to improve performance significantly.",
        "Agile Methodologies: Proficient in agile development methodologies such as Scrum and Design Thinking, emphasizing continuous integration, testing, and iterative development practices.",
        "Cloud Proficiency: Hands-on experience with cloud environments, particularly Azure Cloud, enabling seamless deployment and scaling of applications.",
      ],
    },
    {
      companyName: "Dewlogics",
      duration: "May 2020 - December 2020",
      jobScope: [
        "Responsive Web Design: Implemented responsive design across multiple web applications using modern frameworks like React JS, ensuring optimal viewing experiences across various devices and screen sizes.",
        "Framework Expertise: Proficient in utilizing open-source toolkits such as MaterialUI and ReactBootstrap to streamline development and enhance user interface design.",
        "API Integration: Experienced in integrating Google APIs including Distance Matrix and Directions Matrix, enhancing application functionality and user interaction with location-based services.",
        "Animation Expertise: Leveraged GSAP (GreenSock Animation Platform) and Three.js libraries to create dynamic and visually appealing animations, enriching user interfaces and improving engagement.",
        "CI/CD Deployment: Established CI/CD deployment pipelines on Azure, ensuring efficient and automated deployment processes that enhance development speed and reliability.",
      ],
    },
    {
      companyName: "Saachi Technologies",
      duration: "January 2020 - April 2020",
      jobScope: [
        "Mobile Architecture Expertise: Extensive experience in developing scalable, high-quality products for production environments.",
        "Best Practices in Cross-Platform Development: Strong focus on implementing reusable designs and best practices in cross-platform applications.",
        "UI Component Design: Skilled in crafting complex UI components with expertise in CSS, animations, orchestration, and responsiveness.",
        "State Management Proficiency: Proficient in managing application states using frameworks like Redux for robust functionality.",
        "Push Notifications Implementation: Implemented Firebase API for Push Notifications to boost user engagement and retention.",
        "Cross-Platform Development: Developed performance-optimized React Native applications ensuring superior user experience across platforms.",
        "RESTful API Development: Created Node.js based RESTful APIs, establishing seamless data retrieval and manipulation endpoints.",
        "Google APIs Integration: Integrated Geolocation, Direction Matrix, and Distance Matrix APIs for enhanced location-based services and data insights.",
      ],
    },
  ];

  return {
    navigation,
    skillWithLogo,
    projects,
    timeline,
  };
}
