import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GarbageMan from '../assets/Lorry.png'

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
    <div className="w-full sm:w-[70%] h-full flex flex-col items-center justify-start text-center pt-3 pb-4">
        <img src={GarbageMan} alt="" />
      <div className="flex w-[70%] flex-col items-center justify-center gap-10">
        <h1 ref={h1Ref} className="sm:text-6xl">
          Welcome to PMK
        </h1>
        <p ref={pRef}>Sell, what you don't need</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          adipisci hic assumenda, ea veniam neque nam doloribus. Facilis
          cupiditate quam culpa sunt sint iure. Velit eius beatae possimus
          adipisci animi.
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
