"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import linkedin from "../app/assets/imgs/linkedin.png";
import waves from "../app/assets/svg/waves.svg";
import { temaOptions } from "./constants/lists";
import { Menu, Transition } from "@headlessui/react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const Home = () => {
  // Estado para a opção selecionada no menu
  const [selectedOption, setSelectedOption] = useState("");

  // Estado para controlar a abertura/fechamento do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alternar o estado do menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Estado para o modo escuro
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Carregar preferência do modo escuro do localStorage na renderização inicial
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    } else {
      localStorage.setItem("darkMode", String(darkMode));
    }
  }, []);

  // Atualizar o modo escuro e o localStorage quando o darkMode mudar
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
          ? "bg-gradient-to-b from-slate-700 to-slate-800"
          : "bg-slate-100"
      }`}
    >
      <nav className="flex items-center justify-between bg-slate-800 p-2 mb-6 w-full">
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
            className="text-white text-2xl rounded-full bg-gray-600 w-10 h-10 p-4 m-2 relative overflow-hidden hover:bg-gray-700 hover:text-gray-200 transform transition-transform"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/deilton-pedro",
                "_blank"
              );
            }}
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
            className="text-white text-2xl rounded-full bg-gray-600 p-1 m-2 outline-none"
            title="Dark Mode"
            aria-label="Botão DarkMode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div style={{ display: "flex" }}>
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
      <main className="flex flex-col items-center justify-center h-full">
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
                  <Menu.Button
                    className={`outline-none text-white text-2xl group font-semibold flex justify-center items-center border-2 bg-blue-500 m-4 p-2 rounded-full w-[20rem] `}
                    onClick={handleMenuToggle}
                  >
                    Temas&nbsp;
                    <AiFillCaretDown
                      className={
                        isMenuOpen
                          ? "group-active:animate-pulse animate-bounce"
                          : "animate-bounce"
                      }
                    />
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
                      {temaOptions.map(({ label, value, icon }, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <button
                              onClick={() => setSelectedOption(value)}
                              className={`${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "text-slate-900"
                              } group flex w-full items-center justify-between rounded-md pl-2 pr-6 py-2 text-sm`}
                            >
                              {label}
                              {icon}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button className="text-amber-900 flex items-center justify-center text-5xl hover:text-blue-600  font-semibold border-2 bg-amber-500 m-6 p-2 rounded-full w-[20rem] hover:scale-[1.1] transition ease-in-out duratin-800">
                Play
                <AiFillCaretRight className="" />
              </button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
