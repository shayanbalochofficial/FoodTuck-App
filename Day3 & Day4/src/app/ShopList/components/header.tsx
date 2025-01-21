import Image from "next/image";
import Link from "next/link";

const MenuSection = () => {
  return (
    <section
      className="relative w-full h-[30vh] mt-10 bg-black"
      aria-label="Menu Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/hero/stats.png" // Replace with your image path
            alt="Decorative background representing menu"
            fill // Correct prop for latest Next.js
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Shop</h2>
        <nav className="text-lg sm:text-xl" aria-label="Breadcrumb navigation">
          <Link href="/" passHref>
            <span className="text-orange-500 hover:underline">Home</span>
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Shop</span>
        </nav>
      </div>
    </section>
  );
};

export default MenuSection;
