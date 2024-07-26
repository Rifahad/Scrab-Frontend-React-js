
const Navbar = ({ setSidebarOpen }) => {
    return (
        <header className="flex items-center justify-between px-6 py-8 bg-white border-b-4 border-green-500">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="text-green-500 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
