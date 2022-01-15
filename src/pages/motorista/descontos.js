import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ContentDescontos } from "../../components/Motorista/Descontos/Content";

import React, { useEffect, useState } from "react";

import { firestore } from "../../lib/firebase";

export default function Descontos() {
  const [parceiros, setParceiros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getParceiros() {
      setLoading(true);
      const ref = await firestore
        .collectionGroup("parceiros")
        .orderBy("id", "asc")
        .get();

      setParceiros(ref.docs.map((doc) => doc.data()));
      setLoading(false);
      // console.log(parceiros);
    }
    getParceiros();
  }, []);
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
      <Hero
        titulo="Descontos"
        desc="Conheça nossos parceiros e os descontos em seus produtos / serviços, oferecidos a todos nossos motoristas"
      />
      <ContentDescontos loading={loading} parceiros={parceiros} />
      <Footer />
    </>
  );
}
