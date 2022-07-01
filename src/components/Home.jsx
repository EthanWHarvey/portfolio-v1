import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#E94B3CFF]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ethan Harvey
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Blockchain Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a blockchain developer, a full-stack developer, and a smart
          contract developer. I specialize in developing and optimizing dApps
          (decentralized applications) and smart contracts based on blockchain
          and occasionally blockchain architecture.
        </p>
        <div>
          {" "}
          <Link
            onClick={handleClick}
            to='projects'
            smooth={true}
            duration={500}
          >
            <button className='text-white group border-2 px-6 py-3 my-2 flex max-w-[180px] items-center hover:bg-[#E94B3CFF] hover:border-[#E94B3CFF]'>
              View Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
