import React from 'react'
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mx-4 lg:w-[50%] lg:mx-auto lg:h-[80vh] backdrop-blur-lg border-2 border-white rounded-xl text-white'>
    <h1 className='flex justify-center font-bold text-3xl my-6 lg:my-8'>Welcome back</h1>
    <form action="">
        <input className='flex border px-4 py-2 rounded-lg m-3 mx-auto w-4/5 lg:w-3/5 justify-center' type="email" placeholder='Email' required />
        <input className='flex border px-4 py-2 rounded-lg m-3 mx-auto w-4/5 lg:w-3/5 justify-center' type="password" placeholder='Password' required />
        <p className='flex justify-end text-sm text-blue-600 cursor-pointer mx-4'>Forgot password ?</p>
        <button className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Log In</button>
        <p className='flex justify-center text-sm'>Don't have an account ? <Link to="/register"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Sign Up</span></Link></p>
    </form>
    <p className=' text-center text-sm mt-2 lg:mt-8'>Or</p>
    <div className='flex mx-12 my-2 lg:my-6 text-white'>
    <button className="bg-green-600 flex align-middle items-center px-4 py-1 rounded-lg my-1 mx-auto"><FaGoogle/><span className='mx-4 hidden lg:block'>Google</span></button>
    <button className=" bg-gray-600 flex align-middle items-center px-4 py-1 rounded-lg my-1 mx-auto"><FaGithub/><span className='mx-4 hidden lg:block'>GitHub</span></button>
    <button className=" bg-blue-400 flex align-middle items-center px-4 py-1 rounded-lg my-1 mx-auto"><FaTwitter/> <span className='mx-4 hidden lg:block'>Twitter</span></button>
    </div>
    </div>
  )
}

export default Login