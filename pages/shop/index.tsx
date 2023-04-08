import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import header from "../../public/images/header-home-ecobos.jpeg";
import ShopNavigation from "../../components/shop-navigation";
import CategorySection from "../../components/category-section";
import { shopItems } from "../../lib/categories";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";

export default function Shop() {
  const [categoryData, setCategoryData] = useState(null);

  const fetchCategory = async (id = 0) => {
    const response = await axios.get(`/api/category/${id}`);
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategory();
      setCategoryData(data.data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <Layout title="Shop">
      <ShopNavigation categories={shopItems}></ShopNavigation>
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
      <CategorySection categories={categoryData}></CategorySection>
    </Layout>
  );
}
