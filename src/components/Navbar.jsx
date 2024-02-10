import React from 'react'

const Navbar = ({links}) => {
  return (
    <>
    <div className="navbar text-white flex justify-between items-center px-10 py-8 text-lg  ">
      <div className='cursor-pointer'>
        LOGO
      </div>
      <div className="flex gap-5 border-2 px-7 py-2 rounded-full backdrop-blur-sm	 	">
        {
            links.map((e, i) => {
                return <a key={i} href="/" className='sticky top-0 cursor-pointer hover:text-purple-950 rounded-sm capitalize text-md transition-all ease-linear delay-0 hover:font-medium sm:block' >{e}</a>
            })
        }
        {/* <h4><a href="/" className='cursor-pointer hover:border-b-2 rounded-sm'>{links}</a></h4>
        <h4><a href="/about" className='cursor-pointer hover:border-b-2 rounded-sm'>{l}</a></h4>
        <h4><a href="/" className='cursor-pointer hover:border-b-2 rounded-sm'>Contact</a></h4> */}
      </div>
        <h4><a href="/" className='cursor-pointer'>Portfolio</a></h4>
    </div>
    </>
  )
}

export default Navbar
