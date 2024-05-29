import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from '../Layout/AdminLayout'
import Dashbord from '../Pages/Admin/Dashbord'
import UserLayout from '../Layout/UserLayout'
import Home from '../Pages/Home'
import Pickup from '../Pages/Pickup'
import Products from '../Pages/Products'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

function UserRouter() {
  return (
    <Routes>
     <Route path="/" element={<UserLayout />} >
        <Route path="/" element={<Home />} />

        <Route path="/pickup" element={<Pickup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default UserRouter