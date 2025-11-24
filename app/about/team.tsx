'use client';
import { useState } from 'react';

export default function Team() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      text: '“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur fugiat corporis nam.”',
      name: 'Jenny Wilson',
      role: 'CEO',
      image: 'images/team/photo-lg.png',
    },
    {
      text: '“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi magni, possimus similique dignissimos doloribus aut?”',
      name: 'John Jones',
      role: 'CTO',
      image: 'images/team/photo-lg.png',
    },
    {
      text: '“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, provident reiciendis.”',
      name: 'James Harrison',
      role: 'CFO',
      image: 'images/team/photo-lg.png',
    },
  ];

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 lg:pt-16 lg:pb-24 bg-gray-primary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Title */}
        <div className="flex flex-wrap items-center -mx-4 mb-16">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-6">
              Our team
            </h1>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img
              className="block"
              src="images/team/team-members-photos.png"
              alt=""
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    className="block flex-shrink-0 w-full px-4"
                    src={slide.image}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                  className="flex-shrink-0 px-4 w-full text-center md:text-left"
                  key={index}
                >
                  <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                    {slide.text}
                  </h4>
                  <span className="block text-xl font-medium">
                    {slide.name}
                  </span>
                  <span className="block mb-12 lg:mb-32 text-lg text-gray-700">
                    {slide.role}
                  </span>
                </div>
                
                ))}
              </div>

              {/* Navigation */}
              <div className='flex justify-center md:justify-start items-center mt-4'>
                <button
                  className="inline-block mr-4 text-primary hover:text-primary"
                  onClick={prevSlide}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4 16H7.59998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 24.4L7.59998 16L16 7.59998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="inline-block text-primary hover:text-primary"
                  onClick={nextSlide}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.59998 16H24.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7.59998L24.4 16L16 24.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
