import papaya from "@/assets/art-papaya.jpg";
import sorbet from "@/assets/art-raspberry-sorbet.jpg";
import sashimi from "@/assets/art-sashimi.jpg";
import mango from "@/assets/art-mango-croissant.jpg";
import dessert from "@/assets/art-more-dessert.jpg";
import tart from "@/assets/art-glass-tart.jpg";

export type WorkProject = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  cover: string;
  description: string;
};

export const workProjects: WorkProject[] = [
  {
    id: "more-dessert-please",
    title: "More Dessert, Please",
    year: "2025",
    tags: ["Poster", "Typography", "Photo"],
    cover: dessert,
    description:
      "An editorial poster celebrating peach and burnt almond + butterscotch ice cream from Benu in San Francisco. A study in glossy orange, oversized display type, and the kind of dessert worth designing around.",
  },
  {
    id: "sashimi",
    title: "Sashimi",
    year: "2025",
    tags: ["Illustration", "Lettering"],
    cover: sashimi,
    description:
      "A hand-illustrated study of three glossy nigiri — tuna (maguro) and salmon (sake) — layered with doodles, lettering, and tiny notes for every sushi lover's perfect bite.",
  },
  {
    id: "papaya",
    title: "Papaya",
    year: "2024",
    tags: ["Illustration", "Fruit Series"],
    cover: papaya,
    description:
      "A Hawaiian papaya bursting with radiant orange hues and tropical freshness. Part of an ongoing series of fruit portraits painted in Procreate.",
  },
  {
    id: "mango-croissant",
    title: "Mango Croissant",
    year: "2024",
    tags: ["Illustration", "Café Series"],
    cover: mango,
    description:
      "A buttery golden croissant filled with juicy mango — a dreamy treat for cozy café daydreams. Painted with attention to texture, lamination, and the way fruit catches the light.",
  },
  {
    id: "raspberry-sorbet",
    title: "Raspberry Sorbet",
    year: "2024",
    tags: ["Illustration", "Dessert Series"],
    cover: sorbet,
    description:
      "Two scoops of vibrant Italian raspberry sorbet to melt into summer afternoons. A quiet little still life with paper layers and pink polka dots.",
  },
  {
    id: "glass-tart",
    title: "Glass Tart",
    year: "2024",
    tags: ["Illustration", "Bakery Series"],
    cover: tart,
    description:
      "A slice of Japanese apple jelly tart for all your whimsical bakery dreams — glossy ruby red, perched on a paper liner, decorated with a hand-lettered apple tag.",
  },
];
