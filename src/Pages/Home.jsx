import Section1 from "../Components/Section1";
import AnimatedText from "../Components/AnimatedText";
import Banner from "../Components/Carousel";



function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white  flex flex-col sm:flex-row mt-2 ">
        <AnimatedText />
        <div className="w-full sm:w-[30%] h-full flex flex-col items-center justify-center">
          <Banner />
        </div>
      </div>
      <Section1 />
    </>
  )
}

export default Home
