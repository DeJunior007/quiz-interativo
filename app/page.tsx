"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import linkedin from "../app/assets/imgs/linkedin.png";
import waves from "../app/assets/svg/waves.svg";
import { temaOptions } from "./constants/lists";
import { Menu, Transition } from "@headlessui/react";
import { AiFillCaretRight } from "react-icons/ai";

interface Option {
  label: string;
  icon: JSX.Element;
}
const backgroundStyles = {
  backgroundImage: `url(${waves.src}`, // Use .src para obter o URL do SVG
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Home = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const buttonText = selectedOption ? `${selectedOption.label} ` : "Temas";

  return (
    <div
      style={backgroundStyles}
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-b from-slate-700 to-slate-800"
          : "bg-slate-100"
      }`}
    >
      <nav className="flex items-center justify-between bg-slate-700 duration-500 ease-in duration-500 dark:bg-slate-800 p-2  w-full">
        <div className="flex items-center m-2">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-2xl font-semibold"
          >
            Q
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              u
            </motion.span>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              i
            </motion.span>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              z
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex items-center">
          <button
            className="text-white text-2xl rounded-full bg-slate-600 dark:bg-slate-700 ease-in transition duration-500 w-10 h-10 p-4 m-2 relative overflow-hidden "
            onClick={() =>
              window.open("https://www.linkedin.com/in/deilton-pedro", "_blank")
            }
          >
            <motion.span
              className="absolute inset-0 flex justify-center items-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={linkedin}
                aria-label="linkedin"
                alt="linkedin-icon"
                width={30}
                height={30}
                title="linkedin"
              />
            </motion.span>
          </button>
          <button
            className="text-white text-2xl rounded-full bg-slate-600 dark:bg-slate-700 p-1 m-2 outline-none transition ease-in duration-500"
            title="Dark Mode"
            aria-label="Botão DarkMode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className="bg-slate-500 dark:bg-slate-600 rounded-full ease-in duration-500"
              style={{ display: "flex" }}
            >
              <motion.span
                role="img"
                aria-label="Light Mode"
                initial={{ opacity: 1, x: 0 }}
                animate={{
                  opacity: darkMode ? 0 : 1,
                  x: darkMode ? 50 : 0,
                  scale: darkMode ? 0.8 : 1,
                }}
                transition={{ duration: 0.5 }}
                style={{ marginRight: "8px" }}
              >
                ☀️
              </motion.span>
              <motion.span
                role="img"
                aria-label="Dark Mode"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: darkMode ? 1 : 0,
                  x: darkMode ? 0 : -50,
                  scale: darkMode ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              >
                🌙
              </motion.span>
            </div>
          </button>
        </div>
      </nav>
      <main
        style={{
          backgroundImage: `url(${waves.src}), ${
            darkMode
              ? "linear-gradient(to bottom, #1A202C, #2D3748)"
              : "linear-gradient(to bottom, #F7FAFC, #EDF2F7)"
          }`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="flex flex-col items-center h-screen"
      >
        <div className="flex justify-center items-start pt-12 w-full h-full">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-slate-800 to-slate-900 w-auto flex-col items-center justify-center rounded-xl p-10 border-4 border-slate-500 dark:border-white transition duration-500 ease-in"
          >
            <div className="w-[20rem] h-full bg-blue-500 p-4 transform -skew-x-12 mx-auto border-4 mb-4 border-white">
              <h1 className="flex justify-center items-center h-full text-white font-bold text-4xl">
                Quiz
              </h1>
            </div>
            <div className="flex flex-col items-center justify-between w-full">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className={`outline-none text-white text-2xl group font-semibold flex justify-center items-center border-2 bg-blue-500 m-4 p-2 rounded-full w-[13rem] `}
                  >
                    <AnimatePresence>
                      <motion.span
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{ duration: 0.3 }}
                      >
                        {buttonText}
                      </motion.span>
                    </AnimatePresence>
                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 180 }}
                          exit={{ rotate: 0 }}
                          className="inline-block ml-2"
                        ></motion.div>
                      )}
                    </AnimatePresence>
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
                  <Menu.Items className="absolute right-0 mt-2 w-full divide-y divide-slate-900 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      {temaOptions.map(({ label, icon }, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => {
                            return (
                              <button
                                onClick={() =>
                                  setSelectedOption({ label, icon })
                                }
                                className={`${
                                  active
                                    ? "bg-blue-500 text-white font-bold"
                                    : "text-slate-900"
                                } group flex w-full items-center justify-between rounded-md pl-2 pr-6 py-2 text-lg font-semibold`}
                              >
                                {label}
                                {icon}
                              </button>
                            );
                          }}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                className={`text-amber-900 flex items-center justify-center text-3xl font-bold border-2 ${
                  selectedOption &&
                  (selectedOption.label === "Biologia" ||
                    selectedOption.label === "História" ||
                    selectedOption.label === "Tecnologia")
                    ? "bg-amber-500 hover:text-blue-600 hover:scale-[1.1] transition ease-in-out duration-800 active:scale-[0.9]"
                    : "bg-amber-200 cursor-not-allowed opacity-100"
                } m-4 p-2 rounded-full w-[15rem]`}
                disabled={
                  !selectedOption ||
                  !(
                    selectedOption.label === "Biologia" ||
                    selectedOption.label === "História" ||
                    selectedOption.label === "Tecnologia"
                  )
                }
                title={selectedOption ? "" : "Selecione um tema para jogar!"}
              >
                Play
                {selectedOption &&
                  (selectedOption.label === "Biologia" ||
                    selectedOption.label === "História" ||
                    selectedOption.label === "Tecnologia") && (
                    <AiFillCaretRight className="" />
                  )}
              </button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
