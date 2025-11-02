import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import { AuthContex } from '../../contex/ContexProvider'
import Spinner from '../../components/Spinner/Spinner'

const Root = () => {
  const {loading} = useContext(AuthContex);
  return (
    <>
      <div className="flex flex-col min-h-screen font-inter text-slate-900 bg-gray-100">
        <Navbar />
        <main className='flex-1'>
          {loading && <Spinner/>}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Root