
import Link from "next/link";
import services from "./servicesData";

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen flex flex-col items-center justify-start pt-16 px-4 md:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          At Novaawatt, we are dedicated to providing a wide range of electrical
          services designed to meet the diverse needs of both residential and
          commercial clients.
        </p>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 hover:border-primary/40 dark:hover:border-primary/50 p-8 flex flex-col items-center text-center"
          >
            <div className="mb-5 flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-4 text-left space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-primary dark:text-primary">
                    {/* You can replace this with an actual icon if you prefer */}
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7zm0 6H9v2h2v-2z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-3xl bg-primary/5 dark:bg-primary/15 rounded-2xl py-12 px-8 flex flex-col items-center text-center mb-16 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Ready to transform your property?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl leading-relaxed">
          Let’s talk about your vision. Our experts are here to provide tailored
          solutions that fit your lifestyle and goals.
        </p>
        <Link href="/site/contactus">
          <span className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-primary/90 active:scale-95 transition-all duration-200">
            Get in Touch
          </span>
        </Link>
      </section>
    </main>
  );
}
