import React from 'react'
import BG from "../assets/images/bg2.png";
import About from "../assets/images/about_img.jpg";
import Features from "../assets/images/features_img.jpg";
import Logo from "../assets/images/logo3.png";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <header className='curvy-header h-auto md:h-[70vh] flex justify-center items-center bg-accent py-28 px-6 md:py-0 relative z-50' id='home'>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Share, Discover, and Savor Recipes with Ease!
          </h1>
          <p className="text-xl md:text-2xl my-4">
            Upload your favorite recipes, explore new flavors, and connect with a community of food lovers.
          </p>
          <Link to={'/construction'} className='py-4 px-8 inline-block bg-main text-white hover:bg-mainLight transition-all rounded-full text-xl'>
            See More
          </Link>
        </div>
        <img src={BG} alt="" className='w-[200px] md:w-[300px] absolute bottom-[-100px] md:bottom-[-150px]' />
      </header>

      {/* After header */}
      <div className='bg-main text-white py-20 relative top-[-150px] px-8 md:px-28'>
        <div className="flex flex-col md:flex-row gap-8 pt-[11rem] md:py-20 justify-between">
          <h3 className="text-2xl md:text-4xl font-semibold">
            Share your favorite <br /> recipes!!
          </h3>
          <h3 className="text-2xl md:text-4xl self-end text-end font-semibold">
            Ignite your passion <br /> for cooking!!
          </h3>
        </div>
      </div>

      {/* About */}
      <section id='about' className="flex flex-col md:flex-row px-8 md:px-28 pb-16 gap-16 items-center">
        <div className='basis-full md:basis-1/2'>
          <h2 className="text-3xl md:text-4xl font-bold my-3">Reshipi: Your Culinary Companion</h2>
          <p>
            At Reshipi, we believe that cooking is a journey of creativity and connection. Our mission is to build a vibrant online community where food lovers can come together to share their passion for cooking, discover new flavors, and learn from each other. <br />

            Whether you're a seasoned chef or a beginner in the kitchen, Reshipi offers something for everyone. Browse through thousands of recipes, from classic comfort food to exotic international dishes. Save your favorites, create personalized cookbooks, and even connect with other users who share your culinary interests.
          </p>
          <ul className="my-4 list-disc marker:text-accent">
            <h3 className='text-2xl font-bold'>Our Mission</h3>
            <li className='py-2'>
              <span className="font-bold">To inspire</span>: We aim to ignite your culinary creativity with a diverse collection of recipes from around the world.
            </li>
            <li className='py-2'>
              <span className="font-bold">To empower</span>: We provide you with the tools and knowledge to confidently navigate the kitchen, from beginner-friendly guides to advanced techniques.
            </li>
            <li className='py-2'>
              <span className="font-bold">To connect</span>: We foster a vibrant community where you can connect with other food enthusiasts, share your creations, and find inspiration in the culinary journeys of others.
            </li>
          </ul>
        </div>
        <div className="basis-full md:basis-1/2">
          <img src={About} alt="" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="flex flex-col-reverse md:flex-row px-8 md:px-28 py-16 gap-16 items-center bg-[#f5fffa]">
        <div className="basis-full md:basis-1/2">
          <img src={Features} alt="" className="w-full rounded-lg" />
        </div>
        <div className="basis-full md:basis-1/2">
          <h2 className="text-3xl md:text-4xl font-bold my-3">Features of Reshipi</h2>
          <ul className='list-disc marker:text-accent'>
            <li className='py-2'>
              <h3 className="text-xl font-semibold">A vast collection of recipes</h3>
              <p>Explore thousands of recipes, from quick and easy weeknight meals to elaborate desserts and everything in between.</p>
            </li>
            <li className='py-2'>
              <h3 className="text-xl font-semibold">Community forums</h3>
              <p>Connect with other food lovers, ask questions, share your successes, and find inspiration from others.</p>
            </li>
            <li className='py-2'>
              <h3 className="text-xl font-semibold">Personalized recommendations</h3>
              <p>Discover new recipes based on your preferences and cooking style.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Onboarding */}
      <section id="onboarding" className="px-8 md:px-28 py-16 bg-main text-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          We're a small team of food enthusiasts who are passionate about bringing the joy of cooking to everyone. We hope you enjoy exploring Reshipi as much as we enjoy creating it.
        </h2>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-28 py-16 bg-mainLight text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src={Logo} alt="" width={100} />
          <ul className="flex gap-6">
            <li className="p-2">
              <a href="">
                <i className='ri-facebook-line'></i>
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <i className='ri-twitter-x-line'></i>
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <i className='ri-instagram-line'></i>
              </a>
            </li>
            <li className="p-2">
              <a href="">
                <i className='ri-youtube-line'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-4 text-center">
          <p className="text-xl">
            Copyright &copy; {new Date().getFullYear()}. Reshipi.com. All rights reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home