import Img from "../assets/img/work1.png"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xxSBMZbMYjB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <section className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-5xl font-bold tracking-tighter text-foreground">Get Started with Our Platform</h1>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Discover how our platform can help you streamline your workflows and unlock new possibilities. Follow the
            snake as it navigates through the key features and benefits.
          </p>
          <div className="text-sm text-muted-foreground">Step 1 of 5</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </section>
        <img
          src={Img}
          width="300"
          height="300"
          alt="Snake"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
      </main>
      <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <img
          src={Img}
          width="300"
          height="300"
          alt="Feature 1"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">Streamlined Workflows</h3>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Our platform helps you automate repetitive tasks, collaborate seamlessly, and focus on what matters most -
            delivering value to your customers.
          </p>
          <div className="text-sm text-muted-foreground">Step 2 of 5</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">Scalable Infrastructure</h3>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Easily scale your application with our robust infrastructure, ensuring your platform can handle growing
            demands without compromising performance.
          </p>
          <div className="text-sm text-muted-foreground">Step 3 of 5</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
        <img
          src={Img}
          width="300"
          height="300"
          alt="Feature 2"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
      </section>
      <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <img
          src={Img}
          width="300"
          height="300"
          alt="Feature 3"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">Secure and Compliant</h3>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Protect your data and ensure compliance with our robust security features and industry-leading
            certifications.
          </p>
          <div className="text-sm text-muted-foreground">Step 4 of 5</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">Integrated Collaboration</h3>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Bring your team together with our seamless collaboration tools, enabling real-time communication, code
            reviews, and project management.
          </p>
          <div className="text-sm text-muted-foreground">Step 5 of 5</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
        <img
          src={Img}
          width="300"
          height="300"
          alt="Feature 4"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
      </section>
      <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <img
          src={Img}
          width="300"
          height="300"
          alt="Feature 5"
          className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">Powerful Analytics</h3>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
            Gain valuable insights into your application's performance with our advanced analytics tools, helping you
            make data-driven decisions.
          </p>
          <div className="text-sm text-muted-foreground">Step 6 of 6</div>
          <div className="flex items-center gap-2">
            <span>Next</span>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}