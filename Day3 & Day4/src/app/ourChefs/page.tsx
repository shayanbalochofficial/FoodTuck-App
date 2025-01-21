import React from "react";
import ChefGrid from "./ChefGrid";
import Nav2 from "@/components/Nav2";
import Header from "./header";

function page() {
  return (
    <>
      <Nav2 />
      <Header />
      <div className=" bg-white text-black">
        <ChefGrid />
      </div>
    </>
  );
}

export default page;
