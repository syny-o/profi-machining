"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  const links = [
    { name: "home", path: "home" },
    { name: "služby", path: "services" },
    { name: "o nás", path: "about" },
    { name: "projekty", path: "projects" },
  ];

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Logo />
          {/* NAVIGATION + BUTTON */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className="cursor-pointer"
                    activeClass="text-accent"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            {/* BUTTON */}
            <ScrollLink to="contact" smooth spy className="cursor-pointer">
              <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-white">
                <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                  Kontaktovat
                </div>
                <div className="w-11 h-11 bg-primary flex items-center justify-center">
                  <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
                </div>
              </button>
            </ScrollLink>
          </nav>
          {/* NAVIGATION MOBILE */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
