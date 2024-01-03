import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-[#2D2E32] h-32 flex justify-around text-white items-center">
      <div className="font-bold text-xl">
        Copyright © {new Date().getFullYear()}. All rights are reserved
      </div>
      <div className="flex justify-center items-center">
        <div className="text-3xl px-2">
          <CiLinkedin />
        </div>
        <div className="text-2xl">
          <FiGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
