"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import Navbar from "@/components/Nav2";
import Header from "./header";
import Text from "./text";

const relatedProducts = [
  {
    id: 1,
    name: "Dish 1",
    image: "/console-4.svg",
    price: "$20",
    rating: "4.5",
    reviews: 30,
  },
  {
    id: 2,
    name: "Dish 2",
    image: "/console-2.svg",
    price: "$25",
    rating: "4.7",
    reviews: 45,
  },
  {
    id: 3,
    name: "Dish 3",
    image: "/console-3.svg",
    price: "$18",
    rating: "4.6",
    reviews: 50,
  },
  {
    id: 4,
    name: "Dish 4",
    image: "/console-4.svg",
    price: "$22",
    rating: "4.8",
    reviews: 40,
  },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState("/dish1.jpg");

  return (
    <>
      <Navbar />
      <Header />
      <section className="p-6 md:p-10 bg-white">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <span>Home</span> / <span>Menu</span> /{" "}
          <span className="font-medium text-black">Yummy Chicken Chup</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Images */}
          <div>
            <div className="border rounded-md overflow-hidden">
              <Image
                src="console-1.svg"
                alt="Product Image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {["/dish1.jpg", "/dish2.jpg", "/dish3.jpg", "/dish4.jpg"].map(
                (img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`border rounded-md overflow-hidden ${
                      selectedImage === img ? "ring-2 ring-red-500" : ""
                    }`}
                  >
                    <Image
                      src="console-2.svg"
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Section: Details */}
          <div>
            <h1 className="text-2xl font-semibold mb-2">Yummy Chicken Chup</h1>
            <div className="flex items-center gap-2 text-sm mb-4">
              <span className="text-green-500 font-medium">In Stock</span>
              <span className="text-gray-500">| 20 Reviews</span>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-lg font-bold mb-4">$54.00</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non vehicula.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                <AiOutlineShoppingCart />
                Add to cart
              </button>
            </div>
            <ul className="mt-6 text-sm text-gray-600">
              <li>✅ Free Delivery</li>
              <li>✅ 7-Day Return Policy</li>
              <li>✅ Secure Checkout</li>
            </ul>
          </div>
        </div>
            <Text/>
        {/* Related Items */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Related Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-md shadow-sm hover:shadow-md overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                  <div className="flex items-center text-yellow-400 text-xs mt-2">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-black text-white rounded-md w-full hover:bg-gray-800">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
