import React from 'react';
import './Navbar.css';

const MujNavbar = () => {
  return (
    <div id="Divframeruvar" className="bg-[#0e6ba8] flex flex-col md:flex-row justify-between w-full h-[673px] items-start pt-16 pl-[209px] pr-4 md:pr-40">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 h-[317px] items-start">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-[300px] w-full md:w-5/6 items-start">
          <div className="text-center text-4xl leading-[30px] text-white w-full md:w-1/6 mb-2 md:mb-0">
            About
          </div>
          <div className="text-center text-4xl leading-[30px] text-white mr-2 md:mr-8 w-full md:w-1/6 mb-2 md:mb-0">
            Services
          </div>
          <div className="text-center text-4xl leading-[30px] text-white w-full md:w-1/6 mb-2 md:mb-0">
            Projects
          </div>
        </div>
        <div className="text-center text-4xl leading-[30px] text-white w-full md:w-1/6">
          Portfolio
        </div>
      </div>
      <div className="text-center text-4xl leading-[30px] text-white w-full md:w-1/6 mt-2 md:mt-0">
        Contact
      </div>
    </div>
  );
};

export default MujNavbar;
