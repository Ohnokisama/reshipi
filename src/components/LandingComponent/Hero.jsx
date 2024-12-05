import React from 'react'
import BG from "./../../assets/images/bg2.png";

const Hero = () => {
  return (
    // <header className='h-auto md:h-[95vh] overflow-hidden relative bg-slate-50 py-28 md:py-0'>
    //   <div className='absolute h-[1000px] w-[1000px] bg-accent rounded-full right-[-30%] top-[-23%] z-0 hidden md:block'>
    //   </div>
    //   <div className="h-full flex flex-col md:flex-row items-center px-8 md:px-28">
    //     <div className='basis-1/2'>
    //       <h1 className="text-3xl md:text-5xl font-semibold">
    //         Share, Discover, and Savor Recipes with Ease!
    //       </h1>
    //       <p className="text-xl md:text-2xl my-3 md:my-6">
    //         Upload your favorite recipes, explore new flavors, and connect with a community of food lovers.
    //       </p>
    //       <button className='py-4 px-8 bg-main text-white hover:bg-mainLight transition-all rounded-full text-xl'>
    //         See More
    //       </button>
    //     </div>
    //     <div className="basis-1/2 relative mt-6 md:mt-0">
    //       <img src={BG} alt="" className='block md:ml-12 md:w-[80%] relative z-[2]' />
    //       <div className="absolute w-[80%] h-full bg-[rgba(0,0,0,.03)] blur top-0 left-[45px] rounded-full z-[0]"></div>
    //     </div>
    //   </div>
    // </header>
    <header className='curvy-header h-auto md:h-[70vh] flex justify-center items-center bg-accent py-28 md:py-0 relative'>
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Share, Discover, and Savor Recipes with Ease!
        </h1>
        <p className="text-xl md:text-2xl my-3">
          Upload your favorite recipes, explore new flavors, and connect with a community of food lovers.
        </p>
        <button className='py-4 px-8 bg-main text-white hover:bg-mainLight transition-all rounded-full text-xl'>
          See More
        </button>
      </div>
      <img src={BG} alt="" className='w-[300px] absolute bottom-[-150px]' />
    </header>
  )
}

export default Hero