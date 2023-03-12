import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Blog({ allPostsData }: any) {
  return (
    <Layout title="Blog">
      <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl">Blog</h1>
        <div className="grid grid-cols-2 gap-4 py-4">
          {allPostsData.map(({ id, date, title }: any) => (
            <Link
              href={`/posts/${id}`}
              className="rounded-md bg-slate-800 p-4 hover:cursor-pointer hover:bg-slate-600"
              key={id}
            >
              {title}
              <br />
              {id}
              <br />
              {date}
            </Link>
          ))}
        </div>
        <Link className="text-xl underline hover:text-blue-500" href="/">
          Back to home
        </Link>
      </section>
    </Layout>
  );
}

// Static rendering, rendered once at build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Server side rendering, rendered every time at request
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
