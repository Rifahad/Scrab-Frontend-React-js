import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../Instance/Instance"

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
      const response = await Axios.post("/existingagent", {
        number: existingAgent.number,
      });
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
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      // Optionally handle error state or display error messages
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number" && value.length <= 13) {
      setExisting({ ...existingAgent, [name]: value });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Existing users can login using phone number
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={existing}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="number"
                name="number"
                type="number"
                autoComplete="off"
                required
                onChange={handleChange}
                value={existingAgent.number}
                ref={inputRef}
                className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExistingAgent;
