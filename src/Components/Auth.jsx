import { jwtDecode } from 'jwt-decode'
import { useEffect,  useState } from "react";
import {Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
    const navigate = useNavigate();
    const [auth,setAuth] = useState(false)
    useEffect(()=>{
        const checkAuth = () =>{
            try {
                const token = localStorage.getItem('token')
                if(token){
                    setAuth(true)
                }else{
                    setAuth(false)
                    navigate('/admin/login')
                }
            } catch (error) {
                console.error(error)
            }
        }
        checkAuth()
        
    },[])
  return auth && <Outlet />;
}

export default Auth
