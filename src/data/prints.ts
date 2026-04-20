import papaya from "@/assets/art-papaya.jpg";
import sorbet from "@/assets/art-raspberry-sorbet.jpg";
import sashimi from "@/assets/art-sashimi.jpg";
import mango from "@/assets/art-mango-croissant.jpg";
import dessert from "@/assets/art-more-dessert.jpg";
import tart from "@/assets/art-glass-tart.jpg";

export type PrintCategory = "Fruit" | "Dessert" | "Savory" | "Poster";

export type Print = {
  id: string;
  title: string;
  category: PrintCategory;
  description: string;
  image: string;
  inprntUrl: string;
};

export const prints: Print[] = [
  {
    id: "papaya",
    title: "Papaya",
    category: "Fruit",
    description:
      "A Hawaiian papaya bursting with radiant orange hues and tropical freshness.",
    image: papaya,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
  {
    id: "raspberry-sorbet",
    title: "Raspberry Sorbet",
    category: "Dessert",
    description:
      "Two scoops of vibrant Italian raspberry sorbet to melt into summer afternoons.",
    image: sorbet,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
  {
    id: "sashimi",
    title: "Sashimi",
    category: "Savory",
    description:
      "A selection of three glossy nigiri — tuna (maguro) and salmon (sake) — adorned with doodles for every sushi lover's perfect bite.",
    image: sashimi,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
  {
    id: "mango-croissant",
    title: "Mango Croissant",
    category: "Dessert",
    description:
      "A buttery golden croissant filled with juicy mango — a dreamy treat for your cozy café daydreams.",
    image: mango,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
  {
    id: "more-dessert-please",
    title: "More Dessert, Please",
    category: "Poster",
    description:
      "Glossy orange dessert poster featuring peach and burnt almond + butterscotch ice cream from Benu, San Francisco.",
    image: dessert,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
  {
    id: "glass-tart",
    title: "Glass Tart",
    category: "Dessert",
    description:
      "A slice of Japanese apple jelly tart for all your whimsical bakery dreams.",
    image: tart,
    inprntUrl: "https://www.inprnt.com/gallery/artbyemmah/",
  },
];

export const categories: ("All" | PrintCategory)[] = [
  "All",
  "Fruit",
  "Dessert",
  "Savory",
  "Poster",
];
