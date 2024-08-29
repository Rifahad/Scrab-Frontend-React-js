function About() {
  return (
    <>
      <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Welcome to Eco Scrap
            </h2>
            <p className="mb-4">
              We are dedicated to turning waste into valuable resources, all
              while promoting a cleaner, greener planet. Our mission is simple:
              reduce environmental impact through responsible scrap management
              and recycling practices. Partner with us to make a difference
              today!
            </p>
            <p>
            TKM Shop Kannur
            </p>
            <br />
            <p>For Shop Location <a href="https://maps.app.goo.gl/rJXNieoFjhzg53CZ9" className="text-blue-500 font-black">Click Here</a></p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
