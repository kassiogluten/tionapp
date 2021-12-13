import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Content } from "../components/Blog/Content";
import { FooterCTA } from "../components/FooterCTA";
import { ContentTarifas } from "../components/ContentTarifas";

export default function Tarifas() {
  return (
    <>
      <Head>
        <title>Tarifas | Tion App</title>
        <meta property="og:title" content="Tarifas" />
        <meta name="description" content="Taxas e Bandeiradas" />
        <meta property="og:description" content="Taxas e Bandeiradas" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Tarifas" />
      <ContentTarifas />
      <Footer />
    </>
  );
}
