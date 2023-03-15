import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import header from "../../public/images/header-home-ecobos.jpeg";
import ShopNavigation from "../../components/shop-navigation";
import CategorySection from "../../components/category-section";
import {categories} from "../../lib/categories"

export default function Shop() {
  return (
    <Layout title="Shop">
      <ShopNavigation categories={categories}></ShopNavigation>
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
    <CategorySection categories={categories}></CategorySection>
    </Layout>
  );
}
