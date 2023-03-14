import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import header from "../public/images/header-home-ecobos.jpeg";
import ShopNavigation from "../components/shop-navigation";
import CategorySection from "../components/category-section";

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://picsum.photos/600",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://picsum.photos/601",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://picsum.photos/602",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://picsum.photos/603",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://picsum.photos/604",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://picsum.photos/605",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Shop() {
  return (
    <Layout title="Shop">
      <ShopNavigation></ShopNavigation>
      <header>
        <Image
          src={header}
          alt={"Ecobos header"}
          placeholder="blur"
          className="absolute -z-10 h-[calc(50vh-4rem)] w-screen object-cover"
        ></Image>
        <div className="mx-auto grid h-[calc(50vh-4rem)] max-w-7xl content-center px-2 sm:px-6 lg:px-8">
          <h1 className="text-4xl">Ecobos webshop</h1>
        </div>
      </header>
    <CategorySection categories={callouts}></CategorySection>
    </Layout>
  );
}
