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
    timeline: 'May 2024 - Present, New York - NY',
    companyName: 'Subconscious.ai',
    role: 'Software Engineer Intern',
    description: [
      'Contributing to AI-driven projects, focusing on enhancing system performance and user interaction.',
    ],
  },
  {
    timeline: 'June 2023 - Aug 2023, Bangalore - IN',
    companyName: 'Momentech Solutions Pvt. Ltd.',
    role: 'Software Developer Intern',
    description: [
      'Engineered a Battery Intelligence platform for electric vehicles, utilizing geolocation parameters to predict battery health. This platform aims to increase battery life by 3 years, optimizing performance.',
      'Utilized AWS services (Cognito, EC2, S3, SES, DynamoDB, CloudWatch, CloudFormation, etc.) to optimize system architecture and functionality in diverse projects.',
      'Directed a technical team of 10+ members, acquiring valuable leadership and team management expertise.',
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
      'Successfully migrated code for the Soulless Citadel NFT platform from Next.js to Remix-run, resulting in a 30% reduction in browser load time and build size.',
      'Integrated Shopify Store API for the Merchandise section of NFT platform and enhanced UI design of overall website.',
      'Curated content for Modernfullstack to develop course for TailwindCSS for beginner developers to learn.',
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
