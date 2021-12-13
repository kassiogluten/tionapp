import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Blog/Content";
import { FooterCTA } from "../../components/FooterCTA";
import { ContentPrivacidade } from "../../components/Passageiro/ContentPrivacidade";

export default function Faq() {
  return (
    <>
      <Head>
        <title>Perguntas frequentes | Tion App</title>
        <meta property="og:title" content="Perguntas frequentes" />
        <meta name="description" content="Dúvidas mais comuns" />
        <meta property="og:description" content="Dúvidas mais comuns" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Perguntas frequentes" />
      <Footer />
    </>
  );
}
