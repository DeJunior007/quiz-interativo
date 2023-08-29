'use client'
import React, { useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import linkedin from "../app/assets/imgs/linkedin.png";
import waves from "../app/assets/svg/waves.svg";
import { temas } from "./constants/lists";
import { Menu, Transition } from "@headlessui/react";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  const [darkMode, setDarkMode] = useState<boolean>(true);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    } else {
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? " bg-gradient-to-b from-slate-700 to-slate-800 "
          : "bg-slate-100"
      }`}
    >
      <nav className="flex items-center justify-between bg-slate-800 p-2 mb-6 w-full">
        <div className="flex items-center m-2">
          <h1 className="text-white text-2xl font-semibold">Quiz</h1>
        </div>
        <div className="flex items-center">
          <button
            className="text-white text-2xl rounded-full bg-gray-600 p-2 m-2"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/deilton-pedro",
                "_blank"
              );
            }}
          >
            <Image
              src={linkedin}
              aria-label="linkedin"
              alt={"linkedin-icon"}
              width={35}
              title="linkedin"
            />
          </button>
          <button
            className="text-white text-2xl rounded-full bg-gray-600 p-2 m-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <span role="img" aria-label="Dark Mode">
                🌙
              </span>
            ) : (
              <span role="img" aria-label="Light Mode">
                ☀️
              </span>
            )}
          </button>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-centerh-full">
        <div
          style={{ backgroundImage: `url(${waves})` }}
          className="flex justify-center items-center bg-cover bg-enter w-full h-full"
        >
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-slate-800 to-slate-900 w-auto rounded-xl p-20 border-4 border-white"
          >
            <div className="w-full h-full bg-blue-500 p-4 transform -skew-x-12 border-4 mb-4 border-white">
              <h1 className="flex justify-center items-center h-full text-white font-bold text-6xl">
                Quiz
              </h1>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="outline-none text-white text-2xl font-semibold flex justify-center border-2 bg-blue-500 m-4 p-2 rounded-full w-[20rem]">
                    Temas
                  </Menu.Button>
                </div>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      {temas.map((tema, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <button
                              onClick={() => setSelectedOption(tema)}
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {tema}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button className="text-amber-900 text-5xl font-semibold border-2 bg-amber-500 m-6 p-2 rounded-full w-[20rem]">
                Play
              </button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
