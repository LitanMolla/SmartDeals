import React from 'react'
import Hero from '../../components/Hero/Hero'
import RecentProducts from '../../components/RecentProducts/RecentProducts'
import { useLoaderData } from 'react-router'
const AllProducts = () => {
  const data = useLoaderData()
  return (
    <div>
      <Hero/>
      <RecentProducts data={data} />
    </div>
  )
}

export default AllProducts