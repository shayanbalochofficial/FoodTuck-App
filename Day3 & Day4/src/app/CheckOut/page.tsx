"use client";

import React, { useState, useEffect } from "react";
import { FoodItem } from "@/types";
import Nav2 from "@/components/Nav2";

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    country: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    billingPostalCode: "",
    billingCountry: "",
    sameAsShipping: false,
  });

  const [cart, setCart] = useState<FoodItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, []);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const shippingCharges = 30; // Fixed shipping charges

  const cartSubtotal = cart.reduce(
    (total, food) => total + food.price * (food.quantity || 1),
    0
  );
  const totalAmount =
    cartSubtotal - (cartSubtotal * discount) / 100 + shippingCharges;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBillingCheckboxChange = () => {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        sameAsShipping: !prevData.sameAsShipping,
      };
      if (updatedData.sameAsShipping) {
        // Copy shipping address to billing address
        updatedData.billingAddress1 = updatedData.address1;
        updatedData.billingAddress2 = updatedData.address2;
        updatedData.billingCity = updatedData.city;
        updatedData.billingPostalCode = updatedData.postalCode;
        updatedData.billingCountry = updatedData.country;
      } else {
        // Clear billing address if not the same
        updatedData.billingAddress1 = "";
        updatedData.billingAddress2 = "";
        updatedData.billingCity = "";
        updatedData.billingPostalCode = "";
        updatedData.billingCountry = "";
      }
      return updatedData;
    });
  };

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10); // Example: 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  return (
    <>
      <Nav2 />
      <div className="bg-white container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Address Line 2"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="City"
            />
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Postal Code"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Country"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
            <input
              type="text"
              name="billingAddress1"
              value={formData.billingAddress1}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Billing Address Line 1"
              disabled={formData.sameAsShipping}
            />
            <input
              type="text"
              name="billingAddress2"
              value={formData.billingAddress2}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Billing Address Line 2"
              disabled={formData.sameAsShipping}
            />
            <input
              type="text"
              name="billingCity"
              value={formData.billingCity}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Billing City"
              disabled={formData.sameAsShipping}
            />
            <input
              type="text"
              name="billingPostalCode"
              value={formData.billingPostalCode}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Billing Postal Code"
              disabled={formData.sameAsShipping}
            />
            <input
              type="text"
              name="billingCountry"
              value={formData.billingCountry}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full mb-2"
              placeholder="Billing Country"
              disabled={formData.sameAsShipping}
            />
            <label>
              <input
                type="checkbox"
                checked={formData.sameAsShipping}
                onChange={handleBillingCheckboxChange}
                className="mr-2"
              />
              Same as Shipping Address
            </label>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mt-8 flex justify-between items-start">
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
            <a href="https://buy.stripe.com/test_00gdSN59qdUacdW288">
              <button className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                Proceed to Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
