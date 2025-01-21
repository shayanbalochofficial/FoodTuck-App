"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  image?: {
    asset: {
      url: string;
    };
  };
  description: string;
  available: boolean;
  slug: string;
}

const FoodsPage = () => {
  
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "food"] | order(_createdAt asc) {
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        image,
        description,
        available,
        "slug": slug.current
        }`;
        
        const fetchedFoods: FoodItem[] = await client.fetch(query);
        setFoods(fetchedFoods);
      };
      
      fetchData();
      
      const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);
  
  const [cart, setCart] = useState<FoodItem[]>([]);
  const [wishlist, setWishlist] = useState<FoodItem[]>([]);
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  
  const addToCart = (food: FoodItem) => {
    const newCart = [...cart, food];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    showPopup("Item added to cart!");
  };

  const toggleWishlist = (food: FoodItem) => {
    const isInWishlist = wishlist.some((item) => item._id === food._id);
    const newWishlist = isInWishlist
      ? wishlist.filter((item) => item._id !== food._id)
      : [...wishlist, food];

    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    showPopup(isInWishlist ? "Item removed from wishlist" : "Added to wishlist");
  };

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#f0f4f8] to-[#e1e8f0] text-dark dark:bg-[#101010] dark:text-light">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 py-10">
        {foods.length > 0 ? (
          foods.map((food: FoodItem) => (
            <div
              key={`${food._id}-${food.name}`}
              className="relative bg-white shadow-md rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            >
              {/* Heart Icon at Top-Right */}
              <button
                className={`absolute top-4 right-4 p-2 rounded-full border-2 transition-all duration-300 z-10 ${
                  wishlist.some((item) => item._id === food._id)
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-gray-300 text-gray-500"
                } hover:bg-red-500 hover:text-white`}
                onClick={() => toggleWishlist(food)}
              >
                {wishlist.some((item) => item._id === food._id) ? (
                  <AiFillHeart className="text-xl" />
                ) : (
                  <AiOutlineHeart className="text-xl" />
                )}
              </button>

              {/* Image Section */}
              {food.image && food.image.asset.url ? (
                <Image
                  src={food.image.asset.url}
                  alt={food.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-500 transition-all">
                  {food.name}
                </h2>
                <p className="text-sm text-gray-500">
                  <strong>Category:</strong> {food.category}
                </p>
                <p className="text-gray-700 mt-2 text-lg">
                  <span className="text-green-500 font-semibold">
                    ${food.price}
                  </span>{" "}
                  <span className="text-gray-400 line-through">
                    ${food.originalPrice}
                  </span>
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  <strong>Tags:</strong> {food.tags.join(", ")}
                </p>
                <p className="text-gray-600 mt-2 text-sm">{food.description}</p>
                <p
                  className={`text-sm mt-2 font-semibold ${
                    food.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {food.available ? "Available" : "Out of Stock"}
                </p>

                <div className="flex items-center space-x-4 mt-4">
                  {/* Add to Cart Button */}
                  <button
                    className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                  {/* View Details Button */}
                  <Link
                    href={`/ShopList/Details/${food.slug}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No food items available.
          </p>
        )}
      </section>

      {/* Popup Message */}
      {isPopupVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg">
          <p>{popupMessage}</p>
        </div>
      )}
    </main>
  );
};

export default FoodsPage;
