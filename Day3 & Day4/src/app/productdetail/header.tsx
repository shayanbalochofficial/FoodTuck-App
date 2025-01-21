import Image from "next/image";
import Link from "next/link";

const MenuSection = () => {
  return (
    <section
      className="relative w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] mt-10 bg-black"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50 text-white px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Product Details
        </h2>
        <nav
          className="text-base sm:text-lg lg:text-xl"
          aria-label="Breadcrumb navigation"
        >
          <Link href="/" passHref>
            <span className="text-orange-500 hover:underline">Home</span>
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Product Details</span>
        </nav>
      </div>
    </section>
  );
};

export default MenuSection;
