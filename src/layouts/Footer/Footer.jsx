import React from 'react'
import { FaFacebook, FaLinkedin, FaLocationDot, FaTwitter, FaX } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-900'>
        <div className="container pt-10 lg:pt-20 pb-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-2 space-y-3">
              <Link className='text-xl md:text-2xl font-bold text-gray-100 block'>Smart<span className='bg-linear-to-tr from-purple-700 to-purple-400 bg-clip-text text-transparent'>Deals</span></Link>
              <p className='text-gray-500'>Your trusted marketplace for authentic local products. Discover the best deals from across Bangladesh.</p>
            </div>
            <div className="flex-1 space-y-3">
              <h4 className='text-gray-100 text-xl font-medium'>Quick Links</h4>
              <ul className='space-y-2'>
                <li><Link to='/all-products' className='text-gray-500 duration-300 hover:text-gray-100'>All Products</Link></li>
                <li><Link to='/dashboard' className='text-gray-500 duration-300 hover:text-gray-100'>Dasboard</Link></li>
                <li><Link to='/login' className='text-gray-500 duration-300 hover:text-gray-100'>Login</Link></li>
                <li><Link to='/register' className='text-gray-500 duration-300 hover:text-gray-100'>Register</Link></li>
              </ul>
            </div>
            <div className="flex-1 space-y-3">
              <h4 className='text-gray-100 text-xl font-medium'>Categories</h4>
              <ul className='space-y-2'>
                <li><Link to='/electronics' className='text-gray-500 duration-300 hover:text-gray-100'>Electronics</Link></li>
                <li><Link to='/fashion' className='text-gray-500 duration-300 hover:text-gray-100'>Fashion</Link></li>
                <li><Link to='/home-living' className='text-gray-500 duration-300 hover:text-gray-100'>Home & Living</Link></li>
                <li><Link to='/groceries' className='text-gray-500 duration-300 hover:text-gray-100'>Groceries</Link></li>
              </ul>
            </div>
            <div className="flex-1 space-y-3">
              <h4 className='text-gray-100 text-xl font-medium'>Contact & Support</h4>
              <ul className='space-y-2'>
                <li><Link to='/' className='text-gray-500 duration-300 hover:text-gray-100 flex items-center gap-1'><IoMdMail />support@Smartdeals.com</Link></li>
                <li><Link to='/' className='text-gray-500 duration-300 hover:text-gray-100 flex items-center gap-1'><MdCall />+880 123 456 789</Link></li>
                <li><Link to='/' className='text-gray-500 duration-300 hover:text-gray-100 flex items-center gap-1'><FaLocationDot />123 Commerce Street, Dhaka, Bangladesh</Link></li>
              </ul>
            </div>
            <div className="flex-1 space-y-3">
              <h4 className='text-gray-100 text-xl font-medium'>Social Links</h4>
              <ul className='space-y-2 text-gray-100 flex gap-2'>
                <Link><FaTwitter/></Link>
                <Link><FaLinkedin/></Link>
                <Link><FaFacebook/></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className='border-gray-500' />
          <p className='text-center text-gray-300 py-5'>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer