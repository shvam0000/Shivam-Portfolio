import React from 'react';
import { ExperienceCardProps } from '../utils/props';

const ExperienceCard = ({
  timeline,
  companyName,
  role,
  description,
}: ExperienceCardProps) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
      <time className="my-1 text-sm font-normal leading-none text-gray-400 ">
        {timeline}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 ">{companyName}</h3>
      <h3 className="text-gray-600 font-medium">{role}</h3>
      <ul>{description}</ul>
    </li>
  );
};

export default ExperienceCard;
