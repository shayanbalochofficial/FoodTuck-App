import Image from "next/image";
import React from "react";
import Link from "next/link";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mark Henry",
      role: "Owner",
      imgSrc: "/ts-p.png", // Updated image source for all members
    },
    {
      name: "Lucky Helen",
      role: "Chef",
      imgSrc: "/ts-p.png", // Updated image source for all members
    },
    {
      name: "Moon Henry",
      role: "Founder",
      imgSrc: "/ts-p.png", // Updated image source for all members
    },
    {
      name: "Tom Morrow",
      role: "Specialist",
      imgSrc: "/ts-p.png", // Updated image source for all members
    },
  ];

  return (
    <div className="relative">
      {/* Background Section: Yellow box with background image */}
      <div className="absolute inset-0 z-0 h-1/2 bg-yellow-500 about-bg-opacity-90">
        <div className="relative w-full h-full">
          <Image
            src="/Bg.svg" // Background image inside the yellow box
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 py-16">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold">Team Member</h2>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                {/* Social Media Icons on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Link href="#" className="text-white text-xl">
                      <i className="fab fa-facebook"></i>
                    </Link>
                    <Link href="#" className="text-white text-xl">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className="text-white text-xl">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Member Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
