import React from "react";
import { AiFillBug, AiFillHourglass, AiFillWindows } from "react-icons/ai";

const temaIcons = {
  Biologia: AiFillBug,
  História: AiFillHourglass,
  Tecnologia: AiFillWindows,
};

export const temaOptions = [
  {
    label: "Biologia",
    icon: React.createElement(temaIcons.Biologia),
  },
  {
    label: "História",
    icon: React.createElement(temaIcons.História),
  },
  {
    label: "Tecnologia",
    icon: React.createElement(temaIcons.Tecnologia),
  },
];
