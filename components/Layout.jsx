import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <div className="">
        <header>
          <Navbar />
        </header>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
