import { Route, Routes } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Dashbord from "../Pages/Admin/Dashbord";
import ProductList from "../Pages/Admin/ProductList";
import UserList from "../Pages/Admin/UserList";
import CardForm from "../Pages/Admin/CardFom";
import Editproduct from "../Components/Admin/Editform";
import Login from "../Pages/Admin/Login";
import Auth from "../Components/Auth";
import AgentProductList from "../Pages/Admin/AgentProductList";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Auth />}>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="/adminProduct" element={<ProductList />} />
          <Route path="/Users" element={<UserList />} />
          <Route path="/add" element={<CardForm />} />
          <Route path="/editProduct/" element={<Editproduct />} />
          <Route path="/AgentProductList" element={<AgentProductList />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRouter;

