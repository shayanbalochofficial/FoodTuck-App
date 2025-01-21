import React from "react";
import Image from "next/image";

const MainCourseSection = () => {
  const menuItems = [
    {
      name: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with marinara, cheddar",
      price: 325,
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      description: "Organic chicken, almonds, scallops",
      price: 435,
    },
    {
      name: "Vegetables & Green Salad",
      description: "Fresh greens, tomatoes, cucumbers",
      price: 145,
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Roasted coconut cream, mustard for the cheese",
      price: 365,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 px-8 md:px-16 bg-white">
      {/* Menu List */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="text-yellow-500 mr-2">🍴</span> Main Course
        </h2>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-start py-4 border-b border-gray-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <span className="text-xl font-bold text-orange-500">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 flex justify-center">
        <Image
          src="/starter2.png" // Replace with the path to your burger image
          alt="Main Course Burger"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MainCourseSection;
