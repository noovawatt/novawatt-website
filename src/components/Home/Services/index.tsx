import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute left-0 top-0 -z-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden opacity-40"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block opacity-40"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Content Section */}
          <div className="lg:col-span-6 col-span-12 order-1">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex items-center gap-2.5">
              <Icon
                icon="ph:house-simple-fill"
                className="text-xl sm:text-2xl text-primary"
              />
              Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-52 mt-3 sm:mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
              Why Choose NoovaWatt
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg leading-relaxed max-w-xl">
              We specialize in all types of electrical works & installations for
              high-rise buildings, cutting-edge smart home automation, or
              critical fire protection systems, we ensure quality, safety, and
              performance.
            </p>
            <Link
              href="/projects"
              className="py-3 sm:py-4 px-6 sm:px-8 bg-primary text-sm sm:text-base leading-4 inline-block text-white rounded-full font-semibold mt-6 sm:mt-8 hover:bg-dark hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View all works
            </Link>
          </div>

          {/* Large Featured Image */}
          <div className="lg:col-span-6 col-span-12 order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden cursor-default">
                <Image
                  src="/images/properties/property4/ArtNirman2.jpg"
                  alt="Residential Electrical Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={true}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  {/* <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold drop-shadow-lg">
                    Residential Electrical Solutions
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1 drop-shadow">
                    Complete wiring & smart home systems
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Second Large Image */}
          <div className="lg:col-span-6 col-span-12 order-3 lg:order-3">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden cursor-default">
                <Image
                  src="/images/properties/property1/sunbuilder-2.jpg"
                  alt="Commercial Electrical Installations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={true}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  {/* <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold drop-shadow-lg">
                    Commercial Electrical Installations
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-1 drop-shadow">
                    High-rise buildings & power distribution
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Small Image 1 */}
          <div className="lg:col-span-3 col-span-6 order-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[3/4] overflow-hidden cursor-default">
                <Image
                  src="/images/properties/property5/sheetal-3.jpg"
                  alt="Smart Lighting Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={true}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  {/* <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg">
                    Smart Lighting Systems
                  </h3>
                  <p className="text-white/90 text-xs mt-0.5 sm:mt-1 drop-shadow">
                    Automated & energy-efficient
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Small Image 2 */}
          <div className="lg:col-span-3 col-span-6 order-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[3/4] overflow-hidden cursor-default">
                <Image
                  src="/images/properties/property1/sunbuilder-3.jpg"
                  alt="Fire Protection Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized={true}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  {/* <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold drop-shadow-lg">
                    Fire Protection Systems
                  </h3>
                  <p className="text-white/90 text-xs mt-0.5 sm:mt-1 drop-shadow">Safety & compliance solutions</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
