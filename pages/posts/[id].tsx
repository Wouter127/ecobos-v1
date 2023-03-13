import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../../components/layout";
import { posts } from "../blog";

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
export default function Post({
  postData,
}: {
  postData: { title: string; date: string; article: string; id: string };
}) {
  return (
    <Layout title={postData.id}>
      <article className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl">{postData.title}</h1>
        <p>{postData.date}</p>

        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.article }} />
        <br />
        <Link className="text-xl underline hover:text-blue-500" href="/blog">
          Terug naar overzicht
        </Link>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // Add the "await" keyword like this:
  const postData = posts[params.id];

  return {
    props: {
      postData,
    },
  };
};
