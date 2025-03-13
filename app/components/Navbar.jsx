import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {

  const {theme,toggleTheme}= useTheme();

  //we define a reference variable to handdle toggle of nav-menu on mobile screen(similar to stae variable in raect.) we also use ref(sideMenuRef) arguement  inside <ul> element for mobile nav. 
  const sideMenuRef= useRef();
  const openMenu = ()=>{
    // so any element having {onClick={openMenu} arguement will move left by 16 rem,(like the nav items.)}
    sideMenuRef.current.style.transform= 'translate(-16rem)'
  }
  const closeMenu = ()=>{
    // similarly, any element having // so any element having {onClick={openMenu}} arguement will move right by 16 rem,(like the nav items.)}
    sideMenuRef.current.style.transform= 'translate(16rem)'
  }

  const [isScroll,setIsScroll]=useState(false);
  //now we use useeffect() react hook which we know very well that it;ll execute ea function after initial rendering(,[]) or after each rendering(,...) or when value of some variabl echanges(,[variable]).(as chatgpt react course taught.)
  useEffect(()=>{
    //so as per arguement([]) this useEffect function runs after each rendering of site and inside its body we add an event listener  that'll make the navbar's navbar;s visibility lower on scrolling.
    window.addEventListener('scroll',()=>{
      if (scrollY>50) {
        setIsScroll(true);
      }else{
        setIsScroll(false);

      }

    })
  },[]);


  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div> */}
    {theme === "light" && (
  <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
    <Image src={assets.header_bg_color} alt="" className="w-full" />
  </div>
)}



    {/* <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}> */}
    <nav
  className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
  ${isScroll ? (theme === "dark" ? "bg-gray-800" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm") : ""}
  `}
>


        <a href="#top">
            <Image alt='' src={assets.logo} className='w-28 cursor-pointer mr-14'/>
        </a>

        {/* means by default the list<ul> will be hidden on small screen sizes but on (md or medium screen size) it'll be a flexbox. */}
        {/* <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}> */}
        <ul
  className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
  ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white shadow-sm bg-opacity-50"}
  `}>

            <li><a href="#top">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button onClick={toggleTheme}>
              <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>

            <a href="#contact" className='hidden lg:flex gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact<Image src={assets.arrow_icon} className='w-3 h-3 relative top-2.5' alt=''/></a>

            <button className={'block md:hidden ml-3'} onClick={openMenu}>

              {/* You can use different menu images for light and dark modes. */}
            <Image src={theme === "dark" ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
            </button>
        </div>

        {/* mobile hamburger menu (as in case of small screen default nav is hidden) */}

        {/* <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'> */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white-50 transition duration-500 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white shadow-sm bg-opacity-50"}`}>

            <div className='absolute right-6 top-6'>
              <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' onClick={closeMenu}/>
            </div>

            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About me</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#work" onClick={closeMenu}>My work</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>

    </nav>
        
    </>
  )
}

export default Navbar