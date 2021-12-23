import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ContentDescontos } from "../../components/Motorista/Descontos";

export default function Descontos() {
  return (
    <>
      <Head>
        <title>Descontos | Tion App</title>
        <meta property="og:title" content="Descontos" />
        <meta name="description" content="Parceiros" />
        <meta property="og:description" content="Parceiros" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero titulo="Descontos" desc="Conheça nossos parceiros e os descontos em seus produtos / serviços, oferecidos a todos nossos motoristas"/>
      <ContentDescontos/>
      <Footer />
    </>
  );
}
