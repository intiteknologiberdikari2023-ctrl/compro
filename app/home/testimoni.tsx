"use client";
import { useState } from 'react';

export default function Testimoni() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "Tim PT Inti Teknologi Berdikari membantu bisnis kami berkembang lebih cepat dengan solusi digital yang inovatif!",
      name: "Andi Santoso",
    },
    {
      text: "Kolaborasi dengan tim ini sangat menyenangkan. Ide kami selalu didengar dan hasilnya tepat sasaran.",
      name: "Rina Widya",
    },
    {
      text: "Layanan mereka membuat proses bisnis kami lebih mudah, efisien, dan terstruktur dengan baik.",
      name: "Budi Hartono",
    }
  ];
  

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gray-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xs sm:max-w-md md:max-w-none mx-auto text-center mb-20">
          <h1 className="font-heading text-primary text-5xl sm:text-6xl tracking-tight mb-6">
          Cerita Nyata dari Pengguna
          </h1>
          <p className="text-gray-700">Dengarkan pengalaman dari mereka yang telah menggunakan layanan kami.</p>
        </div>

        <div className="max-w-md md:max-w-2xl lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between -mx-4">

            {/* Previous Button */}
            <div className="px-4 order-last md:order-first">
              <button
                onClick={prevSlide}
                className="inline-block mr-4 text-primary hover:text-primary"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M24.4 16H7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24.4L7.6 16L16 7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-2/3 lg:w-auto px-4 mb-12 md:mb-0">
              <div className="relative px-6">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full w-full py-8">
                  <div className="h-full bg-gray-50 bg-opacity-70 shadow-md rounded-2xl"></div>
                </div>
                <div className="relative py-12 px-6 md:px-16 text-center bg-white shadow-md rounded-2xl">
                  <div className="max-w-2xl mx-auto transition-all duration-500">
                    <div className="mb-4 inline-block mx-auto">
                      {/* Static 5 Stars SVG */}
                      ⭐⭐⭐⭐⭐
                    </div>
                    <h4 className="text-2xl text-primary lg:text-3xl font-medium mb-10">
                      “{testimonials[activeSlide].text}”
                    </h4>
                    <span className="block text-xl font-medium">{testimonials[activeSlide].name}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="px-4 order-last">
              <button
                onClick={nextSlide}
                className="inline-block text-primary hover:text-primary"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M7.6 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 7.6L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
