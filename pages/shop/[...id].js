import Layout from "../../components/layout";
import { categories, categoriesById } from "../../lib/categories";
import CategorySection from "../../components/category-section"
import getCategory from "../../lib/getcategory";

export const getStaticPaths = async () => {
  const paths = getAllCategoryIds(categories);
  return {
    paths,
    fallback: false,
  };
};

function getPaths(categories, parentIds = [], paths = []) {
  categories.map((category) => {
    const currentIds = [...parentIds, category.id.toString()];
    paths.push(currentIds);
    if (category.items.length != 0) {
      return getPaths(category.items, currentIds, paths);
    }
  });
  return paths
}

function getAllCategoryIds(categories) {
  const paths = getPaths(categories)
  return paths.map((category) => {
    return {
      params: {id: category},
      };
  });
}

export default function Category({activeCategory}) {
  return (
    <Layout title={activeCategory.title}>
      {activeCategory.items.length != 0
      ?
      <CategorySection categories={activeCategory.items} title={activeCategory.title}>
      </CategorySection>
      :
      <h1>hier komen de producten</h1>
      }
    </Layout>
  );
}

export async function getStaticProps({params}) {
  // Add the "await" keyword like this
  const activeCategory = getCategory(params.id, categories)
  console.log(activeCategory)
  return {
    props: {
      activeCategory,
    },
  };
};
