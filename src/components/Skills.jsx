import React from 'react';

import Ethereum from '../assets/ethereum.png';
import Hardhat from '../assets/hardhat.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import EthersJS from '../assets/ethers.png';
import Java from '../assets/java.png';
import Solidity from '../assets/solidity.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#E94B3CFF] '>Skills</p>
                <p className='py-4'>\\ These are the technologies I've worked with the most</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Ethereum} alt="Ethereum icon" />
                    <p className='my-5'>ETHEREUM</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-14 mx-auto' src={Solidity} alt="Solidity icon" />
                    <p className='my-4'>SOLIDITY</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-28 mx-auto' src={EthersJS} alt="Web3JS icon" />
                    <p className='my-8'>ETHERS.JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Hardhat} alt="Hardhat icon" />
                    <p className='my-8'>HARDHAT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={Java} alt="Java icon" />
                    <p className='my-1'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;