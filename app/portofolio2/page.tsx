import Image from "next/image";
export default function Portofolio2() {
  return (
    <>
      <section className="bg-gray-primary pb-12 pt-52 lg:pb-24 relative overflow-hidden">
        <Image width={100} height={100}
          className="absolute top-0 left-0 w-full"
          src="/quantam-assets/career/lines-horizontal-waves-bg.png"
          alt=""
        />
        <div className="container mx-auto px-4 relative">
          <Image width={100} height={100}
            className="absolute top-0 left-0 mt-36 md:mt-24"
            src="/images/tech/tech-float-1.png"
            alt=""
          />
          <Image width={100} height={100}
            className="absolute top-0 left-0 md:ml-10 lg:ml-32 -mt-24 sm:-mt-16"
            src="/images/tech/tech-float-2.png"
            alt=""
          />
          <Image width={100} height={100}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-32"
            src="/images/tech/tech-float-3.png"
            alt=""
          />
          <Image width={100} height={100}
            className="absolute top-0 right-0 -mt-24 sm:-mt-10 md:-mr-10 lg:-mr-0"
            src="/images/tech/tech-float-4.png"
            alt=""
          />
          <Image width={100} height={100}
            className="absolute top-0 right-0 mt-36 md:mt-24 lg:mr-32"
            src="/images/tech/tech-float-5.png"
            alt=""
          />
          <div className="text-center mb-32  z-99999">
            <h1 className="text-primary font-heading text-xl sm:text-2xl md:text-2xl tracking-sm mb-1">
              Portofolio Kami
            </h1>
            <h2 className="text-primary font-heading text-3xl sm:text-6xl md:text-7xl tracking-sm mb-3">
              Landing Pages Startup
            </h2>
            {/* <p className="text-lg text-gray-700">
              Sistem ini di buat guna pemantauan tanaman jagung secara berkala
            </p> */}
          </div>

          <div className="pt-12 pb-12 px-5 xs:px-8 xl:px-12 -bg-gradient rounded-3xl">
            <div className="container mx-auto px-1">
              <div className="flex mb-4 items-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
                </svg>
                <span className="text-primary inline-block ml-2 text-sm font-medium">
                  Over View
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {/* Kartu 1 - Lebar 2 kolom */}
                <div className="md:col-span-2 bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Solusi Digital untuk Pertanian yang Lebih Maju
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Kami membantu perusahaan pertanian menghadirkan informasi,
                      produk, dan layanan secara online, sehingga dapat
                      menjangkau petani, distributor, dan konsumen dengan lebih
                      efektif.
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                    <Image width={400} height={300}
                      src="/images/portofolio/kk1.png"
                      className="h-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 2 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Akses Informasi Lebih Cepat
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Memudahkan pengunjung menemukan informasi produk dan
                      layanan yang disediakan
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/kk2.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 3 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Panduan Bertani Digital
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Panduan produk dari penanaman jagung hingga panen, mudah
                      diakses di semua perangkat.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/kk3.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 4 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Perjalanan Perusahaan
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Perjalanan dan komitmen untuk mendukung pertanian,
                      berkembang dengan inovasi dan solusi.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/kk4.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 5 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Kontak yang Efisien
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Memudahkan calon mitra dan pelanggan menghubungi
                      perusahaan melalui form online kapan saja dimana saja tanpa batasan
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/kk5.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-teal-900 border-opacity-25 pt-14">
                <h1 className="text-primary font-heading text-4xl sm:text-6xl mb-24">
                  Membangun Solusi digital yang kuat
                </h1>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full sm:w-1/2 px-4 mb-5">
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-world-code"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
                          <path d="M3.6 9h16.8" />
                          <path d="M3.6 15h9.9" />
                          <path d="M11.5 3a17 17 0 0 0 0 18" />
                          <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
                          <path d="M20 21l2 -2l-2 -2" />
                          <path d="M17 17l-2 2l2 2" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Menghubungkan Petani dan Teknologi
                        </h5>
                        <p className="mb-6">
                          Dengan desain yang modern, landing page ini menjadi
                          jembatan antara petani, teknologi, dan pasar.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-4 mb-5">
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 21l18 0" />
                          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                          <path d="M5 21l0 -10.15" />
                          <path d="M19 21l0 -10.15" />
                          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Meningkatkan Jangkauan Pasar
                        </h5>
                        <p className="mb-6">
                          Memperluas jangkauan pemasaran produk pertanian jagung
                          hingga ke skala nasional bahkan internasional.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-4 mb-5">
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-recycle"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 17l-2 2l2 2" />
                          <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
                          <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
                          <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
                          <path d="M15.464 11l2.732 .732l.732 -2.732" />
                          <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Mendorong Pertanian Berkelanjutan
                        </h5>
                        <p className="mb-6">
                          Menyediakan informasi dan edukasi yang mendorong
                          penerapan teknik pertanian ramah lingkungan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-4">
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-versions"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                          <path d="M7 7l0 10" />
                          <path d="M4 8l0 8" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Desain Responsif dan Cepat
                        </h5>
                        <p className="mb-6">
                          Dapat diakses dengan lancar dari perangkat apa pun,
                          baik smartphone, tablet, maupun desktop.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
