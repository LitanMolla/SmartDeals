import React from 'react'
import demo from '../../assets/giant_296949.png'
import { Link } from 'react-router'
const ProductsCard = () => {
  return (
    <div className='bg-white p-4 rounded-md space-y-2 shadow shadow-gray-300 hover:shadow-xl duration-300'>
        <img className='w-full rounded-md' src={demo} alt="demo" />
        <h4 className='font-medium'>Yamaha Fz Guitar [ Full Fresh Condition ] </h4>
        <p className='bg-gr text-transparent bg-clip-text'>$ 55.99- 75</p>
        <Link className='text-purple-500 border border-purple-500 rounded-md py-2 w-full block text-center font-medium duration-300 hover:bg-purple-500 hover:text-gray-100'>View Details</Link>
    </div>
  )
}

export default ProductsCard