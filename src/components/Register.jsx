import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <div className='mx-4 lg:w-[50%] lg:mx-auto lg:h-[80vh] backdrop-blur-lg border-2 border-white rounded-xl text-white'>
    <h1 className='flex justify-center font-bold text-3xl my-8 lg:my-12'>Register with Us</h1>
    <form action="">
        <input className='flex border px-4 py-2 rounded-lg m-3 w-4/5 lg:w-3/5 mx-auto outline-none justify-center' type="text" placeholder='Username' required />
        <input  className='flex border px-4 py-2 rounded-lg m-3 outline-none w-4/5 lg:w-3/5 mx-auto justify-center' type="email" placeholder='Email' required />
        <input className='flex border px-4 py-2 rounded-lg m-3 outline-none w-4/5 lg:w-3/5 mx-auto justify-center' type="password" placeholder='Password' required />
        <button type='submit' className="btn flex mx-auto my-8 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Sign Up</button>
        <p className='flex justify-center text-sm mb-4 lg:mb-0'>Already have an account ? <Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
    </form>
    
    </div>
  )
}

export default Register