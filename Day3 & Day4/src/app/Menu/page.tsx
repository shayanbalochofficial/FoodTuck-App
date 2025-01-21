import React from "react";
import Header from "./components/header";
import Starter from "./components/starter";
import Course from "./components/m-course";
import Desert from "./components/deserts";
import Drinks from "./components/drinks";
import End from "./components/end";
import Nav2 from "@/components/Nav2";
import StatsSection from "./../../components/stats";

const page = () => {
  return (
    <>
      <Nav2 />
      <div>
        <Header />
        <Starter />
        <Course />
        <span className="sm:hidden">
          <StatsSection />
        </span>
        <Desert />
        <Drinks />
        <End />
      </div>
    </>
  );
};

export default page;
