import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#E94B3CFF]'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>What I Can Do.</p>
            </div>
            <div>
              <p className='py-3 max-w-[700px]'>
              I’m a very ambitious Blockchain Developer who emphasizes creating excellent software that is both functional and fast. 
              I can develop smart contracts that are flawless and secure as well as plan, build, and launch a website.
              I'm looking for a role in an established company with the opportunity to work with the latest technologies 
              on diverse and challenging projects. </p>  
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Why Blockchain?</p>
            </div>
            <div>
              <p className='py-3 max-w-[700px]'>I chose to specialize in blockchain because when I first found out about cryptocurrencies, NFTs, and web3.0 
                I was very fascinated and intrigued by its technology. Ever since then I have become immersed in the languages and 
                architecture, and I can confidently say there is nothing id rather do. Heck, who wouldn’t want to take part in the future of the internet?</p> 
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Life When I'm Not Coding.</p>
            </div>
            <div>
              <p className='py-3 max-w-[700px]'>
                <p className=' font-bold'> Currently, I am a second-year student at the University of Colorado – Colorado Springs where I am pursuing my BS in Computer Science.</p>
                Most of my programming knowledge is self-taught as I love and am very passionate about programming. 
                When I'm not coding, I love to play basketball, watch sports (Formula 1, football, basketball, soccer), hang out with friends and family, learn Japanese, and watch anime.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;