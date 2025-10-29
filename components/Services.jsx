"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "construction",
    icon: <PiWrenchFill />,
    title: "Montáž",
    description:
      "Naše firma se pyšní mnohaletými zkušenostmi v oblasti montáže, což z nás činí spolehlivého partnera pro vaše projekty. Díky týmu kvalifikovaných profesionálů a preciznímu přístupu ke každému detailu jsme schopni realizovat i ty nejnáročnější zakázky s maximální efektivitou a kvalitou. Specializujeme se na montáž kontrolních a svařovacích přípravků, jednoúčelových strojů i automatických výrobních linek. Každý projekt realizujeme s důrazem na individuální potřeby klienta, s využitím moderních technologií a ověřených pracovních postupů.",
    serviceList: [
      "Montáž kontrolních a svařovacích přípravků",
      "Montáž jednoúčelových strojů",
      "Montáž automatických výrobních linek",
      "Technické konzultace a návrhy řešení",
      "Výroba a instalace",
      "Finální uvedení do provozu",
    ],

    thumbs: [
      { url: "/assets/img/services/montaz/1.jpg" },
      { url: "/assets/img/services/montaz/2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiUserGearFill />,
    title: "Výroba",
    description:
      "Naše firma nabízí široké spektrum strojní výroby, které zahrnuje frézování, soustružení a broušení. Díky modernímu strojnímu vybavení a zkušenému týmu odborníků jsme schopni splnit i ty nejnáročnější požadavky našich klientů. Zajišťujeme rovněž povrchové úpravy, jako je kalení, cementace, eloxování, černění či zinkování, aby výsledné produkty splňovaly nejvyšší standardy kvality.",
    serviceList: [
      "CNC tříosé frézování (Hurco – 2x)",
      "CNC pětiosé frézování (DMG – 1x)",
      "CNC soustružení (Hurco – 1x)",
      "Klasické frézování (FGU 32 – 1x)",
      "Broušení na plocho (TOS – 1x)",
      "Broušení na kulato (TOS – 1x)",
      "Soustružení (TOS – 5x)",
      "Stojanové vrtání (1x)",
      "Povrchové úpravy (kalení, cementace, eloxování, černění, zinkování)",
    ],

    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-12" id="services">
      <div className="container mx-auto">
        <motion.div
          // variants={fadeIn("up", 0.2)}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: false, amount: 0.2 }}
          className="text-left mx-auto mb-20"
        >
          <Pretitle text="Služby" />
          <h2 className="h2 mb-3">Co vám přinášíme</h2>
          <p className="mb-11  mx-auto">
            Naším hlavním zaměřením je poskytování{" "}
            <strong>
              operativních a efektivních řešení ve výrobních a montážních
              procesech
            </strong>
            . Díky našemu týmu zkušených profesionálů a využití moderních
            technologií dokážeme
            <strong>
              {" "}
              optimalizovat výrobní postupy, zvýšit produktivitu a snížit
              náklady
            </strong>
            . Naše flexibilita nám umožňuje rychle reagovat na specifické
            potřeby našich klientů a poskytovat jim{" "}
            <strong>služby šité na míru</strong>.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
        // variants={fadeIn("up", 0.3)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none text-accent"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 border-r-2 border-white ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div
                      className={`uppercase font-primar font-semibold tracking-[.6px] w-[100px] ml-16 ${
                        activeTab === item.name ? "text-white" : "text-primary"
                      }`}
                    >
                      {item.title}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[550px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    // variants={fadeInVariant}
                    // initial="hidden"
                    // whileInView="show"
                    // exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <Button text="Více" />
                      </div>
                    </div>
                    {/* images */}
                    {/* <div className="flex md:flex-col gap-5 xl:gap-[30px] justify-center">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>                     */}
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
