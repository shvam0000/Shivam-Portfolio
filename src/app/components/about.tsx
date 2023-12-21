import React from 'react';
import Image from 'next/image';
import setup from '../utils/images/coding.avif';

const About = () => {
  return (
    <div className="py-20 flex justify-center items-center">
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
        <h1 className="uppercase font-bold mb-4 inline-block">about me</h1>
        <h2 className="font-bold text-2xl mb-4 max-w-lg">
          A dedicated Full-stack Web Developer based in New York 📍
        </h2>
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus
          labore harum nihil, aut voluptatibus ipsum sequi velit omnis magnam
          ullam ad? Itaque temporibus odio adipisci animi non, perferendis ipsa
          necessitatibus ad maxime neque saepe, ipsam molestiae laboriosam
          placeat eaque dicta expedita ab voluptas, ullam nemo. Omnis suscipit
          architecto illo.
        </p>
      </div>
    </div>
  );
};

export default About;
