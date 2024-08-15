import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(true);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleFormSubmit = async () => {
    const formattedMessage = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Send me a copy: ${sendCopy ? "Yes" : "No"}
    `;

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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
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
                    id="nameInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100"
                    id="messageInput"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="relative mb-6">
                  <input
                    type="tel"
                    className="peer block w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                    id="whatsappNumberInput"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="WhatsApp Number"
                  />
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
                        example@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">1-600-890-4567</p>
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
                            d="M15 9h3.75M12 15h6m-6 6h6m-2.25-6v12m2.25 0v2.25m-2.25-2.25V24M3 12v2.25M7.5 6h3m-3 6h3m-3 6h3M9 6h1.5m-1.5 0V4.5m1.5 6V6m0 6v4.5m2.25-6v6"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Sales questions</p>
                      <p className="text-sm text-neutral-500">
                        example@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">1-600-234-5678</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                  <div className="align-start flex">
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
                            d="M18 12.25a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75L18 18"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Accounting help</p>
                      <p className="text-sm text-neutral-500">
                        example@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">1-600-234-5678</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12">
                  <div className="align-start flex">
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
                            d="M6.75 5.25v-3h-1.5v3h-3v1.5h3v3h1.5v-3h3v-1.5h-3zM3.75 15h-.75a2.25 2.25 0 00-2.25 2.25v2.25h12v-2.25A2.25 2.25 0 009.75 15h-.75a2.25 2.25 0 01-2.25-2.25V9.75H3.75v3.75A2.25 2.25 0 011.5 15zm16.5-2.25v-2.25a2.25 2.25 0 012.25-2.25h.75v-3.75H22.5a2.25 2.25 0 00-2.25-2.25h-2.25V1.5H14.25v3h-1.5v-3H10.5V1.5H7.5v3h-.75a2.25 2.25 0 00-2.25 2.25v2.25h2.25v3.75h.75A2.25 2.25 0 0110.5 15v3h-3v2.25A2.25 2.25 0 019.75 22.5h4.5A2.25 2.25 0 0116.5 20.25V18h-3v-3a2.25 2.25 0 012.25-2.25h.75v-3.75H22.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">General inquiries</p>
                      <p className="text-sm text-neutral-500">
                        example@gmail.com
                      </p>
                      <p className="text-sm text-neutral-500">1-600-234-5678</p>
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
  