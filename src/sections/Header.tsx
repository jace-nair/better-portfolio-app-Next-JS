"use client";

import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/contexts/ActiveSectionContextProvider";

const navLinks = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

export const Header = () => {

    const {activeSection, setActiveSection} = useActiveSectionContext();

    return(
        <div className="flex justify-center items-center fixed top-3 w-full z-10">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                {/*
                <a href="#home" className="nav-item">Home</a>
                <a href="#projects" className="nav-item">Projects</a>
                <a href="#about" className="nav-item">About</a>
                <a href="#contact" className="nav-item">Contact</a>
                */}
                {navLinks.map((link => (
                    <Link key={link.name} href={link.hash} className={clsx("nav-item", {"bg-white/10 text-white": activeSection === link.name,})} onClick={() => setActiveSection(link.name)}>{link.name}</Link>
                )))}
            </nav>
        </div>
    );
}