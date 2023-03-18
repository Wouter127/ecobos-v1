import ShopNavigation from "./shop-navigation";

export default function Layout({ children, categories }: any) {
  return (
    <>
      <ShopNavigation categories={categories}></ShopNavigation>
      {children}
    </>
  );
}
