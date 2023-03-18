import slugify from "./slugify";

export function getShopItem(paths, categories) {
  const shopItem = categories.find(
    (shopItem) => slugify(shopItem.title.toString()) == paths[0]
  );
  paths = paths.slice(1);
  if (shopItem.items && shopItem.items.length != 0 && paths.length != 0) {
    return getShopItem(paths, shopItem.items);
  } else {
    return shopItem;
  }
}

export function getCrumbs(paths, categories, crumbs = []) {
  const shopItem = categories.find(
    (shopItem) => slugify(shopItem.title.toString()) == paths[0]
  );
  crumbs.push(shopItem.title);
  paths = paths.slice(1);
  if (shopItem.items && shopItem.items.length != 0 && paths.length != 0) {
    getCrumbs(paths, shopItem.items, crumbs);
  }
  return crumbs;
}
