import Head from "next/head";
import { Footer } from "../components/Footer";
import { FooterCTA } from "../components/FooterCTA";
import { Header } from "../components/Header";
import { Blog } from "../components/Home/Blog";
import { Cards } from "../components/Home/Cards";
import { CTAHome } from "../components/Home/CTAHome";
import { HeroHome } from "../components/Home/HeroHome";
import { HowTo } from "../components/Home/HowTo";
import { Revolution } from "../components/Home/Revolution";
import { SobreOApp } from "../components/Home/SobreOApp";
import { VantagensPassageiro } from "../components/Home/VantagensPassageiro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tion App | Página Inicial</title>
        <meta property="og:title" content="Tion App | Página Inicial" />
        <meta name="description" content="Aplicativo de mobilidade urbana" />
        <meta
          property="og:description"
          content="Aplicativo de mobilidade urbana"
        />
        <meta property="og:image" content="favicon.jpg" key="ogimage" />
      </Head>
      <Header />
      <HeroHome />
      <Revolution />
      <VantagensPassageiro />
      <SobreOApp />
      <CTAHome
        titulo="Tenha sua independência financeira de verdade."
        desc="Nosso foco nos motoristas é estabilidade financeira, o Tion visa proporcionar uma taxa única mensal, sem taxas por cada corrida realizada."
        button="Saiba mais"
        url="/motorista/como-funciona"
        img="/cta-home.jpg"
        justify="flex-start"
        bp="60%"
      />
      {/* <HowTo /> */}
      <Cards />
      <Blog />
      <FooterCTA img="/phone.png" />
      <Footer />
    </>
  );
}
