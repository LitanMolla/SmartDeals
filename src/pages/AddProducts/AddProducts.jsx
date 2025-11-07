import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddProducts = () => {
  const { user } = useAuth();
  // console.log(user);
  const newProduct = {
    created_at: new Date(),
    status: "pending",
    email: user?.email,
    image: user?.photoURL,
    seller_name: user?.displayName
  }
  const [formData, setFormData] = useState(newProduct);
  const instance = useAxiosSecure()
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
    // console.log({name,value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    instance.post('https://smart-deals-opal.vercel.app/products',formData)
    .then(data=>{
      if (data.data.insertedId) {
        Swal.fire({
          title: 'Product added',
          icon: 'success'
        })
      }
    })
    .catch(error=>console.log(error.code))
  }
  return (
    <div className="my-10">
      <div className="container">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">Create A Product</h1>
          <p className="mt-1 text-sm text-slate-500">Fill up the form below to publish your product.</p>
        </div>

        {/* Static only — no handlers or state */}
        <form onSubmit={handleSubmit} className="rounded-2xl border max-w-2xl mx-auto border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="title">Title</label>
              <input
                onChange={handleOnChange}
                name='title'
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="category">Category</label>
              <div className="relative">
                <select
                  onChange={handleOnChange}
                  name='category'
                  className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-10 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
                >
                  <option value="">Select a Category</option>
                  <option>Electronics</option>
                  <option>Furniture</option>
                  <option>Music</option>
                  <option>Vehicles</option>
                  <option>Others</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Min Price */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="minPrice">Min Price You want to Sale ($)</label>
              <input
                onChange={handleOnChange}
                name='price_min'
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 18.5"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Max Price */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="maxPrice">Max Price You want to Sale ($)</label>
              <input
                onChange={handleOnChange}
                name='price_max'
                type="number"
                min="0"
                step="0.01"
                placeholder="Optional (default = Min Price)"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Product Condition */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">Product Condition</span>
              <div className="flex items-center gap-6">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <span className="relative grid place-items-center">
                    <input type="radio" onChange={handleOnChange} value='Brand New' name="condition" className="peer sr-only" />
                    <span className="h-5 w-5 rounded-full border-2 border-slate-300 bg-white peer-checked:border-violet-600"></span>
                    <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-violet-600 opacity-0 transition peer-checked:opacity-100"></span>
                  </span>
                  <span className="text-sm text-slate-700">Brand New</span>
                </label>

                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <span className="relative grid place-items-center">
                    <input type="radio" onChange={handleOnChange} value='Used' name="condition" className="peer sr-only" />
                    <span className="h-5 w-5 rounded-full border-2 border-slate-300 bg-white peer-checked:border-violet-600"></span>
                    <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-violet-600 opacity-0 transition peer-checked:opacity-100"></span>
                  </span>
                  <span className="text-sm text-slate-700">Used</span>
                </label>
              </div>
            </div>

            {/* Product Usage time */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="usageTime">Product Usage time</label>
              <input
                onChange={handleOnChange}
                name='usage'
                type="text"
                placeholder="e.g. 1 year 3 month"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Product Image URL */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="productImage">Your Product Image URL</label>
              <input
                onChange={handleOnChange}
                name='image'
                type="url"
                placeholder="https://..."
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Seller Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="sellerName">Seller Name</label>
              <input
                onChange={handleOnChange}
                disabled
                name='seller_name'
                type="text"
                defaultValue={user?.displayName}
                placeholder="e.g. Artisan Roasters"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-200"
              />
            </div>

            {/* Seller Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="sellerEmail">Seller Email</label>
              <input
                onChange={handleOnChange}
                name='email'
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="lelil31955@nrlord.com"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-200"
              />
            </div>

            {/* Seller Contact */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="sellerContact">Seller Contact</label>
              <input
                onChange={handleOnChange}
                name='seller_contact'
                type="tel"
                placeholder="e.g. +1-555-1234"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Seller Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="sellerImage">Seller Image URL</label>
              <input
                onChange={handleOnChange}
                defaultValue={user?.photoURL}
                disabled
                name='seller_image'
                type="url"
                placeholder="https://..."
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-200"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="location">Location</label>
              <input
                onChange={handleOnChange}
                name='location'
                type="text"
                placeholder="City, Country"
                className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700" htmlFor="description">Simple Description about your Product</label>
              <textarea
                onChange={handleOnChange}
                name='description'
                rows={4}
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              className="w-full rounded-xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-center text-white shadow-lg transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-fuchsia-200 cursor-pointer"
            >
              Create A Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProducts