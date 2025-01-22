import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-primary px-4 lg:px-6 py-3 text-xs lg:text-sm">
        <Link href="#hero">
          <h1 className="font-bold text-lg lg:text-xl text-white uppercase tracking-widest">
            Priya V
          </h1>
        </Link>

        <div className="flex items-center gap-4 md:hidden text-white">
          <button
            type="button"
            className="font-extrabold tracking-wider bg-highlight px-3 py-1.5 lg:px-4 lg:py-2 rounded-md uppercase"
          >
            Let's Talk
          </button>
          <button type="button">
            <IoMenu className="w-6 h-6" />
          </button>
        </div>

        <ul className="hidden md:flex gap-4 items-center text-white font-bold tracking-wider uppercase">
          <Link href="#about">
            <li>About</li>
          </Link>
          <Link href="#skills">
            <li>Skills</li>
          </Link>
          <Link href="#projects">
            <li>Projects</li>
          </Link>
          <Link href="#education">
            <li>Education</li>
          </Link>
          <li>
            <button
              type="button"
              className="font-extrabold tracking-wider bg-highlight px-3 py-1.5 lg:px-4 lg:py-2 rounded-md uppercase"
            >
              Let's Talk
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
