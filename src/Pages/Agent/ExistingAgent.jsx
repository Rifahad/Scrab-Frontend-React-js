import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ExistingAgent = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null); 
  const [existingAgent, setExisting] = useState({
    number: "",
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const existing = async (e) => {
    e.preventDefault(); 

    try {
      console.log(existingAgent, "number");

      const response = await axios.post("http://localhost:7000/existingagent", {
        number: existingAgent.number,
      });

      console.log(response.data, "backend");

      if (
        response.status === 200 &&
        response.data.message === "Number exists"
      ) {
        navigate("/companyproducts");
      } else if (
        response.status === 202 &&
        response.data.msg === "render agentform"
      ) {
        navigate("/agent-form");
      }else{
        navigate("/");

      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number" && value.length <= 13) {
      setExisting({ ...existingAgent, [name]: value });
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Please type your number</h1>
      <form
        className="bg-green-500 p-4 rounded-md shadow-md"
        onSubmit={existing}
      >
        <input
          onChange={handleChange}
          value={existingAgent.number}
          type="number"
          name="number"
          ref={inputRef} 
          id="number"
          maxLength={13}
          className="w-full p-2 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <button
          className="mt-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ExistingAgent;
