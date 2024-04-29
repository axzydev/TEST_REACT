import React from "react";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  );
};
