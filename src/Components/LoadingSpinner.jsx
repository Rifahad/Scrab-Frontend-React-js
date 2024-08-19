import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container bg-white h-screen flex items-center justify-center gap-4">
      <PuffLoader color={"#16A34A"} loading={true} size={50} />
    </div>
  );
};

export default LoadingSpinner;
