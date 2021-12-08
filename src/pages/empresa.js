import { Heading, Center } from "@chakra-ui/react";
import Head from "next/head";
import { Cadastro } from "../components/Cadastro";
import { EscolhaCategoria } from "../components/EscolhaCategoria";
import { Footer } from "../components/Footer";
import { FooterCTA } from "../components/FooterCTA";
import { Header } from "../components/Header";
import { NossasVantagens } from "../components/NossasVantagens";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tion App</title>
        <meta property="og:title" content="Tion App" />
        <meta name="description" content="Seja um motorista Tion App" />
        <meta property="og:description" content="Seja um motorista Tion App" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Center minH={200}>
        <Heading>Página em construção</Heading>
      </Center>
      <Footer/>
    </>
  );
}
