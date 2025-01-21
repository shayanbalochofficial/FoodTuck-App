import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      image: "/ic-1.svg", // Replace with your image path
      title: "Best Chef",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
    {
      image: "/ic-2.svg", // Replace with your image path
      title: "120 Item Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
    {
      image: "/ic-3.svg", // Replace with your image path
      title: "Clean Environment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full mb-12">
        <div className="relative w-[80%] h-64 md:h-96">
          <Image
            src="/md-pic.png" // Update with your image path
            alt="Centered Full-width Food Image"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Keeps the image proportional
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center space-y-4"
          >
            <div className="relative w-20 h-20">
              <Image
                src={feature.image}
                alt={feature.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
