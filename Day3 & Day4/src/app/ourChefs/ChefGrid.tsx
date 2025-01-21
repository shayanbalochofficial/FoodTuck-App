import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", title: "Chef", image: "/chef1.svg" },
  { name: "Jorina Begum", title: "Chef", image: "/chef2.svg" },
  { name: "M. Mohammed", title: "Chef", image: "/chef3.svg" },
  { name: "Banna Kathy", title: "Chef", image: "/chef4.svg" },
  { name: "Tahmina Rumi", title: "Chef", image: "/chef3.svg" },
  { name: "Banu Dragon", title: "Chef", image: "/chef1.svg" },
  { name: "Robin Metcalf", title: "Chef", image: "/chef3.svg" },
  { name: "William Rumi", title: "Chef", image: "/chef4.svg" },
  { name: "Kebs William Roy", title: "Chef", image: "/chef5.svg" },
  { name: "Mahmud Hossin", title: "Chef", image: "/chef2.svg" },
  { name: "Abser Rahman", title: "Chef", image: "/chef1.svg" },
  { name: "Ronaldo Ruby", title: "Chef", image: "/chef3.svg" },
];

export default function ChefsGrid() {
  return (
    <section className="p-6 bg-white md:px-20">
      {/* Section Header */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Meet Our Chefs
      </h2>

      {/* Chefs Grid */}
      <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white w-56 h-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 mx-auto"
          >
            {/* Chef Image */}
            <div className="relative w-full h-3/4">
              <Image
                src={chef.image}
                alt={`Portrait of Chef ${chef.name}`}
                layout="fill"
                className="object-cover"
                priority={index < 4} // Optimize initial images
              />
            </div>

            {/* Chef Information */}
            <div className="h-1/4 p-3 text-center flex flex-col justify-center">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800">
                {chef.name}
              </h3>
              <p className="text-sm text-gray-500">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
