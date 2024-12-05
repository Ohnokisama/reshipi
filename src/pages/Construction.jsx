import React from 'react'
import Construct from "./../assets/images/under_construction.svg";
import { Link } from 'react-router-dom';

const Construction = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <img src={Construct} alt="" className='w-[300px] md:w-[500px]' />
      <h1 className="my-8 font-bold text-2xl md:text-4xl text-center">
        This site is still under construction
      </h1>
      <Link to={'/'} className="bg-main py-4 px-8 text-white rounded-full">
        Back to Home
      </Link>
    </div>
  )
}

export default Construction