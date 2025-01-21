import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="container mx-auto text-center">
        {/* Align h2 and h1 to the left but keep everything centered in the section */}
        <div className="text-left mx-32 mb-8">
          <h2 className="text-xl mb-4 font-great-vibes text-orange-500">
            Testimonial
          </h2>
          <h1 className="text-4xl font-bold">What our clients are saying</h1>
        </div>

        {/* Card */}
        <div className="relative inline-block bg-white text-black rounded-lg shadow-md overflow-hidden w-full md:w-[70%] mx-auto">
          <div className="relative z-10 p-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/hero/icons.svg" // Replace with the path to the profile image
                alt="Client Profile"
                width={100}
                height={100}
                className="rounded-full border-4 border-white"
              />
            </div>
            <p className="italic mb-4">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque diam pellentesque bibendum non dui volutpat fringilla
              urna. Vitae sit augue sit aliquet pretium donec et. Blandit dolor
              elementum nulla.&quot;
            </p>
            <h3 className="text-xl font-bold">Alamin Hasan</h3>
            <p className="text-gray-500">Front Speaker</p>
            <div className="text-yellow-500 mt-2">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
