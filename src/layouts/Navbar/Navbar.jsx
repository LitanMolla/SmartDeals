import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const navMenu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>Home</NavLink></li>
        <li><NavLink to='/all-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>All Products</NavLink></li>
        <li><NavLink to='/my-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>My Products</NavLink></li>
        <li><NavLink to='/my-bids' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>My Bids</NavLink></li>
        <li><NavLink to='/add-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>Create Product</NavLink></li>
    </>
    return (
        <>
            <div className="bg-gray-100 py-2.5">
                <nav className="container flex justify-between items-center gap-5">
                    <Link className='text-xl md:text-2xl font-bold block'>Smart<span className='bg-linear-to-tr from-purple-700 to-purple-400 bg-clip-text text-transparent'>Deals</span></Link>
                    <ul className='lg:flex gap-5 hidden flex-wrap'>{navMenu}</ul>
                    <div className="">
                        <NavLink to='/login' className='text-purple-600 border border-purple-600 font-medium px-6 py-2.5 rounded-md block'>Login</NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar