import Head from "next/head";
import Navigation from "./navigation";

export default function Layout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title} - Ecobos</title>
      </Head>
      <Navigation></Navigation>
      {children}
    </>
  );
}
