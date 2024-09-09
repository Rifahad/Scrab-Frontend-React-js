import { useState, useCallback } from "react";
import Axios from "../../Instance/Instance"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/img/Logo.png";

const AgentForm = () => {
  const navigate = useNavigate();
  const [agentData, setAgentData] = useState({
    companyName: "",
    phone: "",
    tonAmount: 500,
    location: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleFileChange = useCallback((e) => {
    setAgentData((prevData) => ({
      ...prevData,
      scrapImage: e.target.files[0],
    }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setAgentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "tonAmount") {
      validateInput(value);
    }
  }, []);

  const validateInput = (value) => {
    if (value < 500) {
      setError("Please enter more than 500.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (agentData.tonAmount < 500) {
      setError("Please enter more than 500.");
      return;
    }

    const formData = new FormData();
    formData.append("companyName", agentData.companyName);
    formData.append("phone", agentData.phone);
    formData.append("location", agentData.location);
    formData.append("tonAmount", agentData.tonAmount);
    formData.append("message", agentData.message);

    try {
      const response = await Axios.post(
        "/pickupcompany",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.msg === "complete the form please") {
        alert("Please complete the form");
      }

      if (response.status === 200) {
        setAgentData({
          companyName: "",
          phone: "",
          tonAmount: 500,
          location: "",
          message: "",
        });
        navigate("/companyproducts");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div aria-hidden="true" className="flex space-x-1">
              <img src={Logo} alt="" className="w-16" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EcoScrap</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/help" className="hover:underline text-black">
            Help
          </Link>
          <Link to="/ExistingAgent" className="hover:underline text-red-500">
            Existing User
          </Link>
          <Link to="/contact" className="hover:underline text-black">
            Contact Us
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-white py-12 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 opacity-10 animate-gradient-x" />
        <div className="max-w-4xl mx-auto grid gap-8 relative z-10">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-black">
              Share Details About Your Scrap
            </h1>
            <p className="text-black">
              Fill out the form below to get in touch with us.
            </p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="company-name" className="text-black">
                  Company Name
                </label>
                <input
                  id="company-name"
                  name="companyName"
                  value={agentData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="rounded-md shadow-md border-2 border-primary w-full p-3"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone-number" className="text-black">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  name="phone"
                  value={agentData.phone}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d{0,13}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Enter your phone number"
                  className="rounded-md shadow-md border-2 border-primary w-full p-3"
                  maxLength={13}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="text-black">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={agentData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="rounded-md shadow-md border-2 border-primary w-full p-3"
                  maxLength={100}
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <label htmlFor="tonAmount" className="text-black">
                  How Many Tons Do You Have?
                </label>
                <input
                  id="tonAmount"
                  name="tonAmount"
                  value={agentData.tonAmount}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d{0,6}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Enter the amount of scrap"
                  className={`rounded-md shadow-md border-2 border-primary w-full p-3 ${
                    error ? "border-red-500" : ""
                  }`}
                  maxLength={6}
                  required
                />
                {error && (
                  <p className="text-red-500 text-xs italic mt-1 absolute">
                    {error}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={agentData.message}
                onChange={handleChange}
                placeholder="Enter any additional information"
                className="rounded-md shadow-md border-2 border-primary w-full p-3 h-32"
                maxLength={250}
                required
              />
            </div>
            <button
              type="submit"
              className="justify-self-end bg-primary text-white hover:bg-gray-800 rounded-xl shadow-md p-3 px-6"
            >
              Submit
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 text-black">
                Office Location
              </h2>
              <p className="text-black">moonunirath, Kannur</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-black">
                Contact Information
              </h2>
              <p className="text-black flex gap-2">Phone: 813 7869 563</p>
              <p className="text-black">Email: mubeensiraj13@gmail.com</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-black">Follow Us</h2>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/+918137869563">
                  <FaWhatsapp className="text-xl text-black hover:text-gray-800" />
                </a>
                <a href="https://www.instagram.com/mubeen3_07/">
                  <FaInstagram className="text-xl text-black hover:text-gray-800" />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebookF className="text-xl text-black hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-white py-4 px-6 flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Eco Scrap</p>
        <nav className="flex items-center gap-6">
          <Link to="/terms" className="hover:underline text-white">
            Terms
          </Link>
          <Link to="/privacy" className="hover:underline text-white">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default AgentForm;
