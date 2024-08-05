import Lorry from "../assets/Lorry.png";
import GifImage from "../assets/GifImage.gif";

const AnimatedText = () => {
  return (
    <>
      <div className="w-full sm:w-[70%] h-full flex flex-col items-center justify-start text-center pt-3">
        <img src={Lorry} alt="" />
        <div className="flex w-[70%] flex-col items-center justify-center gap-10">
          <h1  className="sm:text-6xl">
            Welcome to ECO SCRAP
          </h1>
          <p >Sell, what you don&apos;t need</p>
          <p className="font-rye">
            We&apos;re dedicated to turning waste into valuable resources, all while
            promoting a cleaner, greener planet. Our mission is simple: reduce
            environmental impact through responsible scrap management and
            recycling practices. Partner with us to make a difference today!
          </p>
        </div>
      </div>
      <div className="hidden sm:w-[30%] h-full md:flex flex-col items-center justify-start text-center pt-36">
        <img src={GifImage} alt="" />
      </div>
    </>
  );
};

export default AnimatedText;
