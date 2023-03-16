export default function getCategory(paths, categories) {
  const category = categories.find((category) => category.id.toString() == paths[0])
  paths = paths.slice(1);
  if(category.items.length != 0 && paths.length != 0){
    return getCategory(paths, category.items)
  }
  else{
    return category
  }
}