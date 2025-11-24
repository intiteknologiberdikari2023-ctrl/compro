"use client";
import { useState } from "react";
import Image from "next/image";
type AccordionItem = {
  title: string;
  content: string;
};

const accordionData: AccordionItem[] = [
  {
    title: "Menjaga Kredibilitas ",
    content:
      "Menjalankan bisnis dengan menjunjung tinggi kejujuran, transparansi, dan konsistensi sebagai dasar kepercayaan klien dan mitra.",
  },
  {
    title: "Solutif & Inovatif",
    content:
      "Menghadirkan solusi teknologi yang kreatif, relevan, dan efektif untuk menjawab tantangan bisnis di era digital.",
  },
  {
    title: "Memperluas Jaringan",
    content:
      "Membangun kemitraan strategis dan memperluas kolaborasi untuk mendukung pertumbuhan perusahaan dan klien.",
  },
  {
    title: "Layanan Berkualitas",
    content:
      "Memberikan pelayanan terbaik yang berorientasi pada kepuasan klien dengan standar profesionalisme tinggi.",
  },
];

export default function Value() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <section className="relative bg-gray-primary py-12 lg:py-24">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-lg">
                  <p className="text-2xl font-medium mb-20">
                  Kami berkomitmen menjaga kepercayaan dengan transparansi, konsistensi, dan profesionalisme dalam setiap langkah.
                  </p>
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer mb-8 ${
                        openIndex === index ? "text-black" : "text-gray-500"
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="relative">
                        <div className="inline-block relative">
                          <h4 className="text-5xl">{item.title}</h4>
                          {openIndex === index && (
                            <div className="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100" />
                          )}
                        </div>
                      </div>
                      <div
                        className={`transition-all overflow-hidden pr-5 mt-6 duration-300 ${
                          openIndex === index
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-lg text-gray-600 mt-4 mb-6">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <Image width={200} height={50}
                  className="block w-full lg:max-w-md  lg:ml-auto"
                  src="/images/about/image-right.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
