import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Components/Admin/Header';
import Sidebar from '../Components/Admin/Sidebar';

function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-200 font-roboto">
            <div 
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} 
                onClick={() => setSidebarOpen(false)} 
            />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white   shadow-inner shadow-green-500">
                    <div className="container mx-auto px-6 py-8 ">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminLayout
