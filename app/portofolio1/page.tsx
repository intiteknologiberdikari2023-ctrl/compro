import Image from "next/image";
export default function Portofolio1() {
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
            <h1 className="font-heading text-primary text-xl sm:text-2xl md:text-2xl tracking-sm mb-1">
              Portofolio Kami
            </h1>
            <h2 className="font-heading text-primary text-3xl sm:text-6xl md:text-7xl tracking-sm mb-3">
              Sistem Pemantauan Pertanian
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
                <span className="inline-block text-primary ml-2 text-sm font-medium">
                  Over View
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                {/* Kartu 1 - Lebar 2 kolom */}
                <div className="md:col-span-2 bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Pemantauan Lahan Pertanian dalam Genggaman
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Sistem ini dirancang untuk memudahkan petani memantau
                      pekembangan, Ph tanah, dan kondisi tanaman langsung dari
                      perangkat digital. Semua data tersaji secara akurat dan
                      mudah dipahami.
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                  <Image width={400} height={300}
                      src="/images/portofolio/pantau1.png"
                      className="h-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 2 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary  text-2xl font-semibold mb-2">
                      Informasi Jumlah Asset yang Dimiliki
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Menampilkan data terkini mulai dari prakiraan cuaca,
                      jumlah lahan, hingga status oprasional kegiatan.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/pantau2.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 3 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Grafik Pertumbuhan Tanaman
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Visualisasi pertumbuhan jagung mulai dari fase awal hingga
                      siap panen.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/pantau3.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 4 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Pemantauan Visual Lahan
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Melihat kondisi tanaman dan lahan tanpa harus selalu
                      berada di lokasi dengan teknologi virtual tour.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/pantau4.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>

                {/* Kartu 5 */}
                <div className="bg-white p-6 rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-primary text-2xl font-semibold mb-2">
                      Pemetaan Lahan Digital
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Lihat peta lahan yang dilengkapi titik pemantauan untuk
                      mengetahui kondisi spesifik di setiap area melalui
                      satelit.
                    </p>
                    <Image width={300} height={700}
                      src="/images/portofolio/pantau5.png"
                      className="h-auto object-contain mx-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-teal-900 border-opacity-25 pt-14">
                <h1 className="text-primary font-heading text-4xl sm:text-6xl mb-24">
                  Inovasi Pemantauan Pertanian Digital
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-chart-cohort"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 9h18v-6h-18v18h6v-18" />
                          <path d="M3 15h12v-12" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Trasparansi Data untuk Keputusan Tepat
                        </h5>
                        <p className="mb-6">
                          Sistem ini menggabungkan data cuaca, tanah, dan
                          tanaman agar petani bisa bertindak lebih cepat dan
                          tepat.
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-clock-shield"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M21 12a9 9 0 1 0 -8.98 9" />
                          <path d="M12 7v5l1 1" />
                          <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                        </svg>
                      </div>
                      <div className="mt-6">
                        <h5 className="text-primary text-2xl font-medium mb-3">
                          Efisiensi Waktu dan Tenaga
                        </h5>
                        <p className="mb-6">
                          Pantau lahan dari jarak jauh dimana saja dan kapan
                          saja, mengurangi kebutuhan kunjungan langsung ke
                          lokasi.
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
                          Dukungan Pertanian Modern
                        </h5>
                        <p className="mb-6">
                          Mendorong penerapan teknologi digital di sektor
                          pertanian untuk hasil yang lebih maksimal dan menambah
                          daya tarik untuk regenerasi petani moderen.
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
                          Mudah Digunakan di Semua Perangkat
                        </h5>
                        <p className="mb-6">
                          Akses sistem dari smartphone, tablet, atau komputer
                          dengan tampilan yang responsif dan intuitif tanpa
                          harus menginstal di device yang di miliki.
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
