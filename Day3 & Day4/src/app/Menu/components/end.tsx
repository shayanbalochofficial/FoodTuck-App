import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  const partners = [
    { id: 1, imgSrc: "/image1.png", alt: "Restaurant Logo" },
    { id: 2, imgSrc: "/image2.png", alt: "Bakery Logo" },
    { id: 3, imgSrc: "/image3.png", alt: "Fork & Spoon Logo" },
    { id: 4, imgSrc: "/image4.png", alt: "Wolf Coffee Logo" },
    { id: 5, imgSrc: "/image5.png", alt: "Bistro Logo" },
    { id: 6, imgSrc: "/image6.png", alt: "Sugar Bakery Logo" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 text-center">
        <h4 className="text-gray-500 uppercase tracking-widest font-medium">
          Partners & Clients
        </h4>
        <h2 className="text-3xl font-semibold text-gray-800 mt-2">
          We work with the best people
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <Image
                src={partner.imgSrc}
                alt={partner.alt}
                      className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                      width={55}
                      height={55}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
