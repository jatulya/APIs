import React from "react";
import type { HeaderProps } from "../interfaces/types/propTypes";

export const Header: React.FC<HeaderProps> = ({
  title,
  variant = "primary",
  claassName,
}) => {
  const headerClass = `m-4 text-center text-dark`;

  let variantClass = "";
  if (variant === "primary") 
      variantClass = "box text-5xl font-bold";
  else if( variant === "secondary") 
      variantClass = "box-sm text-3xl font-semibold"
  else
      variantClass = "text-2xl font-semibold";

    return (
    <h1 className={`${headerClass} ${variantClass} ${claassName}`}>
      {title}
    </h1>
  ); 
};
