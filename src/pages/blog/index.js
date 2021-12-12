import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Blog/Content";
import { FooterCTA } from "../../components/FooterCTA";

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Conheça o Tion | Tion App</title>
        <meta property="og:title" content="Conheça o Tion" />
        <meta
          name="description"
          content="Nosso destino é o bem para as pessoas"
        />
        <meta
          property="og:description"
          content="Nosso destino é o bem para as pessoas"
        />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero
        titulo="Blog" desc="Novidades, notícias, atualizações, dicas..."
      />
      <Content/>
      <Footer />
    </>
  );
}
