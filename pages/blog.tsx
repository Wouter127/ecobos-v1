import Link from "next/link";
import Layout from "../components/layout";

export const posts = [
  {
    id: 0,
    title: "Two Forms of Pre-rendering",
    date: "2020-01-01",
    article:
      "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page. **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request. - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**. Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a hybrid Next.js app by using Static Generation for most pages and using Server-side Rendering for others.",
  },
  {
    id: 1,
    title: "When to Use Static Generation v.s. Server-side Rendering",
    date: "2020-01-02",
    article:
      "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request. You can use Static Generation for many types of pages, including: - Marketing pages - Blog posts - E-commerce product listings - Help and documentation You should ask yourself: 'Can I pre-render this page **ahead** of a user's request?' If the answer is yes, then you should choose Static Generation. On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request. In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.",
  },
];

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
export const getStaticProps = async () => {
  const allPostsData = posts;
  return {
    props: {allPostsData}
  };
};

// Server side rendering, rendered every time at request
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
