import React from 'react';
import { ProjectCard } from '.';
import {
  queryFuel,
  roommateTinder,
  speakSphere,
} from '../utils/constants/hero.const';
import roommatetinder from '../utils/images/roommatetinder.png';
import speaksphere from '../utils/images/speaksphere.png';
import queryfuel from '../utils/images/queryfuel.png';

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
        <ProjectCard
          img={queryfuel}
          title="Query Fuel: In-house query solver"
          description={
            <>
              <ul className="w-full text-justify">
                <li className="py-2">
                  Developed a Query Solver platform that can be installed at
                  multiple institutes and communities at once to act as a doubt
                  solving platform.
                </li>
                <li className="py-2">
                  Novelty includes the Search-as-type feature and enhanced
                  Security Features.
                </li>
              </ul>
            </>
          }
          link="https://github.com/shvam0000/Query-Fuel"
          stack={queryFuel}
        />
        <ProjectCard
          img={speaksphere}
          title="SpeakSphere: Spanish Learning Chatbot"
          description={
            <>
              <ul className="w-full text-justify">
                <li className="pb-2">
                  Developed a Language Learning Chatbot that uses GPT-4 in the
                  backend to help people learn Spanish using Conversational
                  Learning method.
                </li>
                <li className="py-2">
                  Primarily built for people who have a basic understanding of
                  the language as it indulges the user to talk about the topics
                  they want and corrects them if they make mistakes.
                </li>
                <li>
                  Created a translation feature that helps to get the english
                  translation of the message on hover.
                </li>
              </ul>
            </>
          }
          link="https://github.com/shvam0000/Speak-Sphere"
          stack={speakSphere}
        />
        <ProjectCard
          img={roommatetinder}
          title="Roommate Tinder"
          description={
            <>
              <ul className="w-full text-justify">
                <li className="py-2">
                  Designed a serverless Roommate Finder web application to help
                  user’s find potential new roommates when moving in to a new
                  place.
                </li>
                <li className="py-2">
                  The application uses Pinecone to perform the vector search and
                  matching by taking user’s preferences and adding bias on every
                  like or dislike click.
                </li>
              </ul>
            </>
          }
          link="https://github.com/shvam0000/Roommate-Tinder"
          stack={roommateTinder}
        />
      </div>
    </div>
  );
};

export default Projects;
