export default function Description() {
  return (
    <>
      <section className="relative bg-gray-primary pt-24 pb-10 overflow-hidden">
        {/* <img
          className="absolute bottom-0 left-0"
          src="images/background/lines.svg"
          alt=""
          style={{zIndex:"1"}}
        /> */}
        {/* <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-8 mt-5">About us</h1>
            <p className="text-2xl text-black font-medium mb-5">
            Inofix Studio adalah mitra solusi digital yang inovatif, profesional, dan terpercaya di bawah naungan PT Inti Teknologi Berdikari. Kami mengedepankan inovasi dalam setiap langkah, menyempurnakan setiap detail solusi, serta menjadikan kolaborasi dengan klien sebagai fondasi utama untuk menciptakan hasil yang relevan, efektif, dan berkelanjutan.
            </p>
            <p className="text-2xl text-black font-medium mb-10">
            Dengan dukungan tim yang kreatif, profesional, dan berpengalaman, Anda tidak hanya mendapatkan layanan digital, tetapi juga kemitraan yang dapat diandalkan dalam perjalanan transformasi bisnis jangka panjang.
            </p>

          </div>
        </div> */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-5 items-center">
            <div className="w-full md:w-1/3 px-4">
              <div className="lg:max-w-lg">
                <img
                  className="block w-full lg:max-w-md h-full"
                  src="images/about/image-right-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-5xl sm:text-6xl mb-8 mt-5 text-primary">
                  About us
                </h1>
              </div>
              <p className="text-xl text-primary mb-10">
              Kami adalah mitra solusi digital yang inovatif, profesional, dan terpercaya di bawah naungan PT Inti Teknologi Berdikari. Kami mengedepankan inovasi di setiap langkah, menyempurnakan setiap detail solusi, dan menjadikan kolaborasi dengan klien sebagai fondasi utama untuk menciptakan hasil yang relevan, efektif, dan berkelanjutan. Dengan dukungan tim kreatif, profesional, dan berpengalaman, Anda tidak hanya mendapatkan layanan digital, tetapi juga kemitraan yang dapat diandalkan dalam perjalanan transformasi bisnis jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-18 bg-gradient-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-5">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <div>
                <h1 className="font-heading text-6xl text-white">INTEB</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:max-w-lg md:ml-auto">
                <p className="text-xl font-medium text-gray-50 mb-10">
                  PT. Inti Teknologi Berdikari adalah perusahaan berbasis IT
                  yang berfokus pada jasa pengembangan perangkat lunak berbasis
                  website dan aplikasi. Dengan menggabungkan teknologi,
                  kreativitas, dan profesionalisme, kami berkomitmen untuk
                  menghadirkan solusi digital yang tidak hanya fungsional,
                  tetapi juga memberikan nilai strategis bagi pertumbuhan
                  bisnis.
                </p>
              </div>
            </div>
          </div>
          <img
            className="rounded-3xl w-full object-cover"
            style={{ height: "540px" }}
            src="https://html-frequencii-full.vercel.app/frequencii-assets/careers/image-careers-people1.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
