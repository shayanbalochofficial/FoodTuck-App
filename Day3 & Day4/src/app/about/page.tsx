import React from "react";
import Navbar from "@/components/Nav2";
import Header from "./components/header";
import Body from "./components/body";

function page() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-white w-full py-10 px-5">
        <Body />
      </div>
    </>
  );
}

export default page;
