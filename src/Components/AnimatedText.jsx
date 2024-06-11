import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lorry from "../assets/Lorry.png";
import GifImage from "../assets/GifImage.gif";

const AnimatedText = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      pRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <>
      <div className="w-full sm:w-[70%] h-full flex flex-col items-center justify-start text-center pt-3">
        <img src={Lorry} alt="" />
        <div className="flex w-[70%] flex-col items-center justify-center gap-10">
          <h1 ref={h1Ref} className="sm:text-6xl">
            Welcome to ECO SCRAP
          </h1>
          <p ref={pRef}>Sell, what you don't need</p>
          <p className="font-rye">
            We're dedicated to turning waste into valuable resources, all while
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
