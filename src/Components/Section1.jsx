import VideoIcon from "../assets/Logo.png";
import Background from "../assets/background1.jpg";
import Garbage from "../assets/trees.png";
import Background2 from "../assets/Background2.jpg";
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

      <div className="container mx-auto py-16 bg-white">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h2 className="text-3xl font-bold pt-8 text-green-600 text-center sm:text-start">
              Zero Waste Societies
            </h2>
            <div className="mt-7 mb-8 me-lg-14 text-lg text-gray-600 text-center sm:text-start">
              With our zero waste management services we help your society to
              turn zero waste by incorporating zero waste practices within its
              residents & stakeholders.
            </div>
          </div>
        </div>
        <div className="pb-8">
          <div className="carousel">
            <div
              className="carousel-container overflow-x-auto flex gap-5 pb-4 w-full no-scrollbar"
              style={{ transform: "translateX(-0px)" }}
            >
              <div className="min-w-[316px] max-w-[375px] me-5">
                <div className="card zero-waste-card rounded-lg h-full bg-green-600 text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">Why</h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-green-600">
                            1
                          </div>
                        </div>
                        <div className="mt-3 text-gray-200">
                          To promote the circular flow of materials to reduce
                          the need for landfill space.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[316px] max-w-[375px] me-5">
                <div className="card zero-waste-card rounded-lg h-full bg-green-600 text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">
                            Benefits
                          </h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-green-600">
                            2
                          </div>
                        </div>
                        <div className="mt-3 text-gray-200">
                          Establishing circular economy benefits in reducing
                          climate impact, conserving resources and minimizing
                          pollution.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-[316px] max-w-[375px] me-5">
                <div className="card zero-waste-card rounded-lg h-full bg-green-600 text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">
                            Our Solution
                          </h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-green-600">
                            3
                          </div>
                        </div>
                        <div className="mt-3 text-gray-200">
                          Our services help you prevent wasteful practices by
                          reducing, reusing, and recycling waste to become a
                          zero waste society.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={Garbage} className="w-40 h-40" />
            </div>
            <div className="carousel-controls"></div>
          </div>
        </div>
      </div>

      <div
        className="min-h-[600px] overflow-hidden bg-cover bg-fixed bg-right bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="w-full h-full flex justify-center mt-[150px]">
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center flex-col">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-white text-center sm:text-start">
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
