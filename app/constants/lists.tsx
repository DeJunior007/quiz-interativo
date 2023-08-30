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
    value: "Biologia",
    icon: React.createElement(temaIcons.Biologia),
  },
  {
    label: "História",
    value: "História",
    icon: React.createElement(temaIcons.História),
  },
  {
    label: "Tecnologia",
    value: "Tecnologia",
    icon: React.createElement(temaIcons.Tecnologia),
  },
];
