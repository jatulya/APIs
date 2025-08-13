import React from "react";
import type { HeaderProps } from "../interfaces/types/propTypes";

export const Header: React.FC<HeaderProps> = ({
  title,
  variant = "primary",
}) => {
  const headerClass = `m-4 text-center text-dark`;
  if( variant === "primary")
    return (
    <h1 className={`box text-5xl font-bold ${headerClass}`}>
      {title}
    </h1>
  ); 
  else if (variant === "secondary") return (
    <h2 className={`box-sm text-3xl font-semibold ${headerClass}`}>
      {title}
    </h2>
  );
  else return (
    <h3 className={`text-2xl font-semibold ${headerClass} text-left`}>
      {title}
    </h3>
  );
};
