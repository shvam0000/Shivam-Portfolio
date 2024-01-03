import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="ml-52 w-3/4">
      <h1 className="uppercase text-xl font-bold py-10 text-blue-500">
        Experience
      </h1>
      <ol className="relative border-s border-gray-200 ">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="my-1 text-sm font-normal leading-none text-gray-400 ">
            June 2023 - Aug 2023, Bangalore - IN
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">
            Momentech Solutions Pvt. Ltd.
          </h3>
          <h3 className="text-gray-600 font-medium">
            Software Developer Intern
          </h3>
          <ul>
            <li className="list-disc ml-2 my-2 text-base font-normal text-gray">
              Engineered a Battery Intelligence platform for electric vehicles,
              utilizing geolocation parameters to predict battery health. This
              platform aims to increase battery life by 3 years, optimizing
              performance.
            </li>
            <li className="list-disc ml-2  my-2">
              Utilized AWS services (Cognito, EC2, S3, SES, DynamoDB,
              CloudWatch, CloudFormation, etc.) to optimize system architecture
              and functionality in diverse projects.
            </li>
            <li className="list-disc ml-2 my-2 ">
              Directed a technical team of 10+ members, acquiring valuable
              leadership and team management expertise.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="my-1 text-sm font-normal leading-none text-gray-400 ">
            June 2022 - Sep 2022, Fredericton - CA
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">
            MITACS - University of New Brunswick
          </h3>
          <h3 className="text-gray-600 font-medium">Research Intern</h3>
          <ul>
            <li className="list-disc ml-2 my-2 text-base font-normal text-gray">
              Partnered with Professor Daniel Rea to develop Mixed Reality
              prototypes enhancing user experience for remote-controlled robots.
              Executed tests comparing 10 real-life activities with their
              virtual counterparts.
            </li>
            <li className="list-disc ml-2  my-2">
              Constructed over 10 prototypes for an advanced Mixed Reality
              Project, meticulously assessing and comparing real-life and
              virtual experiences to enhance overall user satisfaction.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="my-1 text-sm font-normal leading-none text-gray-400 ">
            Feb 2022 - May 2022, Singapore - SG
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">Quinence</h3>
          <h3 className="text-gray-600 font-medium">
            Software Developer Intern
          </h3>
          <ul>
            <li className="list-disc ml-2 my-2 text-base font-normal text-gray">
              Successfully migrated code for the Soulless Citadel NFT platform
              from Next.js to Remix-run, resulting in a 30% reduction in browser
              load time and build size.
            </li>
            <li className="list-disc ml-2  my-2">
              Integrated Shopify Store API for the Merchandise section of NFT
              platform and enhanced UI design of overall website.
            </li>
            <li>
              Curated content for Modernfullstack to develop course for
              TailwindCSS for beginner developers to learn.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
