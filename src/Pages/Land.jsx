
import { Link } from "react-router-dom";

const Land = () => {
  return (
    <div className="w-full h-screen bg-transparent flex flex-col  ">
      <div className="w-full h-[45%]"></div>
      <div className="w-full h-[65%]  flex justify-center gap-8">
        <Link to={'/home'} className="w-44 h-44  md:w-96 md:h-96 shadow-inner shadow-green-500 flex flex-col items-center justify-center">
         <div className="w-[80%] h-[80%] rounded-full shadow-inner shadow-green-500 flex items-center justify-center ">
            home Icon
          </div>
          <h1>Home Page </h1>
        </Link>
        <Link to={'/agent-form'} className="w-44 h-44  md:w-96 md:h-96 shadow-inner shadow-green-500 flex flex-col items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full shadow-inner shadow-green-500 flex items-center justify-center ">
            Company Icon
          </div>
          <h1>Company Page </h1>
          </Link>
          </div>
    </div>
  );
};

export default Land;
