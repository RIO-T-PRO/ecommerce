// lib/data/hero.ts

export interface HeroSlide {
  id: number;
  title: string;
  offer: string;
  subtitle: string;
  image: string;
}

export const heroData: HeroSlide[] = [
  {
    id: 1,
    title: "Essential Summer",
    offer: "Season Launch: Buy 2 Get 1 Free",
    subtitle: "Breathable linens and vibrant tones for the sun.",
    image: "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-one.jpg",
  },
  {
    id: 2,
    title: "Premium Denim",
    offer: "Flat 40% OFF Today Only!",
    subtitle: "Timeless fits crafted from authentic Japanese selvedge.",
    image: "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-two.jpg",
  },
  {
    id: 3,
    title: "Active Performance",
    offer: "Exclusive: Extra 15% OFF",
    subtitle: "Seamless comfort for your highest intensity workouts.",
    image: "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-three.jpg",
  },
  {
    id: 4,
    title: "Signature Suites",
    offer: "Up to 60% OFF Last Season",
    subtitle: "Modern tailoring for the sophisticated silhouette.",
    image: "https://ik.imagekit.io/8llkguagpe/New%20Folder/hero-four.jpg",
  },
];
