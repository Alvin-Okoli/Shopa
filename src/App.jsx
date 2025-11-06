import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Homepage from './HomePage'
import Product from './Product'
import LoadCloth from './loaders/Loader'
import Test from './loaders/test'
import Category from './Category'
import Cart from './Cart'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Nav/>}>
          <Route index element={<Homepage/>}/>
          <Route path='cloth' element={<Product/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App

// loader={<LoadCloth/>}