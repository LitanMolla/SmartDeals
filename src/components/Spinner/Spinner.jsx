import React from 'react'
import './Spinner.css'
const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen fixed inset-0 z-50 bg-black/50'>
            <div className="loader">
                <div className="loader_cube loader_cube--color"></div>
                <div className="loader_cube loader_cube--glowing"></div>
            </div>
        </div>
    )
}

export default Spinner