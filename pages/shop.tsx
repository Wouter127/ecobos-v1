import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import header from "../public/images/header-home-ecobos.jpeg";
import ShopNavigation from "../components/shop-navigation";

export default function Shop() {
  return (
    <Layout title="Shop">
      <ShopNavigation></ShopNavigation>
      <header>
        <Image
          src={header}
          alt={"Ecobos header"}
          placeholder="blur"
          className="absolute -z-10 h-[calc(100vh-4rem)] w-screen object-cover"
        ></Image>
        <div className="mx-auto grid h-[calc(100vh-4rem)] max-w-7xl content-center px-2 sm:px-6 lg:px-8">
          <h1 className="text-4xl">Ecobos webshop</h1>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
        <Link className="text-xl underline hover:text-blue-500" href="/">
          Back to home
        </Link>
      </section>
    </Layout>
  );
}
