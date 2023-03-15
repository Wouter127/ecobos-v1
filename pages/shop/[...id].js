import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { categories } from "../../lib/categories";
import CategorySection from "../../components/category-section"

export const getStaticPaths = async () => {
  const paths = getAllCategoryIds(categories);
  return {
    paths,
    fallback: false,
  };
};

// function getAllCategoryIds() {
//   const paths = []
//   categories.map((category) => {
//     paths.push([category.id])
//     if (category.items){
      
//       category.items.map((subCategory) => {
//         paths.push([category.id, subCategory.id])
//       })
//       }

//   });
//   console.log(paths)
//   const test = paths.map((category) => {
//     return {
//       params: {id: [category.toString()]},
//       };
//   });
//   console.log(test)
//   return test;
// }
function getPaths(categories, parentIds = [], paths = []) {
  categories.map((category) => {
    const currentIds = [...parentIds, category.id.toString()];
    paths.push(currentIds);
    if (category.items.length != 0) {
      return getPaths(category.items, currentIds, paths);
    } else {
      return
    }
  });
  return paths
}
function getAllCategoryIds(categories) {
  const paths = getPaths(categories)
  return paths.map((category) => {
    console.log(category)
    return {
      params: {id: category},
      };
  });
}

export default function Category({categoryData}) {
  return (
    <Layout title={categoryData.title}>
      <CategorySection categories={categoryData.items} title={categoryData.title}>
      </CategorySection>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  // Add the "await" keyword like this:
  const categoryData = categories.find((category) => category.id.toString() == params.id);
  return {
    props: {
      categoryData,
    },
  };
};
