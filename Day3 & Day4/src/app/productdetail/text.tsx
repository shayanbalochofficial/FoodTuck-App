import React from "react";

const Description = () => (
  <div className="mt-6 text-gray-800">
    <p className="text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
      porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu
      euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum
      suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget
      vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum.
      Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae.
      Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam
      ac, aliquam in nisi.
    </p>
    <h3 className="text-xl font-semibold mt-6 text-orange-600">Key Benefits</h3>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li className="text-lg text-gray-700">Benefit one</li>
      <li className="text-lg text-gray-700">Benefit two</li>
      <li className="text-lg text-gray-700">Benefit three</li>
    </ul>
  </div>
);

const Reviews = () => (
  <div className="mt-6 text-gray-800">
    <p className="text-lg leading-relaxed">
      Reviews content here. This section can be populated with user reviews or
      testimonials to give potential buyers insights into the product&apos;s quality.
    </p>
  </div>
);

const Tabs = () => (
  <div className="flex border-b border-gray-300">
    <div className="px-6 py-3 text-xl font-semibold cursor-pointer text-gray-700 hover:text-white hover:bg-orange-500 transition-colors duration-300">
      Description
    </div>
    <div className="px-6 py-3 text-xl font-semibold cursor-pointer text-gray-700 hover:text-white hover:bg-orange-500 transition-colors duration-300">
      Reviews (24)
    </div>
  </div>
);

const ProductDetails: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg">
      <Tabs />
      <Description />
      <Reviews />
    </section>
  );
};

export default ProductDetails;
