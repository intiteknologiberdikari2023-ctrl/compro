export default function Portofolio() {
  return (
    <>
      <section className="bg-gray-primary pb-12 pt-52 lg:pb-24 relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full"
          src="quantam-assets/career/lines-horizontal-waves-bg.png"
          alt=""
        />
        <div className="container mx-auto px-4 relative">
          <img
            className="absolute top-0 left-0 mt-36 md:mt-24"
            src="images/tech/tech-float-1.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 md:ml-10 lg:ml-32 -mt-24 sm:-mt-16"
            src="images/tech/tech-float-2.png"
            alt=""
          />
          <img
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-32"
            src="images/tech/tech-float-3.png"
            alt=""
          />
          <img
            className="absolute top-0 right-0 -mt-24 sm:-mt-10 md:-mr-10 lg:-mr-0"
            src="images/tech/tech-float-4.png"
            alt=""
          />
          <img
            className="absolute top-4 right-0 mt-36 md:mt-24 lg:mr-32"
            src="images/tech/tech-float-5.png"
            alt=""
          />
          <div className="text-center mb-32">
            <h1 className="font-heading text-primary text-3xl sm:text-6xl md:text-7xl tracking-sm mb-6">
              Portofolio Kami
            </h1>
            <p className="text-lg text-gray-700">
              Menampilkan perjalanan ide hingga menjadi karya yang memberikan
              dampak positif bagi klien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Kartu 1 */}
            <div className="relative group bg-white p-6 rounded-5xl h-80 overflow-hidden flex items-center justify-center text-center shadow-lg">
              {/* Teks bergerak ke bawah saat hover */}
              <div className="z-10 bg-glass-primary-15 transform transition-transform duration-500 group-hover:translate-y-20">
                <h4 className="text-xl font-bold text-primary mb-2">
                  Sistem Pemantauan Pertanian
                </h4>
                <p className="text-gray-600">
                Pantau Pertanian Lebih Mudah, Akurat, dan Efisien
                </p>
              </div>

              {/* Gambar muncul dari bawah (desktop saja) */}
              <div className="absolute bottom-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out mx-auto p-2">
                <img src="images/portofolio/pantau2.png" />
              </div>

              {/* Tombol muncul di pojok kanan atas saat hover */}
              <a
                href="/portofolio1"
                className="absolute bg-glass-primary-15 top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 inline-flex items-center gap-2 p-1"
              >
                <span className="text-neutral-600 font-semibold group-hover:text-neutral-800 tracking-tight transition duration-200">
                  Learn more
                </span>
                <div className="w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z"
                      fill="#19191B"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Kartu 2 */}
            <div className="relative group bg-white p-6 rounded-5xl h-80 overflow-hidden flex items-center justify-center text-center shadow-lg">
              {/* Teks bergerak ke bawah saat hover */}
              <div className="z-10 bg-glass-primary-15 transform transition-transform duration-500 group-hover:translate-y-20">
                <h4 className="text-xl font-bold text-primary mb-2">
                  Landing Pages Startup
                </h4>
                <p className="text-gray-600">
                Pantau Pertanian Lebih Mudah, Akurat, dan Efisien
                </p>
              </div>

              {/* Gambar muncul dari bawah (desktop saja) */}
              <div className="absolute bottom-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out mx-auto p-2">
                <img src="images/portofolio/kk2.png" />
              </div>

              {/* Tombol muncul di pojok kanan atas saat hover */}
              <a
                href="/portofolio2"
                className="absolute bg-glass-primary-15 top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 inline-flex items-center gap-2 p-1"
              >
                <span className="text-neutral-600 font-semibold group-hover:text-neutral-800 tracking-tight transition duration-200">
                  Learn more
                </span>
                <div className="w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z"
                      fill="#19191B"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
