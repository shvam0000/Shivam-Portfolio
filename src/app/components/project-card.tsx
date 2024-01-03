import React from 'react';
import Project1 from '../utils/images/project1.avif';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { ProjectCardProps } from '../utils/props';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  stack,
  img,
}) => {
  return (
    <div className="p-5 bg-white my-10 rounded-2xl flex justify-center items-center">
      <figure className="mr-10">
        <Image
          className="rounded-3xl shadow-2xl"
          src={img}
          height={600}
          width={600}
          alt="setup"
        />
      </figure>
      <div className="flex flex-col justify-center h-full text-center">
        <h1 className="uppercase font-bold text-xl mb-4">{title}</h1>
        <div className="max-w-lg">{description}</div>
        <div className="flex justify-center items-center py-3">
          {stack?.map((tech: any) => (
            <Image
              key={tech.name}
              src={`https://skillicons.dev/icons?i=${tech.name}`}
              height={70}
              width={70}
              className="px-2 "
              alt="tech"
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <a
            href={link}
            target="_blank"
            className="hover:scale-110 font-bold flex items-center py-2 px-4 rounded-full">
            <span className="px-2">View Project</span> <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
