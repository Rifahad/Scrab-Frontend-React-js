import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from '../Layout/AdminLayout'
import Dashbord from '../Pages/Admin/Dashbord'
import ProductList from '../Pages/Admin/ProductList'
import UserList from '../Pages/Admin/UserList'
import CardForm from '../Pages/Admin/CardFom'

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashbord />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/Users' element={<UserList />} />
        <Route path='/edit' element={<CardForm />} />

      </Route>
    </Routes>
  )
}

export default AdminRouter