import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "./layout";
import { posts } from "../pages/blog";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

function getAllPostIds() {
  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}
export default function CategorySection({categories}) {
  return (
    <div className="bg-gray-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
      {categories.map((category) => (
        <div key={category.title} className="group relative">
          <div className="sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
            <img
              src={category.imageSrc}
              alt={category.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={category.href}>
              <span className="absolute inset-0" />
              {category.title}
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            {category.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
  );
}

export const getStaticProps = async ({ params }) => {
  // Add the "await" keyword like this:
  const postData = posts[params.id];

  return {
    props: {
      postData,
    },
  };
};