import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./navigation";
import ShopNavigation from "./shop-navigation";

export default function Layout({ children, title }: any) {
  return (
    <>
      <ShopNavigation></ShopNavigation>
      {children}
    </>
  );
}
