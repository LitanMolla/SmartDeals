import React from 'react'
import { createBrowserRouter } from 'react-router'
import NotFound from '../pages/NotFound/NotFound'
import Root from '../layouts/Root/Root'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import AllProducts from '../pages/AllProducts/AllProducts'
import AddProducts from '../pages/AddProducts/AddProducts'
import MyProducts from '../pages/MyProducts/MyProducts'
import MyBids from '../pages/MyBids/MyBids'
import ProductDetails from '../pages/ProductDetails/ProductDetails'

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        Component: Root,
        children: [
            { index: true, Component: Home, loader: () => fetch('https://smart-server-ruddy.vercel.app/latest') },
            { path: 'login', Component: Login },
            { path: 'register', Component: Register },
            { path: 'all-products', Component: AllProducts },
            { path: 'add-products', Component: AddProducts },
            { path: 'my-products', Component: MyProducts },
            { path: 'my-bids', Component: MyBids },
            { path: 'product-details/:id', Component: ProductDetails, loader: ({ params }) => fetch(`https://smart-server-ruddy.vercel.app/products/${params.id}`) }
        ]
    }
])

export default Router