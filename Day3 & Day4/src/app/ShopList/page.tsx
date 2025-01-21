import React from "react";
import LeftGrid from "./components/leftgrid";
import RightGrid from "./components/rightsection";
import Header from "./components/header";
import Nav2 from "@/components/Nav2";

function Page() {
  return (
    <>
      <Nav2 />
      <Header />
      <div className="bg-white py-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 px-4">
            <LeftGrid />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/4">
            <RightGrid />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              1
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
