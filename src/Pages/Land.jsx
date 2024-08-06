import BoxImage from "../assets/img/Box.png";
import Logo from "../assets/img/Logo.png";
import Footer from "../Components/Footer";
import Work1 from "../assets/img/work1.png";
import Work2 from "../assets/img/work2.png";
import Work3 from "../assets/img/work3.png";
import Work4 from "../assets/img/work4.png";
import Work5 from "../assets/img/work5.png";
import Work6 from "../assets/img/work6.png";

import Feature1 from "../assets/img/feature1.png";
import Feature2 from "../assets/img/feature2.png";
import Feature3 from "../assets/img/feature3.png";
import Feature4 from "../assets/img/feature4.png";



const Land = () => {
  return (
    <>
      <header>
        <nav className="z-10 w-full absolute">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <a
                  href="/home"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <img src={Logo} alt="" className="w-24" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    EcoScrap
                  </span>
                </a>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"
              ></div>
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                        lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                        peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none"
              >
                <div className="text-gray-600 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                    <li>
                      <a
                        href="#Agent"
                        className="block md:px-4 transition hover:text-primary"
                      >
                        <span>Agent</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home"
                        className="block md:px-4 transition hover:text-primary"
                      >
                        <span>User</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/help"
                        className="block md:px-4 transition hover:text-primary"
                      >
                        <span>Help</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="block md:px-4 transition hover:text-primary"
                      >
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 lg:mt-0">
                  <a
                    href="/pickup"
                    className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-sm font-semibold text-white">
                      Directly Pick Up
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*
        <style jsx>{`
          #toggle_nav:checked ~ div #hamburger #line {
            transform: rotate(45deg) translateY(6px);
          }
          #toggle_nav:checked ~ div #hamburger #line2 {
            transform: rotate(-45deg) translateY(-4px);
          }
        `}</style> */}
      </header>

      {/* hero section  */}

      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">
                Turning Your Scrap into Cash
                <span className="text-primary"> at Home.</span>
              </h1>
              <p className="mt-8 text-gray-700">
                Turn your scrap into cash with our home collection service. We
                pick up, pay instantly, and recycle responsibly. Enjoy
                hassle-free recycling from the comfort of your home schedule
                your pickup today.
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Get started
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary">
                    Learn more
                  </span>
                </a>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700">
                    The Best Value
                  </h6>
                  <p className="mt-2 text-gray-500">Get fair compensation for your <br/> scrap with our competitive rates.</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700">
                  Fastest Service
                  </h6>
                  <p className="mt-2 text-gray-500">Quick and efficient home pickups <br/> for hassle-free recycling.</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700">
                  Most Trusted
                  </h6>
                  <p className="mt-2 text-gray-500">Join many satisfied customers who <br/> rely on our reliable service.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work1}
                  className="h-16 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work2}
                  className="h-16 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work3}
                  className="h-16 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work4}
                  className="h-16 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work5}
                  className="h-16 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src={Work6}
                  className="h-16 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <div id="solution">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 md:mt-44">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
              clipRule="evenodd"
            />
          </svg>

          <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src={BoxImage}
                alt="image"
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How We Handle Your Information and Provide Value
              </h2>
              <p className="my-8 text-gray-600">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia. <br /> <br /> Vitae error, quaerat
                officia delectus voluptatibus explicabo quo pariatur impedit, at
                reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur
                asperiores eum amet.
              </p>
              <div className="divide-y space-y-4 divide-gray-100">
                <div className="mt-8 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-indigo-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700">
                      Chat Anytime
                    </h4>
                    <p className="text-gray-500">
                      Asperiores nemo possimus nesciunt quam mollitia.
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex gap-4 md:items-center">
                  <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 m-auto text-teal-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-5/6">
                    <h4 className="font-semibold text-lg text-gray-700">
                      Real Time Location
                    </h4>
                    <p className="text-gray-500">
                      Asperiores nemo possimus nesciunt quam mollitia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd section  */}
      <div id="features">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 md:mt-36">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="my-8 text-2xl font-bold text-gray-700 md:text-4xl">
              A technology-first approach to payments and finance
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
              ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
              minima aspernatur, quidem nulla cupiditate nam consequatur
              eligendi magni adipisci.
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={Feature1}
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                    First feature
                  </h5>
                  <p className="text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-secondary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={Feature2}
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                    Second feature
                  </h5>
                  <p className="text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-secondary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={Feature3}
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                    Third feature
                  </h5>
                  <p className="text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-secondary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white">
                <img
                  src={Feature4}
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                    More features
                  </h5>
                  <p className="text-gray-600">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-secondary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Section */}
      <div id="Agent" className="relative py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative">
            <div className="flex items-center justify-center -space-x-2">
              <img
                loading="lazy"
                width="800"
                height="800"
                src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.webp"
                alt="member photo"
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
              <h1 className="text-center text-4xl font-bold text-gray-800 md:text-5xl">
                Agent Or Entrepreneur
              </h1>
              <p className="text-center text-xl text-gray-600">
                Be a part to Contribute and work together.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/agent-form"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Click Here
                  </span>
                </a>
                <a
                  href="#"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary">
                    Help
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer here */}
      <Footer />
    </>
  );
};

export default Land;
