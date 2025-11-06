import React, { useContext, useEffect, useState } from 'react'
import { AuthContex } from '../../contex/ContexProvider';
import Swal from 'sweetalert2';

const MyBids = () => {
  const { user } = useContext(AuthContex)
  const userEmail = user?.email;
  const [bids, setBids] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/bids?email=${userEmail}`)
      .then(res => res.json())
      .then(data => setBids(data))
  }, [userEmail])
  const handleRemove = (id) => {
    fetch(`http://localhost:3000/bids/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          const index = bids.findIndex(item => item._id == id)
          bids.splice(index, 1)
          setBids([...bids])
          Swal.fire({
            title: "Bid Removed",
            icon: 'warning'
          })
        }
      })
  }
  return (
    <>
      <div className="my-20">
        <div className="container">
          <h2 className='font-bold text-center text-3xl lg:text-3xl mb-10'>My Bids: <span className='bg-gr bg-clip-text text-transparent'>{bids.length}</span></h2>

          <div className="w-full">
            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-lg shadow overflow-hidden border border-gray-300">
              <table className="w-full ">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">SL No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Seller</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Bid Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bids.map((bid, ind) => (
                    <tr key={bid._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{ind + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-300 rounded overflow-hidden">
                            <img className='w-full h-full object-cover' src={bid?.image} alt="" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{bid.title}</div>
                            <div className="text-sm text-gray-500">${bid.price_max}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                            <img src={'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' || bid.seller_image} alt={bid.seller_name} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{bid.seller_name}</div>
                            <div className="text-sm text-gray-500">{bid?.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">${bid.bid_price}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-gray-900">
                          {bid.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleRemove(bid._id)} className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors cursor-pointer">
                          Remove Bid
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tablet View */}
            {/* <div className="hidden md:block lg:hidden space-y-4">
              {bids.map((bid) => (
                <div key={bid.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-semibold text-gray-700">#{bid.id}</div>
                      <div className="w-16 h-16 bg-gray-300 rounded"></div>
                      <div>
                        <div className="text-base font-medium text-gray-900">{bid.product}</div>
                        <div className="text-sm text-gray-500">{bid.price}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-gray-900">
                      {bid.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Seller</div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{bid.seller}</div>
                          <div className="text-xs text-gray-500">{bid.email}</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Bid Price</div>
                      <div className="text-base font-medium text-gray-900">{bid.bidPrice}</div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors">
                    Remove Bid
                  </button>
                </div>
              ))}
            </div> */}

            {/* Mobile View */}
            {/* <div className="md:hidden space-y-4">
              {bids.map((bid) => (
                <div key={bid.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-base font-semibold text-gray-700">#{bid.id}</div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-400 text-gray-900">
                      {bid.status}
                    </span>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-1">{bid.product}</div>
                      <div className="text-sm text-gray-500 mb-2">{bid.price}</div>
                      <div className="text-base font-medium text-gray-900">Bid: {bid.bidPrice}</div>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Seller</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900">{bid.seller}</div>
                        <div className="text-xs text-gray-500 truncate">{bid.email}</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors">
                    Remove Bid
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBids