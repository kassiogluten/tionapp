import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Produtos/Content";
import { FooterCTA } from "../../components/FooterCTA";

export default function NossosProdutos() {
  return (
    <>
      <Head>
        <title>Nossos produtos  | Tion App</title>
        <meta property="og:title" content="Nossos produtos" />
        <meta name="description" content="Os pilares de serviço do Tion" />
        <meta
          property="og:description"
          content="Os pilares de serviço do Tion"
        />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero
        fit="contain"
        titulo="Os pilares de serviço do Tion"
        subtitulo="Nossos produtos"
        desc="Mudar a forma como as pessoas solicitam viagens e se deslocam é só o começo."
        imagem="/iphone.png"
      />
      <Content />
      <FooterCTA />
      <Footer />
    </>
  );
}
