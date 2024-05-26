import React from 'react';
import { ProjectCard } from '.';
import { projectData } from '../utils/constants/data';

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50  py-10">
      <div className="pl-52">
        <h1 className="uppercase font-bold pb-5 text-xl text-blue-500">
          Portfolio
        </h1>
        <h2 className="font-semibold text-2xl">
          Each project is a unique piece of development 🧩
        </h2>
      </div>
      <div className="w-3/4 mx-auto py-5">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            img={project.img}
            title={project.title}
            description={
              <>
                <ul className="w-full text-justify">
                  {project.description.map((desc, index) => (
                    <ul key={index} className="w-full text-justify">
                      <li className="py-2">{desc}</li>
                    </ul>
                  ))}
                </ul>
              </>
            }
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
