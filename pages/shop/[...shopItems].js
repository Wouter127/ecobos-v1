import Layout from "../../components/layout";
import { shopItems } from "../../lib/categories";
import CategorySection from "../../components/category-section";
import { getShopItem, getCrumbs } from "../../lib/getcategory";
import Product from "../../components/product";
import ShopNavigation from "../../components/shop-navigation";
import slugify from "../../lib/slugify";
import BreadCrumbs from "../../components/breadcrumbs";

export const getStaticPaths = async () => {
  const paths = getAllProductPaths(shopItems);
  return {
    paths,
    fallback: false,
  };
};

function getPaths(shopItems, parentTitles = [], paths = []) {
  shopItems.map((shopItem) => {
    const currentTitles = [...parentTitles, slugify(shopItem.title.toString())];
    paths.push(currentTitles);
    if (shopItem.items && shopItem.items.length != 0) {
      return getPaths(shopItem.items, currentTitles, paths);
    }
  });
  return paths;
}

function getAllProductPaths(shopItems) {
  const paths = getPaths(shopItems);
  return paths.map((shopItem) => {
    return {
      params: { shopItems: shopItem },
    };
  });
}

export default function Category({ activeShopItem, crumbs }) {
  let layout;
  console.log(activeShopItem);
  if (activeShopItem.items) {
    // this is a page with categories
    layout = (
      <CategorySection
        categories={activeShopItem.items}
        title={activeShopItem.title}
      ></CategorySection>
    );
  } else {
    // this is a page with products
    layout = <Product product={activeShopItem}></Product>;
  }
  return (
    <Layout title={activeShopItem.title}>
      <ShopNavigation categories={shopItems}></ShopNavigation>
      <BreadCrumbs crumbs={crumbs}></BreadCrumbs>
      {layout}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this
  const activeShopItem = getShopItem(params.shopItems, shopItems);
  const crumbs = getCrumbs(params.shopItems, shopItems);
  return {
    props: {
      activeShopItem,
      crumbs,
    },
  };
}
