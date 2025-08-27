import type { ChangeEvent, FormEvent } from "react";

export interface HeaderProps {
  title: string;
  variant?: "primary" | "secondary" | "ternary";
  claassName?: string;
}

export interface HyperlinkProps {
  href: string;
  title: string;
}

export interface CustomSearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
}
