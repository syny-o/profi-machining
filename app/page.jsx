"use client"; // This is a client component, as it uses state and effects

import { useEffect, useState } from "react";

import Hero from "@/components/Hero"; // @ is an alias to the components directory configured in jsconfig.json
import Topbar from "@/components/Topbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Header from "@/components/Header";
import Contact from "@/components/contact";
import Stats from "@/components/Stats";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Topbar />
      <div className="relative z-10">
        <Header />
      </div>
      <div
        className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <Stats />

    </div>
  );
};

export default Home;
