import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Homepage from './HomePage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Nav/>}>
          <Route index element={<Homepage/>}/>
          {/* <Route path=':cloth' element={}/> */}
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
