import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs" className="py-16 md:py-20 lg:py-24">
      <div className="container max-w-6xl mx-auto px-4 sm:px-5 2xl:px-0">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Icon
                icon="ph:house-simple-fill"
                className="text-xl sm:text-2xl text-primary"
              />
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-52 leading-[1.2] font-medium text-dark dark:text-white mb-4 sm:mb-5">
              Everything about NoovaWatt
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              We bring over a decade of expertise, having completed more than
              200 ventures. A dedicated force of over 50+ professionals
              guarantees prompt and dependable service
            </p>
          </div>

          {/* FAQ Accordion Section */}
          <div className="bg-white dark:bg-gray-900/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-dark/5 dark:border-white/10 shadow-sm">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full flex flex-col gap-4 sm:gap-6"
            >
              <AccordionItem
                value="item-1"
                className="border border-dark/10 dark:border-white/15 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary/50 dark:data-[state=open]:border-primary/50 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                  Why Choose NoovaWatt for Your Power Installations?
                </AccordionTrigger>
                <AccordionContent className="text-dark/70 dark:text-white/70 text-sm sm:text-base leading-relaxed pt-2 sm:pt-3">
                  Our team is composed of certified and experienced
                  professionals who are passionate about power. We stay at the
                  forefront of industry advancements to provide you with the
                  most innovative and effective solutions available. From
                  initial consultation to final installation and ongoing
                  support, you can rely on our expertise every step of the way.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-dark/10 dark:border-white/15 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary/50 dark:data-[state=open]:border-primary/50 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                  How does NoovaWatt assure superior quality and system
                  security?
                </AccordionTrigger>
                <AccordionContent className="text-dark/70 dark:text-white/70 text-sm sm:text-base leading-relaxed pt-2 sm:pt-3">
                  NoovaWatt guarantees superior quality through a multi-faceted
                  approach. We use only premium, certified components from
                  trusted manufacturers, ensuring the longevity and reliability
                  of every installation. Our systems are installed by a team of
                  highly skilled, licensed technicians who adhere to rigorous
                  safety and quality protocols. To assure system security, we
                  integrate advanced safety features like surge protection and
                  fault detection to safeguard your property. Every project
                  undergoes a thorough quality assurance inspection to verify
                  compliance with all electrical codes, giving you a secure and
                  dependable power system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-dark/10 dark:border-white/15 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary/50 dark:data-[state=open]:border-primary/50 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                  Does NoovaWatt undertake both small-scale and large-scale
                  power projects?
                </AccordionTrigger>
                <AccordionContent className="text-dark/70 dark:text-white/70 text-sm sm:text-base leading-relaxed pt-2 sm:pt-3">
                  Yes, NoovaWatt is equipped to handle projects of all sizes.
                  Our expertise and versatile solutions allow us to undertake
                  everything from small-scale residential installations to
                  large-scale commercial and industrial power projects. We have
                  the resources and technical know-how to design, implement, and
                  manage a custom power system that is perfectly suited to your
                  specific needs, regardless of the project&apos;s complexity or
                  scope. We are committed to delivering the same high standard
                  of quality and service to all our clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;