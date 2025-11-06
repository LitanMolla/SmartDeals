import React from 'react'
import Hero from '../../components/Hero/Hero'
import RecentProducts from '../../components/RecentProducts/RecentProducts'
import { useLoaderData } from 'react-router'

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Hero/>
      <RecentProducts data={data} />
    </div>
  )
}

export default Home