import React, { useState } from 'react'
import Logo from "./../assets/images/logo3.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  function pageScroll() {
    const apex = window.scrollY
    const navbar = document.querySelector('#navBar')

    if(apex > 100) {
      navbar.classList.add('bg-accent')
      navbar.classList.add('shadow')
    } else {
      navbar.classList.remove('bg-accent')
      navbar.classList.remove('shadow')
    }
  }
  window.addEventListener('scroll', pageScroll)

  return (
    <>
      <nav id='navBar' className='hidden fixed w-full z-[100] py-4 px-8 md:px-28 md:flex justify-between items-center'>
        <img src={Logo} alt="" width={50} />
        <ul className="flex gap-2">
          <li className="px-4 py-2">
            <a href='#home'>
              Home
            </a>
          </li>
          <li className="px-4 py-2">
            <a href='#about'>
              About
            </a>
          </li>
          <li className="px-4 py-2">
            <a href='#features'>
              Features
            </a>
          </li>
          <li className="py-2 px-2">
            <Link to={'/construction'} className='border border-main py-3 px-6 rounded-full'>
              Sign Up
            </Link>
          </li>
          <li className="py-2 pl-2">
            <Link to={'/construction'} className='bg-main hover:bg-mainLight transition-all text-white py-3 px-8 rounded-full'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <nav className='md:hidden fixed w-full z-[100] py-4 px-8 md:px-28 flex justify-between items-center bg-accent'>
        <img src={Logo} alt="" width={50} />
        {
          !openMenu ? <i className="ri-menu-3-line py-2 px-4 rounded border" onClick={() => setOpenMenu(!openMenu)}></i> : <i className="ri-close-line py-2 px-4 rounded border" onClick={() => setOpenMenu(!openMenu)}></i>
        }

        <ul className={`flex flex-col top-[80px] ${openMenu ? 'left-0' : 'left-[-100%]'} gap-2 absolute bg-[#f5fffa] w-full transition-all`}>
          <li className="p-4">
            <a href='#home'>
              Home
            </a>
          </li>
          <li className="p-4">
            <a href='#about'>
              About
            </a>
          </li>
          <li className="p-4">
            <a href='#features'>
              Features
            </a>
          </li>
          <li className="p-4">
            <Link to={'/construction'} className='border border-main py-3 px-6 rounded-full'>
              Sign Up
            </Link>
          </li>
          <li className="p-4">
            <Link to={'/construction'} className='bg-main hover:bg-mainLight transition-all text-white py-3 px-8 rounded-full'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      
    </>
    
  )
}

export default Navbar