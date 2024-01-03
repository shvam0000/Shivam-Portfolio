import React from 'react';
import Image from 'next/image';
import setup from '../utils/images/coding.avif';

const About = () => {
  return (
    <div id="about" className="py-20 flex justify-center items-center">
      <figure className="mr-10">
        <Image
          className="rounded-3xl"
          src={setup}
          height={500}
          width={500}
          alt="setup"
        />
      </figure>
      <div className="flex flex-col justify-center h-full">
        <h1 className="uppercase font-bold  text-lg mb-4 inline-block text-blue-500">
          about me
        </h1>
        <h2 className="font-bold text-2xl mb-4 max-w-lg">
          A dedicated Full-stack Web Developer based in New York 📍
        </h2>
        <p className="max-w-lg">
          As a Full Stack Web Developer, I possess an impressive arsenal of
          skills in TypeScript, React, Tailwind, NodeJS and MongoDB. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
