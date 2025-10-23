import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* PHONE MAIL SOCIALS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            {/* PHONE */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-white">
                <RiPhoneFill className="text-base" />
              </div>
              <p className="font-medium text-primary">+420 731 637 722</p>
            </div>
            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-white">
                <RiMailFill className="text-base" />
              </div>
              <p className="font-medium text-primary">synek.o@seznam.cz</p>
            </div>
          </div>
          <Socials containerStyles="flex items-center gap-8 mx-auto xl:mx-0" iconStyles="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
