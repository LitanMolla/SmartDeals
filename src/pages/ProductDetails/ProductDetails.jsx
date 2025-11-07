import React, { useContext, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router'
import { AuthContex } from '../../contex/ContexProvider';
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const { user } = useContext(AuthContex);
  const [bid_price, setBid_price] = useState('')
  const [buyer_contact, setBuyer_contact] = useState('')
  const [openModal, setOpenModal] = useState(false)
  // console.log(user);
  const data = useLoaderData();
  const { _id, title, price_min, price_max, email, category, created_at, image, status, location, seller_image, seller_name, condition, usage, description, seller_contact } = data || {};
  const date = new Date(created_at).toLocaleDateString();
  const { photoURL, displayName } = user || {};
  const bidsData = {
    image,
    email,
    title,
    price_max,
    seller_image,
    seller_name,
    status: 'pending',
    bid_price,
    buyer_email: user?.email,
    buyer_contact,
    buyer_name: displayName,
    buyer_image: photoURL,
    product: _id
  }
  const handleBidSubmit = (event) => {
    event.preventDefault()
    // console.log(bidsData);
    fetch('https://smart-server-ruddy.vercel.app/bids', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(bidsData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({ title: 'Bid submited succesfully', icon: 'success' })
          setOpenModal(false)
        }
      })
  }
  return (
    <div>
      <div className="container my-10 md:my-20">
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <div className="lg:w-5/12 space-y-5">
            <img className='w-full rounded-md' src={image} alt={title} />
            <div className="bg-white p-5 rounded-md space-y-3">
              <h4 className='text-xl font-medium'>Product Description</h4>
              <div className="flex justify-between">
                <p><span className='text-purple-500'>Condition:</span>  {condition}</p>
                <p><span className='text-purple-500'>Usage Time: </span>  {usage}</p>
              </div>
              <hr className='border-gray-300' />
              <p>{description}</p>
            </div>
          </div>
          <div className="lg:w-7/12 space-y-5">
            <Link className='flex items-center gap-2'><FaArrowLeft /><span>Back to Products</span></Link>
            <h4 className='text-3xl lg:text-4xl font-bold'>{title}</h4>
            <p className='text-purple-500 bg-purple-200 inline-block px-5 py-px rounded-full'>{category}</p>
            <div className="bg-white p-5 rounded-md">
              <h4 className='text-green-500 font-semibold text-2xl'>${price_min}-{price_max}</h4>
              <p>Price starts from </p>
            </div>
            <div className="bg-white p-5 rounded-md">
              <h4 className=' font-semibold text-2xl'>Product Details</h4>
              <p><b>Product ID:</b> 68f753ae2174ca368ec882f4</p>
              <p><b>Posted:</b>{date}</p>
            </div>
            <div className="bg-white p-5 rounded-md space-y-1">
              <h4 className=' font-semibold text-2xl'>Seller Information</h4>
              <div className="flex items-center gap-2">
                <img className='w-10 h-10 rounded-full' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeatcmYRYsMNho5mAp9qySUzghxQYU_TPGw&s' || seller_image} alt={seller_name} />
                <div className="">
                  <p>{seller_name}</p>
                  <p>{email}</p>
                </div>
              </div>
              <p><b>Location:</b> {location}</p>
              <p><b>Contact:</b> {seller_contact}</p>
              <p><b>Status:</b> <span className='bg-yellow-100 text-yellow-600 capitalize px-3 py-1 border border-yellow-200 rounded-full'>{status}</span></p>
            </div>
            <button onClick={() => setOpenModal(open => !open)} className='w-full block text-gray-100 font-medium bg-linear-to-r from-purple-600 to-pink-400 py-2.5 rounded-md cursor-pointer hover:bg-linear-to-l duration-300'>I want Buy This Product</button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {
        openModal
        &&
        <div className="fixed w-full inset-0 bg-black/70 flex justify-center items-center">
          <div className="container">
            <form onSubmit={handleBidSubmit} className='bg-white max-w-xl mx-auto p-8 rounded-md space-y-3 w-full'>
              <h4 className='text-2xl font-bold text-center'>Give Seller Your Offered Price</h4>
              <div className="">
                <label>Buyer Name</label>
                <input disabled defaultValue={displayName} className='block disabled:bg-gray-200 disabled:cursor-no-drop mt-1 border border-gray-200 rounded-md px-3 py-2 w-full' type="text" placeholder='Your Name' />
              </div>
              <div className="">
                <label>Buyer Email</label>
                <input disabled defaultValue={user?.email} className='block disabled:bg-gray-200 disabled:cursor-no-drop mt-1 border border-gray-200 rounded-md px-3 py-2 w-full' type="text" placeholder='Your Email' />
              </div>
              <div className="">
                <label>Buyer Photo</label>
                <input disabled defaultValue={photoURL} className='block disabled:bg-gray-200 disabled:cursor-no-drop mt-1 border border-gray-200 rounded-md px-3 py-2 w-full' type="text" placeholder='Your photo URL' />
              </div>
              <div className="">
                <label>Place your Price</label>
                <input required onChange={(e) => setBid_price(e.target.value)} className='block mt-1 border border-gray-200 rounded-md px-3 py-2 w-full' type="text" placeholder='Your price' />
              </div>
              <div className="">
                <label>Contact Info</label>
                <input required onChange={(e) => setBuyer_contact(e.target.value)} className='block mt-1 border border-gray-200 rounded-md px-3 py-2 w-full' type="text" placeholder='Your phone' />
              </div>
              <div className="flex justify-between items-center gap-5">
                <button onClick={() => setOpenModal(open => !open)} type='button' className='text-purple-500 w-full flex-1 py-2.5 rounded-md border border-purple-500 cursor-pointer duration-300 hover:bg-purple-200'>Cancel</button>
                <button className='flex-1 w-full py-2.5 border border-purple-500 bg-linear-to-r from-purple-600 to-indigo-400 text-gray-100 cursor-pointer rounded-md duration-300 hover:bg-linear-to-l'>Submit Bid</button>
              </div>
            </form>
          </div>
        </div>}
    </div>
  )
}

export default ProductDetails