import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateFontDisplayName(value: string) {
  switch (value) {
    case "font-sans":
      return "Sans Serif"
    case "font-serif":
      return "Serif"
    case "font-mono":
      return "Mono"
    default:
      return value
  }
}
