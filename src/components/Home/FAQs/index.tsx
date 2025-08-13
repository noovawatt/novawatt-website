import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 ">
          <div className="lg:mx-0 mx-auto">
            <Image
              src="/images/faqs/faq-image.png"
              alt="image"
              width={680}
              height={644}
              className="lg:w-full"
              unoptimized={true}
            />
          </div>
          <div className="lg:px-12">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary "
              />
              FAQs
            </p>
            <h2 className="lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white">
              Everything about NoovaWatt
            </h2>
            <p className="text-dark/50 dark:text-white/50 pr-20">
              We bring over a decade of expertise, having completed more than
              200 ventures. A dedicated force of over 50+ professionals
              guarantees prompt and dependable service
            </p>
            <div className="my-8">
              <Accordion
                type="single"
                defaultValue="item-1"
                collapsible
                className="w-full flex flex-col gap-6"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Why Choose NoovaWatt for Your Power Installations?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our team is composed of certified and experienced
                    professionals who are passionate about power. We stay at the
                    forefront of industry advancements to provide you with the
                    most innovative and effective solutions available. From
                    initial consultation to final installation and ongoing
                    support, you can rely on our expertise every step of the
                    way.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. How does NoovaWatt assure superior quality and system
                    security?
                  </AccordionTrigger>
                  <AccordionContent>
                    NoovaWatt guarantees superior quality through a
                    multi-faceted approach. We use only premium, certified
                    components from trusted manufacturers, ensuring the
                    longevity and reliability of every installation. Our systems
                    are installed by a team of highly skilled, licensed
                    technicians who adhere to rigorous safety and quality
                    protocols. To assure system security, we integrate advanced
                    safety features like surge protection and fault detection to
                    safeguard your property. Every project undergoes a thorough
                    quality assurance inspection to verify compliance with all
                    electrical codes, giving you a secure and dependable power
                    system..
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. Does NoovaWatt undertake both small-scale and large-scale
                    power projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, NoovaWatt is equipped to handle projects of all sizes.
                    Our expertise and versatile solutions allow us to undertake
                    everything from small-scale residential installations to
                    large-scale commercial and industrial power projects. We
                    have the resources and technical know-how to design,
                    implement, and manage a custom power system that is
                    perfectly suited to your specific needs, regardless of the
                    projects complexity or scope. We are committed to
                    delivering the same high standard of quality and service to
                    all our clients.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
