import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemsData = [
  {
    title: "Jak dlouho obvykle trvá realizace projektu?",
    description:
      "Délka realizace závisí na rozsahu a náročnosti projektu. U menších montáží jde o jednotky týdnů, u komplexnějších zakázek o několik měsíců.",
  },
  {
    title: "Zajišťujete i technické návrhy a konzultace?",
    description:
      "Ano, nabízíme kompletní podporu od technických konzultací a návrhů řešení až po finální montáž a uvedení do provozu.",
  },
  {
    title: "Jaké technologie a materiály používáte?",
    description:
      "Pracujeme s moderními technologiemi, včetně CNC obrábění, a využíváme kvalitní certifikované materiály podle požadavků zákazníka.",
  },
  {
    title: "Mohu do projektu zasahovat během realizace?",
    description:
      "Ano, v případě potřeby je možné projekt konzultovat a provádět dílčí úpravy po vzájemné dohodě, aniž by byla ohrožena kvalita nebo termín dokončení.",
  },
];


// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Často kladené otázky</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Od prvotního plánování až po dokončení projektu jsme pro vás připravili odpovědi na nejčastější otázky, abyste měli všechny potřebné informace pro správná rozhodnutí.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
