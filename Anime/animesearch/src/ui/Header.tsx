import React from "react";
import type { HeaderProps } from "../interfaces/types/propTypes";

export const Header: React.FC<HeaderProps> = ({
  title,
  variant = "primary",
}) => {
  const headerClass = "box m-4"; // box shadow, margin, bg, padding

  return variant === "primary" ? (
    <h1 className={`${headerClass} text-5xl font-bold text-center text-dark`}>
      {title}
    </h1>
  ) : (
    <h2 className={`${headerClass} text-3xl font-semibold text-center text-dark`}>
      {title}
    </h2>
  );
};
