
const SignUp = () => {
  return (
    <div className=" demo w-full h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-sm bg-transparent rounded-[40px] p-6 border-4 border-white shadow-lg mx-5 mt-5">
        <div className="text-center font-black text-2xl text-green-500">
          Sign Up
        </div>
        <form action="" className="mt-5">
          <input
            required
            className="w-full bg-white border-none p-4 rounded-[20px] mt-4 shadow-sm shadow-green-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            type="email"
            name="email"
            id="email"
            placeholder="Username / E-mail"
          />
          <input
            required
            className="w-full bg-white border-none p-4 rounded-[20px] mt-4 shadow-sm shadow-green-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 placeholder-gray-400"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className="block mt-2 ml-2">
            <a href="#" className="text-xs text-green-500 no-underline">
              Forgot Password ?
            </a>
          </span>
          <input
            className="block w-full font-bold bg-gradient-to-r from-green-500 to-green-500 text-white py-4 mt-5 rounded-[20px] shadow-lg border-none transform transition-transform duration-200 hover:scale-105 active:scale-95"
            type="submit"
            value="Sign In"
          />
        </form>
        <div className="mt-6">
          <span className="block text-center text-xs text-gray-400">
            Or Sign in with
          </span>
        
        </div>
        <span className="block text-center mt-4">
          <a href="/sign-in" className="no-underline text-green-500 text-[9px]">
            If already have an account, Click here
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
