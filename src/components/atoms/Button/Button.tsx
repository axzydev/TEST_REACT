import { ButtonProps } from "./Button.types";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  //aqui estamos definiendo que el color es opcional y si no se le pasa nada por defecto sera primary
  color = "primary",
}) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded-md ${
        //aqui estamos definiendo que si el color es primary sera azul y si no sera rojo
        color === "primary" ? "bg-blue-500" : "bg-red-500"
      }`}
      //aqui estamos definiendo que el evento onClick sera el que se le pase por parametro
      onClick={onClick}
    >
      {label}
    </button>
  );
};
