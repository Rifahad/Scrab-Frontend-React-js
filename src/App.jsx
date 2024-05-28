import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import UserLayout from "./Layout/UserLayout";
import Pickup from "./Pages/Pickup";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
