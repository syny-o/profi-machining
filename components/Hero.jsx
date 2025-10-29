import Button from "./Button";

import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>

      {/* CONTENT */}
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-white text-left mx-auto xl:mx-0 flex flex-col items-start max-w-[608px]">
          <h1 className="h1 text-white mb-4">
            <span className="text-accent">Vytváříme</span> trvalá řešení
          </h1>
          <p className="mb-9">
            Jsme dynamická firma, která se neustále vyvíjí a adaptuje. Naším
            hlavním zaměřením je poskytování operativních a efektivních řešení
            ve výrobních a montážních procesech.
          </p>
          {/* BUTTONS */}
          <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
            <Button text="Více" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
