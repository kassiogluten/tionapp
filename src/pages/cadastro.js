import Head from "next/head";
import { Cadastro } from "../components/Cadastro";
import { EscolhaCategoria } from "../components/EscolhaCategoria";
import { Footer } from "../components/Footer";
import { FooterCTA } from "../components/FooterCTA";
import { Header } from "../components/Header";
import { HeroCadastro } from "../components/HeroCadastro";
import { NossasVantagens } from "../components/NossasVantagens";

export default function Cadastre() {
  return (
    <>
      <Head>
        <title>Seja um motorista | Tion App</title>
        <meta property="og:title" content="Tion App | Seja um motorista" />
        <meta name="description" content="Seja um motorista Tion App" />
        <meta property="og:description" content="Seja um motorista Tion App" />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <HeroCadastro />
      <EscolhaCategoria titulo="Escolha a categoria que você deseja trabalhar" />
      <NossasVantagens />
      <Cadastro />
      <FooterCTA title="Se preferir, cadastre-se diretamente pelo app." desc="Baixe nosso app e comece a faturar agora mesmo."/>
      <Footer/>
    </>
  );
}
