import { Heading, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { HeroBlog } from "../../components/Blog/HeroBlog";
import { Footer } from "../../components/Footer";
import { FooterCTA } from "../../components/FooterCTA";
import { Header } from "../../components/Header";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Blog | Tion App</title>
        {/* <meta property="og:title" content="Tion App" />
        <meta name="description" content="Seja um motorista Tion App" />
        <meta property="og:description" content="Seja um motorista Tion App" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" /> */}
      </Head>
      <Header />
      <HeroBlog/>
      <FooterCTA />
      <Footer />
    </>
  );
}
