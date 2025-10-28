"use client"; // This is a client component, as it uses state and effects

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";

import Logo from "./Logo";
import Socials from "./Socials";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "work", path: "work" },
  { name: "contact", path: "contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-white font-medium uppercase font-primary tracking-[1.2px]"
              >
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to={link.path}
                  smooth
                  spy
                  duration={500}
                  className="cursor-pointer"
                  activeClass="text-accent"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          {/* SOCIAL */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
