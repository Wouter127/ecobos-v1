import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: any) {
  return (
    <Layout title={postData.id}>
      <article className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl">{postData.title}</h1>
        <p>{postData.date}</p>

        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <Link className="text-xl underline hover:text-blue-500" href="/blog">
          Terug naar overzicht
        </Link>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
