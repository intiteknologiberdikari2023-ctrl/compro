export default function services() {
  return (
    <>
      <section className="relative py-12 bg-gradient overflow-hidden">
        <img
          className="absolute top-0 right-0"
          src="images\background\waves-right-top.png"
          alt=""
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-5">
            <h1 className="font-heading text-5xl sm:text-6xl tracking-xs text-white mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg text-white opacity-80">
              Kami menawarkan pembuatan website, sistem kustom, dan desain UI/UX
              serta branding digital. Solusi kami membantu bisnis Anda tampil
              profesional dan menjangkau lebih banyak pelanggan.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="group [perspective:1000px] w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="relative w-full h-[400px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-5xl shadow-md py-10 px-5 xs:px-10">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-17 h-17 bg-orange rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-code"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 8l-4 4l4 4" />
                          <path d="M17 8l4 4l-4 4" />
                          <path d="M14 4l-4 16" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-3xl font-bold tracking-tight font-heading max-w-xs">
                        Website & Aplikasi
                      </h4>
                    </div>
                  </div>
                  <span className="block mb-6 text-base lg:text-xl font-medium">
                    Solusi Digital untuk Bisnis Lebih Maju
                  </span>
                  <p className="text-gray-700">
                    Website dan aplikasi berbasis web yang responsif, cepat, dan
                    aman sesuai kebutuhan bisnis Anda.
                  </p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-glass-primary rounded-5xl shadow-md py-10 px-4 flex flex-col justify-center">
                  <div className="p-10 bg-white rounded-5xl">
                    <div className="flex flex-wrap items-center -m-3 mb-5">
                      <div className="flex-1 p-3">
                        <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">
                          Kembangkan Bisnismu
                        </h4>
                      </div>
                    </div>
                    <p className="text-neutral-600 font-medium tracking-tight max-w-sm">
                      Kami membangun website dan aplikasi dengan desain modern,
                      performa tinggi, dan keamanan maksimal. Hadirkan brand
                      Anda secara profesional di dunia digital untuk menjangkau
                      lebih banyak pelanggan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group [perspective:1000px] w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="relative w-full h-[400px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-5xl shadow-md py-10 px-5 xs:px-10">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-17 h-17 bg-orange rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-cog"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
                          <path d="M7 20h5" />
                          <path d="M9 16v4" />
                          <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M19.001 15.5v1.5" />
                          <path d="M19.001 21v1.5" />
                          <path d="M22.032 17.25l-1.299 .75" />
                          <path d="M17.27 20l-1.3 .75" />
                          <path d="M15.97 17.25l1.3 .75" />
                          <path d="M20.733 20l1.3 .75" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-3xl font-bold tracking-tight font-heading max-w-xs">
                        Sistem Kustom
                      </h4>
                    </div>
                  </div>
                  <span className="block mb-6 text-base lg:text-xl font-medium">
                    Optimalkan Bisnis dengan Teknologi
                  </span>
                  <p className="text-gray-700">
                    Sistem menyesuikan proses bisnis anda untuk
                    mempercepat pekerjaan, menghemat biaya, dan memaksimalkan
                    hasil.
                  </p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-glass-primary rounded-5xl shadow-md py-10 px-4 flex flex-col justify-center">
                  <div className="p-10 bg-white rounded-5xl">
                    <div className="flex flex-wrap items-center -m-3 mb-5">
                      <div className="flex-1 p-3">
                        <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">
                          Teknologi Tepat Guna
                        </h4>
                      </div>
                    </div>
                    <p className="text-neutral-600 font-medium tracking-tight max-w-sm">
                      Kami mengembangkan sistem berbasis pendekatan teknologi
                      tepat guna yang dirancang khusus untuk alur kerja bisnis
                      Anda. Otomatisasi proses, kurangi kesalahan, dan
                      tingkatkan bisnis Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group [perspective:1000px] w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="relative w-full h-[400px] duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-5xl shadow-md py-10 px-5 xs:px-10">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-17 h-17 bg-orange rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-palette"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                          <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-3xl font-bold tracking-tight font-heading max-w-xs">
                        Desain & Branding
                      </h4>
                    </div>
                  </div>
                  <span className="block mb-6 text-base lg:text-xl font-medium">
                    Ciptakan Pengalaman & Identitas yang Berkesan
                  </span>
                  <p className="text-gray-700">
                    Desain antarmuka modern dan strategi branding yang membuat
                    bisnis Anda lebih menonjol.
                  </p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-glass-primary rounded-5xl shadow-md py-10 px-4 flex flex-col justify-center">
                  <div className="p-10 bg-white rounded-5xl">
                    <div className="flex flex-wrap items-center -m-3 mb-5">
                      <div className="flex-1 p-3">
                        <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">
                          Perkenalkan Bisnismu
                        </h4>
                      </div>
                    </div>
                    <p className="text-neutral-600 font-medium tracking-tight max-w-sm">
                      Kami merancang pengalaman pengguna yang nyaman dan desain
                      antarmuka yang menyesikan dengan identitas bisnis anda
                      membuat bisnis Anda akan tampil profesional dan mudah
                      dikenali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-glass-primary mt-6 rounded-5xl p-10">
            <div className="flex flex-wrap items-stretch -m-4">
              <div className="w-full md:w-1/3 lg:w-1/2 p-4">
                <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full md:pr-4">
                  <p className="text-white text-center md:text-left text-opacity-50 mb-2">
                    Mengapa Memilih Inofix
                  </p>
                  <p className="text-white text-center md:text-left mx-auto md:mx-0 text-2xl font-semibold ">
                    Solusi digital tepat guna untuk mendukung bisnis berkembang.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full md:pr-4">
                  <p className="text-white text-opacity-50 mb-2 text-center">
                    Tim
                  </p>
                  <p className="text-white text-5xl font-bold text-center">
                    20+
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                <div className="flex flex-col justify-center h-full">
                  <p className="text-white text-opacity-50 mb-2 text-center">
                    Proyek
                  </p>
                  <p className="text-white text-5xl font-bold text-center">
                    10+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
