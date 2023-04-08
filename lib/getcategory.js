import slugify from "./slugify";

// export function getShopItem(paths, categories) {
//   const shopItem = categories.find(
//     (shopItem) => slugify(shopItem.name.toString()) == paths[0]
//   );
//   paths = paths.slice(1);
//   if (shopItem.items && shopItem.items.length != 0 && paths.length != 0) {
//     return getShopItem(paths, shopItem.items);
//   } else {
//     return shopItem;
//   }
// }

export function getShopItem(paths, categories) {
  console.log(paths);
  const shopItem = categories.find((shopItem) => shopItem.slug == paths[0]);
  console.log(shopItem);
  paths = paths.slice(1);
  if (shopItem.children && shopItem.children.length != 0 && paths.length != 0) {
    return getShopItem(paths, shopItem.children);
  } else if (
    shopItem.recursive_products &&
    shopItem.recursive_products.length != 0 &&
    paths.length != 0
  ) {
    return getShopItem(paths, shopItem.recursive_products);
  } else {
    return shopItem;
  }
}

// export function getCrumbs(paths, categories, crumbs = []) {
//   const shopItem = categories.find(
//     (shopItem) => slugify(shopItem.name.toString()) == paths[0]
//   );
//   crumbs.push(shopItem.name);
//   paths = paths.slice(1);
//   if (shopItem.items && shopItem.items.length != 0 && paths.length != 0) {
//     getCrumbs(paths, shopItem.items, crumbs);
//   }
//   return crumbs;
// }

export function getCrumbs(paths, categories, crumbs = []) {
  const shopItem = categories.find((shopItem) => shopItem.slug == paths[0]);
  crumbs.push(shopItem.name);
  paths = paths.slice(1);
  if (shopItem.children && shopItem.children.length != 0 && paths.length != 0) {
    getCrumbs(paths, shopItem.children, crumbs);
  } else if (
    shopItem.recursive_products &&
    shopItem.recursive_products.length != 0 &&
    paths.length != 0
  ) {
    getCrumbs(paths, shopItem.recursive_products, crumbs);
  }
  return crumbs;
}
