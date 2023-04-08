import Head from "next/head";
import { useAuth } from "../hooks/auth";
import Navigation from "./navigation";

export default function Layout({ children, title }) {
  const { user } = useAuth({
    middleware: "guest",
  });

  return (
    <>
      <Head>
        <title>{title} - Ecobos</title>
      </Head>
      <Navigation user={user}></Navigation>
      {children}
    </>
  );
}
