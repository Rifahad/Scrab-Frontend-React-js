import VideoIcon from "../assets/Logo.png";
import Background from "../assets/background1.jpg";
function Section1() {
  return (
    <>
      <div
        className="min-h-[600px] overflow-hidden bg-cover bg-fixed bg-right bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="w-full h-full flex justify-center mt-[150px]">
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center flex-col">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-white">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen sm:h-[600px] w-full bg-white flex flex-col items-center justify-evenly">
        <h1 className="text-4xl sm:text-6xl text-center">
          Features we are providing
        </h1>
        <div className="flex flex-col space-x-14 text-black">
          <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] border-2 rounded-full flex flex-col items-center justify-center gap-2">
            <img src={VideoIcon} className="w-[20%]" alt="" />
            <h3></h3>
          </div>
          <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
            <img src={VideoIcon} className="w-[30%]" alt="" />
            <h3>Live Streaming</h3>
          </div>
          <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
            <img src={VideoIcon} className="w-[30%]" alt="" />
            <h3>Video Calling</h3>
          </div>
          <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
            <img src={VideoIcon} className="w-[30%]" alt="" />
            <h3>Video Calling</h3>
          </div>
        </div>
      </div>
      <div className="min-h-[600px] overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="w-full h-full flex justify-center mt-[150px]">
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center flex-col">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-white">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
