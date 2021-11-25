import Head from "next/head";
import { Cadastro } from "../components/Cadastro";
import { EscolhaCategoria } from "../components/EscolaCategoria";
import { Footer } from "../components/Footer";
import { FooterCTA } from "../components/FooterCTA";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { NossasVantagens } from "../components/NossasVantagens";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tion App | Seja um motorista</title>
        <meta property="og:title" content="Tion App | Seja um motorista" />
        <meta name="description" content="Seja um motorista Tion App" />
        <meta property="og:description" content="Seja um motorista Tion App" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero />
      <EscolhaCategoria />
      <NossasVantagens />
      <Cadastro />
      <FooterCTA/>
      <Footer/>
    </>
  );
}
