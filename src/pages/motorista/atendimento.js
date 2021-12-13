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
        <title>Atendimento a motoristas | Tion App</title>
        <meta property="og:title" content="Atendimento a motoristas" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Atendimento a motoristas" />
      <Footer />
    </>
  );
}
