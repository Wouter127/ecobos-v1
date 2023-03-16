import Layout from "../../components/layout";
import { categories, categoriesById, products } from "../../lib/categories";
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
      <div>
      <div className="bg-gray-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
    <h2 className="text-2xl font-bold text-gray-900">Producten</h2>

    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
      {products.map((product) => (
        <div key={product.title} className="group relative">
          <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
          {product.description}
          </h3>
          <p className="text-base font-semibold text-gray-900">
            {product.title}
          </p><p className="text-base font-light text-gray-900">
            € {product.price}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>  
      </div>
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
