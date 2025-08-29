import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
export const getCvFileId = (lang: string) => {
  return lang === "pt"
    ? "1mfwrYv6SRt6zOBJ5ucNoJV11hQlGZlUO"
    : "1pw40HyISPwzfphZ7olwgQTlKAvyLGYSX";
};
