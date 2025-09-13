import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/10 dark:via-black dark:to-primary/20">
        <div className="absolute inset-0 bg-[url('/images/hero/heroBanner.png')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
        <div className="container max-w-7xl mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-medium mb-6">
              <Icon icon="solar:star-bold" className="w-5 h-5" />
              <span>About NoovaWatt</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              About Us
            </h1>
            <div className="space-y-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold text-primary dark:text-primary">
                Ved Enterprises is Now NoovaWatt
              </p>
              <p>
                At NoovaWatt, we are more than just an electrical service
                provider; we are your dedicated partners in powering a smarter,
                safer, and more sustainable future. With a foundation built on
                expertise, innovation, and unwavering integrity, we have earned
                a reputation for delivering exceptional electrical solutions for
                both residential and commercial clients.
              </p>
              <p>
                Noovawatt was founded by Girish, a visionary with over 15 years
                of deep experience in the electrical industry. Before starting
                Noovawatt in 2014, Girish built a strong reputation by working
                closely with some of Gujarat's most respected builders,
                companies, and corporate clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              New Energy Unlimited Possibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Girish Joshi",
                role: "Chairman",
                icon: "solar:user-bold",
              },
              {
                name: "Hemant Joshi",
                role: "Director",
                icon: "solar:user-bold",
              },
              {
                name: "Kishan Patel",
                role: "Managing Director",
                icon: "solar:user-bold",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary/40 dark:hover:border-primary/50"
              >
                <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon icon={member.icon} className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href="/projects">
              <span className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-95 transition-all duration-200">
                <Icon icon="solar:folder-bold" className="w-6 h-6" />
                Explore Projects
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Our mission is to empower our clients with cutting-edge
                electrical systems that enhance efficiency, safety, and
                convenience. We are committed to using our technical proficiency
                and forward-thinking approach to solve complex electrical
                challenges, ensuring every project is completed to the highest
                standards of quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Apart Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why We Stand Apart
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                What truly distinguishes NoovaWatt is our passion for progress
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We go beyond basic circuitry, specializing in next-generation
                technologies such as solar energy systems, smart home
                automation, and electric vehicle (EV) charging infrastructure.
                Our team of certified professionals is dedicated to continuous
                learning, enabling us to provide intelligent, customized
                solutions that are both reliable and future-proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Excellence Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                A Commitment to Excellence
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                At the heart of our operations is a deep-seated commitment to
                excellence. We believe that superior quality begins with a
                meticulous approach—from the initial consultation and custom
                design to the final, rigorous inspection. We use only premium,
                certified components and adhere to the strictest safety
                protocols, guaranteeing that every NoovaWatt installation is a
                testament to durability, security, and unparalleled
                craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Promise to You
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                When you choose NoovaWatt, you are choosing a partner dedicated
                to your satisfaction. We promise to provide clear communication,
                transparent pricing, and a seamless project experience. Our goal
                is not just to meet your expectations but to exceed them,
                leaving you with a powerful, efficient, and reliable electrical
                system that you can trust for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how NoovaWatt can bring your electrical vision to life
            with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactus">
              <span className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-95 transition-all duration-200">
                <Icon icon="solar:phone-bold" className="w-6 h-6" />
                Get in Touch
              </span>
            </Link>
            <Link href="/projects">
              <span className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 border border-gray-200 dark:border-gray-700">
                <Icon icon="solar:folder-bold" className="w-6 h-6" />
                View Our Work
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
