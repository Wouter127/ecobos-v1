import Layout from "../../components/layout";
import { shopItems } from "../../lib/categories";
import CategorySection from "../../components/category-section";
import ProductSection from "../../components/product-section";
import { getShopItem, getCrumbs } from "../../lib/getcategory";
import Product from "../../components/product";
import ShopNavigation from "../../components/shop-navigation";
import slugify from "../../lib/slugify";
import BreadCrumbs from "../../components/breadcrumbs";
import axios from "../../lib/axios";

// export const getStaticPaths = async () => {
//   const paths = getAllProductPaths(shopItems);
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticPaths = async () => {
  const response = await axios
    .get(`/api/categorypaths`)
    .then((res) => res.data);
  const paths = getAllProductPaths(response);
  return {
    paths,
    fallback: false,
  };
};

function getPaths(shopItems, parentTitles = [], paths = []) {
  shopItems.map((shopItem) => {
    const currentTitles = [...parentTitles, shopItem.slug];
    paths.push(currentTitles);
    if (
      shopItem.recursive_products &&
      shopItem.recursive_products.length != 0
    ) {
      getPaths(shopItem.recursive_products, currentTitles, paths);
    }
    if (shopItem.children && shopItem.children.length != 0) {
      return getPaths(shopItem.children, currentTitles, paths);
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

// function getPaths(shopItems, parentTitles = [], paths = []) {
//   shopItems.map((shopItem) => {
//     const currentTitles = [...parentTitles, slugify(shopItem.name.toString())];
//     paths.push(currentTitles);
//     if (shopItem.items && shopItem.items.length != 0) {
//       return getPaths(shopItem.items, currentTitles, paths);
//     }
//   });
//   console.log("all paths", paths);
//   return paths;
// }

// function getAllProductPaths(shopItems) {
//   const paths = getPaths(shopItems);
//   return paths.map((shopItem) => {
//     return {
//       params: { shopItems: shopItem },
//     };
//   });
// }

export default function Category({ activeShopItem, crumbs }) {
  let categories;
  let products;
  let product;
  if (activeShopItem.children && activeShopItem.children.length != 0) {
    // this is a page with categories
    categories = (
      <CategorySection
        key={activeShopItem.id}
        categories={activeShopItem.children}
        title={activeShopItem.name}
      ></CategorySection>
    );
  }
  if (
    activeShopItem.recursive_products &&
    activeShopItem.recursive_products.length != 0
  ) {
    products = (
      <ProductSection
        key={activeShopItem.id}
        categories={activeShopItem.recursive_products}
        title={activeShopItem.name + " producten"}
      ></ProductSection>
    );
  }
  if (!activeShopItem.children && !activeShopItem.recursive_products) {
    product = <Product product={activeShopItem}></Product>;
  }
  return (
    <Layout title={activeShopItem.name}>
      <ShopNavigation categories={shopItems}></ShopNavigation>
      <BreadCrumbs crumbs={crumbs}></BreadCrumbs>
      {categories}
      {products}
      {product}
    </Layout>
  );
}

// export default function Category({ activeShopItem, crumbs }) {
//   let layout;
//   console.log(activeShopItem);
//   if (activeShopItem.items) {
//     // this is a page with categories
//     layout = (
//       <CategorySection
//         categories={activeShopItem.items}
//         title={activeShopItem.name}
//       ></CategorySection>
//     );
//   } else {
//     // this is a page with products
//     layout = <Product product={activeShopItem}></Product>;
//   }
//   return (
//     <Layout title={activeShopItem.name}>
//       <ShopNavigation categories={shopItems}></ShopNavigation>
//       <BreadCrumbs crumbs={crumbs}></BreadCrumbs>
//       {layout}
//     </Layout>
//   );
// }

// export async function getStaticProps({ params }) {
//   // Add the "await" keyword like this
//   const activeShopItem = getShopItem(params.shopItems, shopItems);
//   const crumbs = getCrumbs(params.shopItems, shopItems);
//   return {
//     props: {
//       activeShopItem,
//       crumbs,
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const response = await axios
    .get(`/api/categorypaths`)
    .then((res) => res.data);
  const activeShopItem = getShopItem(params.shopItems, response);
  const crumbs = getCrumbs(params.shopItems, response);
  return {
    props: {
      activeShopItem,
      crumbs,
    },
  };
}
