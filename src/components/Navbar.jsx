import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];
  return (
    <>
    <div className="navbar text-white flex justify-between items-center px-10 py-8 text-lg  ">
      <div className='cursor-pointer'>
        LOGO
      </div>
      <div className={
        nav 
        ? "flex gap-5 border-2 px-7 py-2 rounded-full backdrop-blur-sm md:absolute md:flex-col  md:items-center md:right-8 md:top-[10%] md:w-fit md:h-[40%] md:rounded-lg	md:items-center md:z-50 md:justify-center md:bg-zinc-900 "
        : " flex gap-5 border-2 px-7 py-2 rounded-full backdrop-blur-sm md:hidden"
      }>
        {
            navItems.map((e, i) => {
                return <a key={e.id} href="/" className=' md: cursor-pointer hover:text-purple-950 rounded-sm capitalize text-md transition-all ease-linear delay-0 hover:font-medium sm:block' >{e.text}</a>
            })
        }
      </div>
        <div onClick={handleNav} className='md:block hidden cursor-pointer'>
          {/* <h4><a href="/" className='cursor-pointer'>👋 Yo!</a></h4> */}
          {nav ? <AiOutlineClose size={20} /> :<AiOutlineMenu size={20} /> }
        </div>
    </div>
    </>
  )
}

export default Navbar










// flex absolute flex-col  items-center z-50 justify-center bg-zinc-900 rounded-lg right-8 top-[10%] w-fit h-[40%] border-r  md:hidden 




// flex gap-5 border-2 px-7 py-2 rounded-full backdrop-blur-sm md:absolute md:flex-col  md:items-center md:right-8 md:top-[10%] md:w-fit md:h-[40%] md:rounded-lg	md:items-center md:z-50 md:justify-center md:bg-zinc-900 	"




// "flex gap-5 border-2 px-7 py-2 rounded-full backdrop-blur-sm md:absolute md:flex-col  md:items-center md:right-8 md:top-[10%] md:w-fit md:h-[40%] md:rounded-lg	md:items-center md:z-50 md:justify-center md:bg-zinc-900 	"