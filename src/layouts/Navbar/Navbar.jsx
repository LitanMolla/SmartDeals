import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContex } from '../../contex/ContexProvider'

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContex);
    const [isOpen, setIsOpen] = useState(false)
    const handleLogOut = () => {
        logOutUser()
    }
    const navMenu = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>Home</NavLink></li>
        <li><NavLink to='/all-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>All Products</NavLink></li>
        <li><NavLink to='/my-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>My Products</NavLink></li>
        <li><NavLink to='/my-bids' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>My Bids</NavLink></li>
        <li><NavLink to='/add-products' className={({ isActive }) => isActive ? 'font-medium text-purple-600' : 'font-medium text-slate-900'}>Create Product</NavLink></li>
    </>
    return (
        <>
            <div className="bg-gray-100 py-2.5 shadow sticky top-0 left-0 w-full z-50">
                <nav className="container flex justify-between items-center gap-5">
                    <Link className='text-xl md:text-2xl font-bold block'>Smart<span className='bg-linear-to-tr from-purple-700 to-purple-400 bg-clip-text text-transparent'>Deals</span></Link>
                    <ul className='lg:flex gap-5 hidden flex-wrap'>{navMenu}</ul>
                    <div className="">
                        {
                            user
                                ?
                                <div className="relative">
                                    <button onClick={() => setIsOpen(prv => !prv)} className='w-11 h-11 rounded-full overflow-hidden cursor-pointer border border-purple-600'><img className='w-full' src={user?.photoURL} alt="photoURL" /></button>
                                    {
                                        isOpen
                                        &&
                                        <div className="absolute right-0 top-14 bg-white border border-gray-300 px-5 py-2 rounded-md z-10">
                                            <p className='font-medium whitespace-nowrap'>{user?.displayName}</p>
                                            <button onClick={handleLogOut} className='bg-gr text-gray-100 w-full py-2 rounded-md  cursor-pointer px-4'>Logout</button>
                                        </div>
                                    }
                                </div>
                                :
                                <NavLink to='/login' className='text-purple-600 border border-purple-600 font-medium px-6 py-2.5 rounded-md block duration-300 hover:bg-purple-500 hover:text-gray-100'>Login</NavLink>
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar