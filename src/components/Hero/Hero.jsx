import React from 'react'
import heroLeft from '../../assets/bg-hero-left.png'
import heroRight from '../../assets/bg-hero-right.png'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router'
const Hero = () => {
    return (
        <div className='bg-linear-to-br from-pink-200 to-teal-100 relative overflow-hidden'>
            <img className='absolute left-0 z-10' src={heroLeft} alt="heroLeft" />
            <img className='absolute right-0 z-10' src={heroRight} alt="heroRight" />
            <div className="container py-15 lg:py-20">
                <h1 className='text-3xl md:text-5xl font-bold text-center leading-14'>Deal your <span className='bg-gr bg-clip-text text-transparent'>Products</span> <br className='hidden lg:block' /> in a <span className='bg-gr bg-clip-text text-transparent'>Smart</span> way !</h1>
                <p className='text-center text-gray-500 mt-3'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>
                <div className="max-w-lg w-full flex mx-auto my-5">
                    <input className='w-full bg-white py-2 px-5 rounded-l-2xl shadow-xl shadow-gray-300 outline-0' type="text" placeholder='Search For Products, Categoriees...' />
                    <button className='bg-gr px-5 text-gray-100 rounded-r-2xl py-2 cursor-pointer'><FaSearch /></button>
                </div>
                <div className="flex justify-center gap-5">
                    <Link to='/all-products' className='bg-gr py-2 px-3 text-gray-100 rounded-md border border-purple-600'>Watch All Products</Link>
                    <Link to='/add-products' className='bg-gr bg-clip-text text-transparent py-2 px-3 rounded-md border border-purple-600'>Post an Product</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero