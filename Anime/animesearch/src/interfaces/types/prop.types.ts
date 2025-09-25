import type { ChangeEvent, FormEvent } from "react";
import type { AnimeData } from "./data.types";

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

export interface AnimeCardProps {
  anime: AnimeData;
}

export interface LoadingProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};


