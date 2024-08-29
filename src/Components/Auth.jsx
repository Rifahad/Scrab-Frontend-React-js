import { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    setAuth(true);
                } else {
                    setAuth(false);
                    navigate('/admin/login');
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
            }
        };

        checkAuth();

        // Optionally, you can return a cleanup function if needed
        return () => {
            // Cleanup logic if necessary
        };
    }, [navigate]); // Added `navigate` to dependencies to follow best practices

    return auth ? <Outlet /> : null;
};

export default Auth;
