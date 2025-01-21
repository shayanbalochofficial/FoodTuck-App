import HeroSection from "@/components/hero";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="mx-10">
        <HeroSection />
      </div>
    </>
  );
}

export default page;
