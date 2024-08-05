import Section1 from "../Components/Section1";
import AnimatedText from "../Components/AnimatedText";
import Plant from "../assets/plant.webp";

function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white  flex flex-col sm:flex-row mt-2 ">
        <AnimatedText />
      </div>
      <Section1 />

      <div className="container mx-auto py-20 min-h-[50vh] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-center sm:text-start">
              What we do with your <span className="text-primary">Waste</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-center sm:text-start ">
              After you sell your dry recyclable waste to us, they are collected
              in The ECO SCRAP&apos;s facility to be segregated, baled and then
              transported to the authorized recyclers to take new forms so as to
              enter back into the economy to achieve circularity.
            </p>
          </div>
          <div className="md:w-1/2 md:max-w-md">
            <div className="block relative group">
              <img
                src={Plant}
                alt="What we do with your waste"
                className="w-full max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
