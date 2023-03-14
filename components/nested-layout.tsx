import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./navigation";
import ShopNavigation from "./shop-navigation";

export default function Layout({ children, title, categories }: any) {
  return (
    <>
      <ShopNavigation categories={categories}></ShopNavigation>
      {children}
    </>
  );
}
