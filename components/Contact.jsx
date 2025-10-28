import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6 text-accent uppercase">
                Kontaktujte nás
              </h4>
              <p className="mb-9 h-4"></p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Napište nám
                    </h5>
                    <p className="mb-4">
                      Náš tým je tu pro vás a rád vám pomůže.
                    </p>
                    <p className="font-semibold text-primary">
                      info@profimachining.eu
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Sídlo společnosti
                    </h5>
                    <p className="mb-4">
                      Zastavte se u nás nebo nás kontaktujte předem.
                    </p>
                    <p className="font-semibold text-primary">
                      Větrná 1919/20A 46601 Jablonec nad Nisou
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Telefon
                    </h5>
                    <p className="mb-4">Pondělí–pátek od 8:00 do 16:00.</p>
                    <p className="font-semibold text-primary">
                      +420 724 777 078
                    </p>
                  </div>
                </div>
              </div>

              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h3 className="h3 mb-3 font-bold">Nezávazná poptávka</h3>
              <p className="mb-9">
                Máte dotaz nebo zájem o spolupráci? Napište nám, ozveme se co
                nejdříve.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
