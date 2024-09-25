
import { React, useState } from 'react'
import { LuMenu, LuX } from "react-icons/lu"
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <div className=' flex justify-between items-center p-[20px] bg-green-950 text-white'>
      <div >
        <h1 className='uppercase font-bold border rounded-full border-yellow-400 bg-yellow-400 text-green-950 w-[50px] h-[50px] flex justify-center items-center p-[20px]'>
          <a href='/'>Cece</a>
        </h1>
      </div>

      <div>
        <ul className=' hidden md:flex gap-8 font-semibold transition-all '>
          <li className='p-1 border-b-2 border-green-950 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
            <a href='/'>Home</a>
          </li>
          <li className='p-1 border-b-2 border-green-950 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
            <a href='/about'>About</a>
          </li>
          <li className='p-1 border-b-2 border-green-950 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
            <a href='/services'>Services</a>
          </li>
          <li className='p-1 border-b-2 border-green-950 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'><a href='/blog'>Blog</a></li>
        </ul>


        <div className='flex w-[75px] justify-end md:hidden'>
          <button onClick={toggleMenu} className='text-3xl'>
            {isMenuOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>

        <div
          className={`absolute md:hidden top-28 right-4 w-40  bg-white rounded-lg flex flex-col items-center gap-6 p-2 font-semibold text-[#212a3c] text-lg transform transition-transform ${isMenuOpen ? "block" : "hidden"}`}
        >
          <li
            className='list-none w-full text-center p-4 hover:bg-green-950 rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
            onClick={toggleMenu}
          >
            <Link to='/'>
              Home
            </Link>
          </li>
          <li
            className='list-none w-full text-center p-4 hover:bg-green-950 rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
            onClick={toggleMenu}
          >
            <Link to='/about'>
              About
            </Link>
          </li>
          <li
            className='list-none w-full text-center p-4 hover:bg-green-950 rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
            onClick={toggleMenu}
          >
            <Link to='/services'>
              Services
            </Link>
          </li>
          <li
            className='list-none w-full text-center p-4 hover:bg-green-950 rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
            onClick={toggleMenu}
          >
            <Link to='/blog'>
              Blog
            </Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar

