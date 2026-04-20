import workPoster from "@/assets/work-poster.jpg";
import workBranding from "@/assets/work-branding.jpg";
import workEditorial from "@/assets/work-editorial.jpg";
import workZine from "@/assets/work-zine.jpg";

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
    id: "campus-fest",
    title: "Campus Music Festival",
    year: "2024",
    tags: ["Poster", "Typography"],
    cover: workPoster,
    description:
      "A poster series for the annual student-run music festival. Bold display type, riso-inspired color, and a playful grid that came alive across flyers, social, and merch.",
  },
  {
    id: "cafe-brand",
    title: "Linden & Co. Cafe",
    year: "2024",
    tags: ["Branding", "Print"],
    cover: workBranding,
    description:
      "Identity system for a small campus cafe — wordmark, packaging, and a palette pulled from morning light through linen curtains.",
  },
  {
    id: "literary-mag",
    title: "Margins, Issue 03",
    year: "2023",
    tags: ["Editorial", "Layout"],
    cover: workEditorial,
    description:
      "Art direction and layout for the student literary magazine. Quiet typography, generous margins, and full-bleed photography to let the writing breathe.",
  },
  {
    id: "field-zine",
    title: "Field Notes Zine",
    year: "2023",
    tags: ["Illustration", "Zine"],
    cover: workZine,
    description:
      "A self-published zine of botanical illustrations and observational drawings collected over a semester of slow walks.",
  },
];
