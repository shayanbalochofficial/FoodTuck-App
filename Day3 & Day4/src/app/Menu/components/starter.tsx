import Image from "next/image";

export default function StarterMenu() {
  return (
    <section className="bg-white py-16 px-8 lg:px-20 flex flex-col lg:flex-row items-start gap-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src="/starter.png" // Replace with your image path
          alt="Starter Menu"
          width={400}
          height={200}
          className="rounded-lg h-auto max-h-[500px]"
        />
      </div>

      {/* Menu Items */}
      <div className="w-full lg:w-1/2">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <span className="text-orange-500 text-2xl mr-2">🍽</span> Starter Menu
        </h2>

        {/* Menu List */}
        <div className="mt-8 space-y-6">
          {/* Menu Item 1 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Alder Grilled Chinook Salmon
              </h3>
              <p className="text-gray-500 text-sm">
                Toasted French bread topped with almonds, cheddar
              </p>
            </div>
            <p className="text-orange-500 font-bold text-lg">325</p>
          </div>

          {/* Menu Item 2 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Berries and Crème Tart
              </h3>
              <p className="text-gray-500 text-sm">
                Raspberries, mints, rosemary, whipped cream
              </p>
            </div>
            <p className="text-orange-500 font-bold text-lg">435</p>
          </div>

          {/* Menu Item 3 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Tormentoso Bush Pizza Pinotage
              </h3>
              <p className="text-gray-500 text-sm">
                Baked crust, avocados, pancetta and feta
              </p>
            </div>
            <p className="text-orange-500 font-bold text-lg">145</p>
          </div>

          {/* Menu Item 4 */}
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Spicy Vegan Potato Curry
              </h3>
              <p className="text-gray-500 text-sm">
                Spinach-infused coconut, crushed red chilies
              </p>
            </div>
            <p className="text-orange-500 font-bold text-lg">355</p>
          </div>
        </div>
      </div>
    </section>
  );
}
