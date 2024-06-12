import React from "react";
import {  Route, Routes } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Dashbord from "../Pages/Admin/Dashbord";
import ProductList from "../Pages/Admin/ProductList";
import UserList from "../Pages/Admin/UserList";
import CardForm from "../Pages/Admin/CardFom";
import Editproduct from "../Components/Admin/Editform";
function AdminRouter() {
  return (
  
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="/adminProduct" element={<ProductList />} />
          <Route path="/Users" element={<UserList />} />
          <Route path="/add" element={<CardForm />} />
          <Route path="/editProduct/" element={<Editproduct />} />
        </Route>
      </Routes>

  );
}

export default AdminRouter;
