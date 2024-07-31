import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-gray-900 backdrop-blur-lg fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="h-14 w-18 overflow-hidden">
            <img
              src={Logo}
              className="h-full w-full object-cover object-center"
              alt="Flowbite Logo"
            />
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-600 to-indigo-300 hover:from-indigo-300 hover:to-blue-600 rounded-full h-10 text-sm font-medium px-6 py-2 uppercase shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            SIGN UP
          </button>

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal font-size border text-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block  text-sm py-2 px-3 text-white md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 text-sm px-3 text-white hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 text-sm px-3 text-white hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 text-sm px-3 text-white hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
