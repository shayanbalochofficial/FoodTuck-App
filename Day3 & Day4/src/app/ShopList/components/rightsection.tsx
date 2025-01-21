import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-white border-r px-4 py-6 space-y-8">
      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded w-full">
          Search
        </button>
      </div>

      {/* Category Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Category</h2>
        <div className="space-y-1">
          {["Sandwiches", "Burger", "Chicken Chop", "Drink", "Pizza", "Veg", "Non Veg", "Uncategorized"].map(
            (category) => (
              <label key={category} className="block">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            )
          )}
        </div>
      </div>

      {/* Banner Section */}
      <div className="mb-4">
        <Image
          src="/Rectangle 8879.png" // Replace with your banner image path
          alt="Product Banner"
          className="rounded-lg w-full"
          width={300}
          height={200}
        />
        <p className="mt-2 text-center font-bold text-green-500">$4.95</p>
        <p className="text-center text-gray-500">Shop Now</p>
      </div>

      {/* Filter by Price Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Filter By Price</h2>
        <input type="range" className="w-full" />
        <p className="text-center text-gray-500">Adjust price range</p>
      </div>

      {/* Latest Products Section */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg mb-2">Latest Products</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 border-b pb-2"
            >
              <Image
                src={`/Vector.png`} // Replace with actual product image paths
                alt={`Product ${item}`}
                className="w-16 h-16 rounded"
                width={60}
                height={60}
              />
              <div>
                <p className="font-semibold text-gray-800">Product Name</p>
                <p className="text-gray-500">$5.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Tags Section */}
      <div>
        <h2 className="font-bold text-lg mb-2">Product Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["Sandwiches", "Our Menu", "Pizza", "Chicken", "Exclusive"].map(
            (tag) => (
              <span
                key={tag}
                className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
