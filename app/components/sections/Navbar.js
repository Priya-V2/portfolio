"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu((prevState) => !prevState);
  };

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
          <button type="button" onClick={() => toggleMenu()}>
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
      {displayMenu && (
        <div
          className={`flex flex-col items-center justify-center absolute top-0 left-0 bg-secondary w-screen h-screen text-base transform transition-transform duration-1000 ease-in-out ${
            displayMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => toggleMenu()}
              className="text-dark-charcoal text-xl"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col mx-10">
            <ul className="flex flex-col text-center">
              <Link href="#about" onClick={() => toggleMenu()}>
                <li className="mb-4">About</li>
              </Link>
              <Link href="#skills" onClick={() => toggleMenu()}>
                <li className="mb-4">Skills</li>
              </Link>
              <Link href="#projects" onClick={() => toggleMenu()}>
                <li className="mb-4">Projects</li>
              </Link>
              <Link href="#education" onClick={() => toggleMenu()}>
                <li>Education</li>
              </Link>
              <li>
                <button
                  type="button"
                  className="font-extrabold tracking-wider text-white bg-highlight w-full mt-6 px-3 py-1.5 lg:px-4 lg:py-2 rounded-md uppercase"
                >
                  Let's Talk
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
