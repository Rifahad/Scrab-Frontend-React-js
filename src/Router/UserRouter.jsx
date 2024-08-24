import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserLayout from '../Layout/UserLayout';
import Home from '../Pages/Home';
import Pickup from '../Pages/Pickup';
import Products from '../Pages/Products';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Land from '../Pages/Land';
import AgentForm from '../Pages/Agent/AgentForm';
import LoadingSpinner from '../Components/LoadingSpinner';
import Help from '../Pages/Help';
import Agentproductlist from '../Pages/Agent/Agentproduct'

import AOS from "aos";
import "aos/dist/aos.css";
import ExistingAgent from '../Pages/Agent/ExistingAgent';

function UserRouter() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
        {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/help" element={<Help />} />

          <Route path="/agent-form" element={<AgentForm />} />
          <Route path='/existingagent' element={<ExistingAgent/>}/>
          <Route  path='/companyproducts' element={<Agentproductlist/>}/>


          <Route path="/" element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default UserRouter;
