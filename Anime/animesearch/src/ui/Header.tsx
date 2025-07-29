import React from "react";
import type { HeaderProps } from "../interfaces/types/propTypes";


export const Header: React.FC<HeaderProps> = ({
  title,
  variant = "primary",
}) => {
  return variant === "primary" ? (
    <h1 className="text-5xl font-bold text-center mb-4">{title}</h1>
  ) : (
    <h2 className="text-3xl font-semibold text-center mb-3">{title}</h2>
  );
};
