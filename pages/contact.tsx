import Link from "next/link";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="mx-auto max-w-7xl px-2 text-4xl sm:px-6 lg:px-8">
        <h1 className="text-2xl">Contact</h1>
        <Link className="text-xl underline hover:text-blue-500" href="/">
          Back to home
        </Link>
      </section>
    </Layout>
  );
}
