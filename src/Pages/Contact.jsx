import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(true);

  const handleFormSubmit = async () => {
    const formattedMessage = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Send me a copy: ${sendCopy ? "Yes" : "No"}
    `;

    const whatsappNumber = "+91 8137869563"; // Replace with the desired WhatsApp number
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS proxy service URL

    try {
      const response = await fetch(
        `${proxyUrl}https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
          formattedMessage
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Message sent successfully");
        // You can add additional logic here, such as clearing the form fields or showing a success message
      } else {
        console.error("Failed to send message");
        // You can add error handling logic here
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // You can add error handling logic here
    }
  };

  return (
    <section className="mb-32">
      <div className="relative h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5378.907779194857!2d75.3286355715732!3d11.93137708212857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4170008109f93%3A0xdec77be2f45ce683!2sTKM%20Eco%20scrap!5e0!3m2!1sen!2sin!4v1724926595750!5m2!1sen!2sin"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              >
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                    id="exampleInput90"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                    id="exampleInput91"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="mb-6 w-full rounded bg-primary text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-[#8cdfa1] p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Technical support</p>
                      <p className="text-sm text-neutral-500">
                        mubeentkm7@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">+91 8137869563</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-[#8cdfa1] p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-7 w-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Sales questions</p>
                      <p className="text-sm text-neutral-500">
                      mubeentkm7@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">+91 8137869563</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-full xl:w-6/12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-[#8cdfa1] p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3h16.5M12 3v18"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Content info</p>
                      <p className="text-sm text-neutral-500">
                      mubeentkm7@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">+91 8137869563</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
