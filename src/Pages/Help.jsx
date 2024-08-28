import Img from "../assets/Help/Help1.png";
import Img2 from "../assets/Help/WhatsApp Image 2024-08-24 at 11.21.30_9e84fe2c.jpg";
import Img3 from "../assets/Help/WhatsApp Image 2024-08-24 at 11.21.30_e946c3b2.jpg";
import Img4 from "../assets/Help/WhatsApp Image 2024-08-24 at 11.34.15_f95500e8.jpg";
import Img5 from "../assets/Help/WhatsApp Image 2024-08-24 at 11.34.15_092f4454.jpg";

export default function Component() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <main className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
          <section className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-5xl font-bold tracking-tighter text-foreground">
              Get Started with Our Platform
            </h1>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed font-malayalam">
              ഈ വെബ്സൈറ്റ് ഓൺലൈനായി നിങ്ങളുടെ ഉപയോഗശൂന്യമായ വസ്തുക്കൾ
              വിറ്റഴിക്കാൻ ആണ്. നിങ്ങളുടെ വീട്ടിൽ നിന്ന് ഉപയോഗശൂന്യമായ വസ്തുക്കൾ
              ശേഖരിച്ച് അതിനുള്ള പണം ലഭിക്കാൻ ഈ നടപടികൾ പിന്തുടരുക.
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
            className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-fit"
          />
        </main>
        <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
          <img
            src={Img2}
            width="300"
            height="300"
            alt="Feature 1"
            className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
          />
          <div className="flex flex-col items-start justify-center gap-4">
          
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed font-malayalam">
  'Use Location' ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക, പിന്നെ അത് നിങ്ങളുടെ വിലാസം സ്വയം പൂരിപ്പിക്കും
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
            {/* <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl">
              Scalable Infrastructure
            </h3> */}
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed font-malayalam">
  ദയവായി വിലാസം ശരിയാണോ എന്ന് പരിശോധിക്കുക. തെറ്റാണെങ്കിൽ അത് തിരുത്തുക.
</p>
            <div className="text-sm text-muted-foreground">Step 3 of 5</div>
            <div className="flex items-center gap-2">
              <span>Next</span>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </div>
          <img
            src={Img3}
            width="300"
            height="300"
            alt="Feature 2"
            className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
          />
        </section>
        <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
          <img
            src={Img4}
            width="300"
            height="300"
            alt="Feature 3"
            className="mx-auto aspect-square w-full max-w-[300px] rounded-xl object-cover"
          />
        <div className="flex flex-col items-start justify-center gap-4">
  <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl font-malayalam">
  കമ്പനി സ്ക്രാപ്പ് വിൽപ്പന ഈ ഘട്ടങ്ങൾ പാലിക്കാം  </h3>
  <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed font-malayalam">
  നിങ്ങൾ കാണുന്ന പേജിലെ ബട്ടൺ അമർത്തുക  </p>
  <div className="text-sm text-muted-foreground font-malayalam">നടപടിക്രമം 4/5</div>
  <div className="flex items-center gap-2">
    <span className="font-malayalam">അടുത്തത്</span>
    <ArrowRightIcon className="h-5 w-5" />
  </div>
</div>
        </section>
        <section className="container mx-auto my-24 grid grid-cols-1 gap-24 px-4 md:grid-cols-2 md:gap-32 lg:gap-40">
        <div className="flex flex-col items-start justify-center gap-4">
  <h3 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl font-malayalam">
    അവസാന ഘട്ടം
  </h3>
  <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed font-malayalam">
    ശേഷം 'Submit' ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക. നിങ്ങളുടെ അഭ്യർത്ഥന സമർപ്പിക്കപ്പെടും. ഞങ്ങൾ 2-6 ദിവസത്തിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും.
  </p>
  <div className="text-sm text-muted-foreground font-malayalam">നടപടിക്രമം 5/5</div>
  <div className="flex items-center gap-2">
    <span className="font-malayalam">പൂർത്തിയാക്കുക</span>
    <ArrowRightIcon className="h-5 w-5" />
  </div>
</div>
          <img
            src={Img5}
            width="300"
            height="300"
            alt="Feature 4"
            className="mx-auto aspect-square w-full max-w-[300px] pl-[10px] rounded-xl object-cover"
          />
        </section>
       
      </div>
    </>
  );
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
  );
}
