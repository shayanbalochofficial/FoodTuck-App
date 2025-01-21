"use client";

import React, { useState } from "react";
import { FoodItem } from "@/types";
import Header from "./components/header";
import Nav2 from "@/components/Nav2";
import Link from "next/link";
import Image from "next/image";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<FoodItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const shippingCharges = 30; // Fixed shipping charges

  const handleQuantityChange = (foodId: string, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item._id === foodId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (foodId: string) => {
    const updatedCart = cart.filter((item) => item._id !== foodId); // Fix to remove the specific item
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10); // Example: 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const cartSubtotal = cart.reduce(
    (total, food) => total + food.price * (food.quantity || 1),
    0
  );
  const totalAmount =
    cartSubtotal - (cartSubtotal * discount) / 100 + shippingCharges;

  return (
    <>
      <Nav2 />
      <Header />
      <div className="bg-white container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty. Go to{" "}
            <Link className="underline" href="/ShopList">
              Menu
            </Link>
          </p>
        ) : (
          <div>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Item</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2">Total</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((food) => (
                  <tr key={`${food._id}-${food.name}`}>
                    <td className="border border-gray-300 px-4 py-2 flex items-center">
                      <Image
                        src={
                          food.image?.asset?.url || "/images/placeholder.jpg"
                        }
                        alt={food.name}
                        className="w-12 h-12 object-cover mr-2"
                        width={100}
                        height={100}
                      />
                      {food.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${food.price.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        min="1"
                        value={food.quantity || 1}
                        className="w-16 border border-gray-300 p-1 text-center"
                        onChange={(e) =>
                          handleQuantityChange(
                            food._id,
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${(food.price * (food.quantity || 1)).toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                        onClick={() => removeFromCart(food._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-between items-start">
              <div className="w-1/2">
                <h2 className="text-xl font-semibold mb-2">Coupon Code</h2>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="border border-gray-300 p-2 w-full mr-2"
                    placeholder="Enter your code"
                  />
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
                <p className="flex justify-between mb-1">
                  <span>Cart Subtotal:</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </p>
                <p className="flex justify-between mb-1">
                  <span>Discount:</span>
                  <span>- ${((cartSubtotal * discount) / 100).toFixed(2)}</span>
                </p>
                <p className="flex justify-between mb-1">
                  <span>Shipping Charges:</span>
                  <span>${shippingCharges.toFixed(2)}</span>
                </p>
                <hr className="my-2" />
                <p className="flex justify-between font-bold text-lg">
                  <span>Total Amount:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </p>
                <Link href="/CheckOut">
                  <button className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
