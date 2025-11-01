import React from 'react'
import { Link } from 'react-router'
import google from '../../assets/google.svg'
const Register = () => {
  return (
    <>
      <div className="my-10 lg:my-20">
        <div className="container">
          <div className="max-w-md w-full mx-auto p-10 rounded-md shadow shadow-gray-300">
            <form className='space-y-3 w-full'>
              <h4 className='text-center text-2xl lg:text-3xl font-bold'>Register</h4>
              <p className='text-center mb-5'>Already have an account? <Link to='/login' className='bg-gr text-transparent bg-clip-text'>Login</Link></p>
              <div className="">
                <label className='block mb-1'>Name</label>
                <input name='name' className='w-full px-5 py-2.5 border border-gray-300 rounded-md outline-gray-500' type="text" placeholder='Enter your full name' />
              </div>
              <div className="">
                <label className='block mb-1'>Email</label>
                <input name='email' className='w-full px-5 py-2.5 border border-gray-300 rounded-md outline-gray-500' type="email" placeholder='litanmolla9@gmail.com' />
              </div>
              <div className="">
                <label className='block mb-1'>Photo URL</label>
                <input name='photo' className='w-full px-5 py-2.5 border border-gray-300 rounded-md outline-gray-500' type="text" placeholder='Enter your photo URL' />
              </div>
              <div className="">
                <label className='block mb-1'>Password</label>
                <input name='password' className='w-full px-5 py-2.5 border border-gray-300 rounded-md outline-gray-500' type="password" placeholder='*****************' />
                <Link to='forgot-password' className='text-gray-500'>Forgot password?</Link>
              </div>
              <input className='bg-gr w-full text-gray-100 py-2.5 rounded-md cursor-pointer duration-300' type="submit" value="Register" />
            </form>
            <div className="my-3 flex justify-between items-center gap-3">
              <hr className='border-gray-300 flex-1' />
              <p className='font-medium'>OR</p>
              <hr className='border-gray-300 flex-1' />
            </div>
            <button className='flex items-center justify-center border w-full border-gray-300 rounded-md py-2.5 cursor-pointer duration-300 hover:bg-gray-100 gap-2'><img className='w-5' src={google} alt="google.svg" /><span>Login In With Google</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register