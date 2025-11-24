export default function Hero() {
  return (
    <>
      <div className="relative pt-32 bg-hero pb-20">
        <div className="container mx-auto px-4 relative">
          {/* <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
            <h1 className="pt-18 font-heading text-primary text-3xl xs:text-3xl xl:text-5xl tracking-tight mb-8 font-semibold">
              Membangun Inovasi, Menyempurnakan Solusi
            </h1>
            <p className="text-lg text-gray-700 mb-10">
            INTEB hadir sebagai mitra solusi digital yang inovatif, profesional, dan terpercaya untuk membantu meningkatkan profitabilitas, efisiensi serta daya saing bisnis Anda di era digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
              <a
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-primary hover:bg-primary rounded-full transition duration-200"
                href="/about"
              >
                More about us
              </a>
            </div>
          </div> */}
          <div className="flex flex-wrap -mx-4 mb-5">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
              <h1 className="font-heading text-primary text-3xl sm:text-6xl tracking-sm mb-6 font-bold">Membangun Inovasi, Menyempurnakan Solusi</h1>
              </div>
              <p className="text-xl font-medium text-primary mb-10">
              INTEB hadir sebagai mitra solusi digital yang inovatif, profesional, dan terpercaya untuk membantu meningkatkan profitabilitas, efisiensi serta daya saing bisnis Anda di era digital.
                </p>
                <div className="flex flex-col sm:flex-row ">
              <a
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-primary hover:bg-primary rounded-full transition duration-200"
                href="/about"
              >
                More about us
              </a>
            </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="md:ml-auto">
              <img className="block w-full h-full lg:ml-auto" src="images/hero/hero-right.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
