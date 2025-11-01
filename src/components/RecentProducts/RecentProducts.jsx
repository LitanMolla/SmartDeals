import React from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'

const RecentProducts = () => {
  return (
    <>
        <div className="my-10">
            <div className="container">
                <h2 className='font-bold text-center text-3xl lg:text-3xl mb-10'>Recent <span className='bg-gr bg-clip-text text-transparent'>Products</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Array.from({length:6}).map(item=>(
                        <ProductsCard/>
                    ))
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default RecentProducts