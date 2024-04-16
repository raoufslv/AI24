import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roundUp(number: string | number): number {
  const parsedNumber = parseFloat(number.toString());
  const roundedNumber = Math.ceil(parsedNumber);

  return roundedNumber === parsedNumber
    ? Math.floor(parsedNumber)
    : roundedNumber;
}
