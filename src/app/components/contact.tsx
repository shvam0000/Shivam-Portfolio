import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="py-10 flex flex-col justify-start pl-52">
      <h1 className="uppercase font-bold pb-5 text-xl">Contact</h1>
      <h1 className="font-semibold text-lg">Don&apos;t be shy! Hit me up!</h1>

      <div className="flex flex-row items-center justify-start py-5">
        <span className="text-xl">
          <FaMapLocationDot />
        </span>
        <p className="pl-5 font-medium">New York</p>
      </div>
      <div className="flex flex-row items-center justify-start">
        <span className="text-xl">
          <MdEmail />
        </span>
        <p className="pl-5 font-medium">shivam.shekhar@columbia.edu</p>
      </div>
    </div>
  );
};

export default Contact;
