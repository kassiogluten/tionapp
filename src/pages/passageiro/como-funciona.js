import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Passageiro/Content";
import { FooterCTA } from "../../components/FooterCTA";
import { SobreOApp } from "../../components/Home/SobreOApp";

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Como funciona | Tion App</title>
        <meta property="og:title" content="Como funciona" />
        <meta
          name="description"
          content="Viage para onde quiser."
        />
        <meta
          property="og:description"
          content="Viage para onde quiser."
        />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero
        titulo="Viage para onde quiser."
        desc="Solicite o carro e viage pela cidade, com conforto e segurança."
        imagem="/carros.jpg"
      />
      <Content/>
      <SobreOApp/>
      <Footer />
    </>
  );
}
