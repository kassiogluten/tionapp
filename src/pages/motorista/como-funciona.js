import { Heading, Center, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Content } from "../../components/Motorista/Content";
import { FooterCTA } from "../../components/FooterCTA";
import { SobreOApp } from "../../components/Home/SobreOApp";
import { CTAHome } from "../../components/Home/CTAHome";

export default function ComoFunciona() {
  return (
    <>
      <Head>
        <title>Como funciona | Tion App</title>
        <meta property="og:title" content="Como funciona" />
        <meta
          name="description"
          content="Seja seu próprio chefe."
        />
        <meta
          property="og:description"
          content="Seja seu próprio chefe."
        />
        <meta property="og:image" content="/logo.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero
        titulo="Seja seu próprio chefe."
        desc="Trabalhe os dias e horário que quiser. Você no constrole do seu trabalho e indepedência financeira."
        imagem="/comofunciona-motorista.jpg"
      />
      <Content/>
      <CTAHome
        titulo="Venha fazer parte do nosso time de motoristas."
        desc="Nosso foco nos motoristas é estabilidade financeira, o Tion visa proporcionar uma taxa única mensal, sem taxas por cada corrida realizada."
        button="Cadastre-se"
        url="/cadastro"
        img="/cta-motorista.jpg"
        justify="flex-end"
        bp="20%"
      />
      <SobreOApp pt={200}/>
      <Footer />
    </>
  );
}
