import React from "react";
import Left from "./Blog-components/left";
import Nav2 from "@/components/Nav2";
import Header from "./header";

function page() {
  return (
    <>
      <Nav2 />
      <Header />
      <div className="bg-white  ">
        <Left />
      </div>
    </>
  );
}

export default page;
