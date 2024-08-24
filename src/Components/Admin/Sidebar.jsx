import { BsFillTrash2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto rounded-r-2xl transition duration-300 transform bg-green-400 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <div className="w-20 ">
            <img src={Logo} onDoubleClick={handleDoubleClick} alt="" />
          </div>

        </div>

        <nav className="mt-10">
          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent"
            to="/admin"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <span className="mx-3 text-black">Dashboard</span>
          </Link>

          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/users"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m0 0H9m4 0H5m4 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
              />
            </svg>
            <span className="mx-3 text-black">Users List</span>
          </Link>

          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/AgentProductList"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m0 0H9m4 0H5m4 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
              />
            </svg>
            <span className="mx-3 text-black">Company List</span>
          </Link>

          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/add"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="mx-3 text-black">Add Products</span>
          </Link>
          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/adminProduct"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="mx-3 text-black">Products</span>
          </Link>

          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/Agentproductadd"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="mx-3 text-black"> Add Company products</span>
          </Link>

          <Link
            className="flex items-center px-6 py-2 mt-4 text-green-500 bg-transparent hover:bg-green-500 hover:text-black"
            to="/admin/Agentproducts"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span className="mx-3 text-black"> Company products</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
