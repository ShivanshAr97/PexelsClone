import React from 'react'
import { AiFillProfile } from 'react-icons/ai';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' top-4 left-0 sticky z-10 flex justify-between border backdrop-blur-lg mx-8 px-8 rounded-lg py-2 my-4 text-white font-medium align-middle items-center'>
    <Link to="/"><h1 className='text-xl'>Homepage</h1></Link>
    <div className='flex align-middle items-center'>
    <Link to="/login"><p className='hidden lg:block mx-4 cursor-pointer'>Login</p></Link>
    <Link to="/register"><button className='hidden lg:block border rounded-lg px-2 py-1'>Create Account</button></Link>
    <Link to="/register"><button className='lg:hidden py-1'><FaUser/></button></Link>
    </div>
    </div>
  )
}

export default Navbar