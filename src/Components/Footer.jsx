
function Footer() {
  return (
    <footer className="bg-white text-black py-8 z-10 border-t-2 border-primary">
      <div className="container mx-auto flex flex-col md:flex-row p-12 sm:py-0">
        {/* Left Side */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          {/* <img src={Logo} alt="Logo" className="h-12 mb-4" /> */}
          <h2 className="text-xl font-rye mb-2">ECO SCRAP</h2>
          <p className="text-gray-400">
          Sell, What you don&apos;t need ..
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} ECOSCRAP. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
