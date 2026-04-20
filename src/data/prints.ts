import florals from "@/assets/print-florals.jpg";
import abstract from "@/assets/print-abstract.jpg";
import type1 from "@/assets/print-type.jpg";
import mug from "@/assets/print-mug.jpg";

export type PrintCategory = "Florals" | "Abstract" | "Typography" | "Illustration";

export type Print = {
  id: string;
  title: string;
  category: PrintCategory;
  sizes: string;
  priceFrom: string;
  image: string;
  inprntUrl: string;
};

export const prints: Print[] = [
  {
    id: "wild-poppies",
    title: "Wild Poppies",
    category: "Florals",
    sizes: "8×10 · 12×16 · 18×24",
    priceFrom: "$22",
    image: florals,
    inprntUrl: "https://www.inprnt.com/",
  },
  {
    id: "morning-shapes",
    title: "Morning Shapes",
    category: "Abstract",
    sizes: "8×10 · 12×16 · 18×24",
    priceFrom: "$22",
    image: abstract,
    inprntUrl: "https://www.inprnt.com/",
  },
  {
    id: "soft-hours",
    title: "Soft Hours",
    category: "Typography",
    sizes: "8×10 · 12×16",
    priceFrom: "$20",
    image: type1,
    inprntUrl: "https://www.inprnt.com/",
  },
  {
    id: "first-cup",
    title: "First Cup",
    category: "Illustration",
    sizes: "5×7 · 8×10 · 12×16",
    priceFrom: "$18",
    image: mug,
    inprntUrl: "https://www.inprnt.com/",
  },
];

export const categories: ("All" | PrintCategory)[] = [
  "All",
  "Florals",
  "Abstract",
  "Typography",
  "Illustration",
];
