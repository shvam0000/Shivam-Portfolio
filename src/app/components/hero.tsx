'use client';
import React, { useEffect } from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import man from '../utils/images/man.jpeg';
import Image from 'next/image';
import { techStack } from '../utils/constants/hero.const';
import anime from 'animejs/lib/anime.es.js';
import GitHubCalendar from 'react-github-calendar';

const Hero = () => {
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.hero-title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.hero-image',
        translateX: 0,
        scale: 1,
        rotate: '1turn',
      });
  }, []);

  return (
    <div className="bg-gray-50 py-10 w-screen flex flex-col justify-center">
      <div className="flex justify-center items-center py-10">
        <div className="w-1/2 flex flex-col justify-center items-start pl-32">
          <h1 className="text-6xl font-bold pt-5 pb-2 hero-title">
            Full-Stack Web Developer 👋🏼
          </h1>
          <h2 className="text-lg pb-5 pt-3 font-medium text-gray-600 pr-20 hero-subtitle">
            Hi, I&apos;m Shivam Shekhar. A passionate Full-Stack Web Developer
            based in New York.📍
          </h2>
          <div className="flex items-center text-gray-800">
            <figure className="text-4xl font-bold pr-2">
              <CiLinkedin />
            </figure>
            <figure className="text-3xl font-medium pl-2">
              <FiGithub />
            </figure>
          </div>
        </div>
        <figure className="pr-32">
          <Image
            className="rounded-full hero-image"
            src={man}
            height={300}
            width={300}
            alt={'My Photo'}
          />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-xl font-semibold">Tech Stack</div>
        <div className="py-5 text-xl">-</div>
        <div className="flex justify-center items-center">
          {techStack?.map((tech) => (
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
        <div className="flex flex-col items-center justify-center py-10">
          <GitHubCalendar colorScheme="light" username="shvam0000" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
