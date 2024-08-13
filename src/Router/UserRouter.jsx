import { Route, Routes } from 'react-router-dom'

import UserLayout from '../Layout/UserLayout'
import Home from '../Pages/Home'
import Pickup from '../Pages/Pickup'
import Products from '../Pages/Products'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Land from '../Pages/Land'
import AgentForm from '../Pages/Agent/AgentForm'
import ExistingAgent from '../Pages/Agent/ExistingAgent'
import Agentproductlist from "../Pages/Agentproduct"

function UserRouter() {
  return (
    <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/agent-form" element={<AgentForm />} />
        <Route path='/existingagent' element={<ExistingAgent/>}/>
<Route  path='/companyproducts' element={<Agentproductlist/>}/>
        
     <Route path="/" element={<UserLayout />} >
        <Route path="/home" element={<Home />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default UserRouter