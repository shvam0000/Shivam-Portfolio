/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shivam",
  logo_name: "shivam.s()",
  nickname: "shivam",
  full_name: "Shivam Shekhar",
  subTitle:
    "Full Stack Developer, UI/UX Designer, Open Source Enthusiast 🔥. Always learning and developing amazing applications.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:hkanani191@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/shvam0000",
  linkedin: "https://www.linkedin.com/in/shivam-shekhar-062950182/",
  gmail: "shvam0000@gmail.com",
  facebook: "https://www.facebook.com/shivam.shekhar.1466",
  twitter: "https://twitter.com/shivam1910200",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Building responsive website front end using ReactJS, NextJS and Remix-run",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Supabase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "cib:next-js",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "UI / UX Designing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple designing applications such as Figma, AdobeXD",
        "⚡ Experience designing industrial applications and websites",
        "⚡ Experience in desiging low-fidelity and high-fidelity prototypes",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AdobeXD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#38AFBB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM Institute of Science and Technology",
      subtitle:
        "Bachelor of Technology - Computer Science with Specialization in Cyber Security",
      logo_path: "srm-logo.png",
      alt_name: "SRMIST",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my Bachelors of Technology in Computer Science with Specialization in Cyber Security.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Science Engineering course. ",
      ],
      website_link: "http://www.srmist.edu.in/",
    },
    {
      title: "JM International School",
      subtitle: "High School",
      logo_path: "jmis-logo.png",
      alt_name: "JMIS",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ I have studied core subjects like Maths, Physics, Chemistry, Computer Science, etc.",
        "⚡ I have also completed various co-curricular courses on Peer Education, Scouts & Guides, etc.",
        "⚡ I have held a leadership role in the high school being the head of the student council. ",
      ],
      website_link: "https://www.jminternationalschool.com/dwarka/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed various internships in Software Engineering and Designing. I've mostly been a self learner and showcase my learning through my projects. I love organizing workshops and events to share my experience with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "HRI Research Intern",
          company: "MITACS",
          company_url: "https://www.mitacs.ca/",
          logo_path: "mitacs-logo.png",
          duration: "June 2022 - Sept 2022",
          location: "University of New Brunswick, New Brunswick, Canada",
          description: `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Developer Intern",
          company: "Quinence",
          company_url: "http://quinence.com/",
          logo_path: "quinence-logo.jpg",
          duration: "Feb 2022 - May 2022",
          location: "Remote - Singapore",
          description: `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          color: "#ee3c26",
        },
        {
          title: "Software Developer Intern",
          company: "BITCS",
          company_url: "http://bitcs.in/",
          logo_path: "bitcs-logo.png",
          duration: "Nov 2021 - Feb 2022",
          location: "Remote - Noida",
          description: `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          color: "#ee3c26",
        },
        {
          title: "UX Engineer Intern",
          company: "Techdome Solutions Pvt. Ltd.",
          company_url: "https://techdome.io/#",
          logo_path: "techdome-logo.png",
          duration: "June 2021 - Sept 2021",
          location: "Remote - Indore",
          description: `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Clubs Experience and Volunteerships",
      experiences: [
        {
          title: "Founder - Admin",
          company: "GitHub Community SRM",
          company_url: "https://githubsrm.tech/",
          logo_path: "gcsrm-logo.jpg",
          duration: "May 2021 - May 2022",
          location: "SRMIST - Chennai",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Member",
          company: "Next Tech Lab",
          company_url:
            "https://www.linkedin.com/company/next-tech-lab/mycompany/",
          logo_path: "ntl-logo.jpg",
          duration: "April 2021 - Present",
          location: "SRMIST - Chennai",
          description:
            "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#196acf",
        },
        {
          title: "Mentor",
          company: "GirlScript Winter of Contributing",
          company_url: "https://github.com/",
          logo_path: "gscwoc-logo.jpeg",
          duration: "Aug 2021 - Dec 2021",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Developer",
          company: "IoT Alliance",
          company_url: "https://www.iotalliance.in/",
          logo_path: "iota-logo.png",
          duration: "Nov 2020 - Aug 2021",
          location: "SRMIST - Chennai",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "Web Developer",
          company: "Guvi Code Camp SRM",
          company_url:
            "https://www.linkedin.com/company/guvi-code-camp-srm/?originalSubdomain=in",
          logo_path: "gcccsrm-logo.jpeg",
          duration: "Nov 2020 - Apr 2021",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Public Relations Associate",
          company: "Directorate Of Student Affairs , SRMIST",
          company_url: "https://www.instagram.com/srmist_dsa/?hl=en",
          logo_path: "dsa-logo.png",
          duration: "Feb 2020 - Present",
          location: "SRMIST",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
        {
          title: "Quality Assurance Associate",
          company: "Aaruush , SRMIST",
          company_url: "https://www.linkedin.com/company/aaruush-srm-ist/",
          logo_path: "aaruush-logo.jpeg",
          duration: "Sep 2019 - Sep 2020",
          location: "SRMIST",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/shivam1910200",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Karaoke Music App",
      url: "https://github.com/NVombat/MusicApp",
      description:
        "This is a Karaoke Music App built for JTV Foundation where users can record audio/video and upload them.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Projects Portal - SRM",
      url: "https://github.com/SRM-IST-KTR/githubsrm",
      description:
        "A centralized projects portal built for SRMIST to combine all the minor and major projects of the university",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NextJS",
          iconifyClass: "logos-nextjs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "2",
      name: "Crypto Tools",
      url: "https://github.com/shvam0000/crypto-tools",
      description:
        "A simple website to include all the cryptography tools such as ciphers etc. The app is built in remix-run framework built on top of ReactJS",
      languages: [
        {
          name: "Remix-run",
          iconifyClass: "logos-remix",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "Image Search",
      url: "https://github.com/shvam0000/Image-Search",
      description: "An image search app built on ReactJS using Pixbay API.",
      languages: [
        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Shivam Portfolio",
      url: "https://github.com/shvam0000/Shivam-Portfolio",
      description: "A Personal Portfolio built using ReactJS",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
