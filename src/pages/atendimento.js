import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Content } from "../components/Blog/Content";
import { FooterCTA } from "../components/FooterCTA";
import { ContentTarifas } from "../components/ContentTarifas";
import { ContactForm } from "../components/ContactForm";

export default function Tarifas() {
  return (
    <>
      <Head>
        <title>Atendimento | Tion App</title>
        <meta property="og:title" content="Atendimento" />
        <meta name="description" content="Suporte e ajuda" />
        <meta property="og:description" content="Suporte e ajuda" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Atendimento" desc="Suporte e ajuda" />
      <ContactForm/>
      <FooterCTA />
      <Footer />
    </>
  );
}
