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
              How We Handle Your Information and Provide Value
            </div>

            <p className="mt-4 leading-7 text-slate-300 text-center">
              We prioritize your privacy by securely handling and storing your
              information, ensuring that your data is protected from <br />
              unauthorized access.
            </p>
            <p className="mt-4 leading-7 text-slate-300 text-center">
              We use your information to tailor our services to your needs,
              providing relevant offers and ensuring a smooth and efficient user{" "}
              <br />
              experience.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 bg-white">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h2 className="text-3xl font-bold pt-8 text-primary text-center sm:text-start">
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
                <div className="card zero-waste-card rounded-lg h-full bg-primary text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">Why</h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-primary">
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
                <div className="card zero-waste-card rounded-lg h-full bg-primary text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">
                            Benefits
                          </h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-primary">
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
                <div className="card zero-waste-card rounded-lg h-full bg-primary text-white">
                  <div className="card-body">
                    <div className="flex flex-col">
                      <div className="p-6 p-lg-3">
                        <div className="flex items-center">
                          <h4 className="flex-grow text-lg font-bold">
                            Our Solution
                          </h4>
                          <div className="flex-row px-7 py-5 flex items-center justify-center title-lg rounded-full bg-white text-primary">
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
            How We Approach and What We Provide
            </div>
            <p className="mt-4 leading-7 text-slate-300 text-center">
               Our approach is centered on
              delivering consistent value and exceptional service tailored to
              your needs. We believe in continuous improvement and are committed <br/>
              to enhancing our services based on your feedback. You can rely on
              us for timely and efficient scrap collection, with guaranteed <br />
              pickups within two to six days. We also provide real-time tracking
              so you can stay informed every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
