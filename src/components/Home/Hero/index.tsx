import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue to-white/10 dark:from-black/90 dark:via-slate-900/70 dark:to-black/40 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-white text-center md:text-start z-10">
            <p className="text-inherit text-xm font-medium dark:text-white/80">Ahemdabad, India</p>
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6 dark:text-white">
              Powering India
            </h1>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="px-8 py-4 border border-white dark:border-white/20 bg-white dark:bg-white/10 text-dark dark:text-white duration-300 hover:bg-transparent hover:text-white dark:hover:bg-white/20 dark:hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
              >
                Get in touch
              </Link>
              <button className="px-8 py-4 border border-white dark:border-white/30 bg-transparent text-white dark:text-white hover:bg-white hover:text-dark dark:hover:bg-white/10 dark:hover:text-white duration-300 text-base font-semibold rounded-full hover:cursor-pointer">
                View Details
              </button>
            </div>
          </div>
          <div className="hidden md:block absolute -top-2 -right-68"></div>
        </div>
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            <div className="flex flex-col sm:items-center gap-3">
              <span className="text-2xl sm:text-3xl font-medium text-inherit">
                10+
              </span>
              <p className="text-sm sm:text-base font-normal text-inherit">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <span className="text-2xl sm:text-3xl font-medium text-inherit">
                50+
              </span>
              <p className="text-sm sm:text-base font-normal text-inherit">
                ManPower
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <span className="text-2xl sm:text-3xl font-medium text-inherit">
                100+
              </span>
              <p className="text-sm sm:text-base font-normal text-inherit">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col sm:items-center gap-3">
              <p className="text-2xl sm:text-3xl font-medium text-inherit">
                Entire
              </p>
              <p className="text-sm sm:text-base font-normal text-black/50 dark:text-white/50">
                India Coverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
