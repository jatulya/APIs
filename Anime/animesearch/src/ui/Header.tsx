import React from "react";
import type { HeaderProps } from "../interfaces/types/propTypes";

export const Header: React.FC<HeaderProps> = ({
  title,
  variant = "primary",
}) => {

  return variant === "primary" ? (
    <h1 className={`box m-4 text-5xl font-bold text-center text-dark`}>
      {title}
    </h1>
  ) : (
    <h2 className={`box-sm m-4 text-3xl font-semibold text-center text-dark`}>
      {title}
    </h2>
  );
};
