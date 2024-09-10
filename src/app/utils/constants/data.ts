import { queryFuel, roommateTinder, speakSphere } from './hero.const';
import roommatetinderimg from '../images/roommatetinder.png';
import speaksphereimg from '../images/speaksphere.png';
import queryfuelimg from '../images/queryfuel.png';

export const introData = {
  introLine: `Hi, I'm Shivam Shekhar. A passionate Software Developer based in New York.📍`,
  gitHubLink: 'https://github.com/shvam0000/',
  linkedInLink: 'https://www.linkedin.com/in/shivam-shekhar-062950182/',
  sequence: [
    '👨🏻‍💻 Full Stack Developer',
    2000,
    '👨🏻‍💻 Cloud Developer',
    2000,
    '👨🏻‍💻 DevOps Engineer',
    2000,
  ],
  gitHubUsername: 'shvam0000',
};

export const aboutData = {
  aboutLine: 'A dedicated Full-stack Web Developer based in New York 📍',
  aboutDescription: `As a Full Stack Web Developer, I possess an impressive arsenal of
          skills in TypeScript, React, Tailwind, NodeJS and MongoDB. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.`,
};

export const experienceData = [
  {
    timeline: 'Sept 2024 - Present, New York - NY',
    companyName: 'Dune Security',
    role: 'Frontend Engineer Intern',
    description: [
      'Developed and maintained user-facing features for security-focused web applications using React and Tailwind CSS, improving user experience and accessibility.',
      'Collaborated with backend engineers to integrate secure APIs and ensure seamless communication between frontend and backend systems.',
      'Ensured code quality through best practices in unit testing, code reviews, and continuous integration pipelines.',
    ],
  },
  {
    timeline: 'May 2024 - Aug 2024, New York - NY',
    companyName: 'Subconscious.ai',
    role: 'Software Engineer Intern',
    description: [
      'Centralized Environment Variable Management: Led the initiative to centralize all environment variables across multiple projects and cloud deployments using Doppler, enhancing security, consistency, and ease of management.',
      'Transitioned LLM APIs to Cloud Infrastructure: Facilitated the migration of LLM API calls to cloud platforms, utilizing Microsoft Azure for OpenAI, LLaMa and Mistral, reducing cost by $20,000 per month.',
      'Enhanced Research Paper Translation Automation: Developed a robust software pipeline using Python and the Weights & Biases (WANDB) API to automate the translation of experimental research papers, extract key attributes and levels, and systematically store them in Weights & Biases for efficient data management.',
    ],
  },
  {
    timeline: 'June 2023 - Aug 2023, Bangalore - IN',
    companyName: 'Momentech Solutions Pvt. Ltd.',
    role: 'Software Developer Intern',
    description: [
      'Engineered Battery Intelligence Platform: Designed and developed a platform for electric vehicles utilizing multiple parameters to determine and further predict the life of the battery.',
      'Optimized System Architecture: Re-engineered the system architecture using AWS Cloud services, resulting in a 40% improvement in load balancing and 30% smoother API flow.',
      'Collaborated with Product Management: Worked closely with product managers to define technical requirements, prioritize features, and implement a backlog management system, leading to faster project deliveries and improved team efficiency.',
    ],
  },
  {
    timeline: 'June 2022 - Sep 2022, Fredericton - CA',
    companyName: 'MITACS - University of New Brunswick',
    role: 'Research Intern',
    description: [
      'Partnered with Professor Daniel Rea to develop Mixed Reality prototypes enhancing user experience for remote-controlled robots. Executed tests comparing 10 real-life activities with their virtual counterparts.',
      'Constructed over 10 prototypes for an advanced Mixed Reality Project, meticulously assessing and comparing real-life and virtual experiences to enhance overall user satisfaction.',
    ],
  },
  {
    timeline: 'Feb 2022 - May 2022, Singapore - SG',
    companyName: 'Quinence',
    role: 'Software Developer Intern',
    description: [
      'Migrated NFT Platform Code: Transitioned Soulless Citadel NFT platform from Next.js to Remix-run, enhancing backend efficiency, reducing browser load time and build size by 30%, and integrating GraphQL for optimized data fetching.',
      'Integrated Shopify Store API: Implemented Shopify Store API to build a seamless end-to-end shopping experience, leveraging GraphQL for efficient querying and enhancing the backend infrastructure.',
      'Curated Educational Content: Developed a comprehensive beginner course for TailwindCSS, focusing on backend integration techniques and aiding new developers in mastering essential software development skills.',
    ],
  },
];

export const projectData = [
  {
    img: queryfuelimg,
    title: 'Query Fuel: In-house query solver',
    description: [
      'Developed a Query Solver platform that can be installed at multiple institutes and communities at once to act as a doubt solving platform.',
      'Novelty includes the Search-as-type feature and enhanced Security Features.',
    ],
    link: 'https://github.com/shvam0000/Query-Fuel',
    stack: queryFuel,
  },
  {
    img: speaksphereimg,
    title: 'SpeakSphere: Spanish Learning Chatbot',
    description: [
      'Developed a Language Learning Chatbot that uses GPT-4 in the backend to help people learn Spanish using Conversational Learning method.',
      'Primarily built for people who have a basic understanding of the language as it indulges the user to talk about the topics they want and corrects them if they make mistakes.',
      ' Created a translation feature that helps to get the english translation of the message on hover.',
    ],
    link: 'https://github.com/shvam0000/Speak-Sphere',
    stack: speakSphere,
  },
  {
    img: roommatetinderimg,
    title: 'Roommate Tinder',
    description: [
      `Designed a serverless Roommate Finder web application to help
                  user's find potential new roommates when moving in to a new
                  place.`,
      `The application uses Pinecone to perform the vector search and
                  matching by taking user's preferences and adding bias on every
                  like or dislike click.`,
    ],
    link: 'https://github.com/shvam0000/Roommate-Tinder',
    stack: roommateTinder,
  },
];

export const contactData = {
  place: 'New York, NY',
  email: 'shivam.shekhar@columbia.edu',
};

export const footerData = {
  linkedIn: 'https://www.linkedin.com/in/shivam-shekhar-062950182/',
  github: 'https://www.github.com/shvam0000/',
};
