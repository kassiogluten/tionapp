import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Blog/Content";
import { FooterCTA } from "../../components/FooterCTA";
import { ContentPrivacidade } from "../../components/Passageiro/ContentPrivacidade";

export default function Privacidade() {
  return (
    <>
      <Head>
        <title>Política de privacidade | Tion App</title>
        <meta property="og:title" content="Política de privacidade" />
        <meta name="description" content="Segurança e privacidade" />
        <meta property="og:description" content="Segurança e privacidade" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Segurança e privacidade" />
      <ContentPrivacidade/>
      <Footer />
    </>
  );
}
