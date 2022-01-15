import React from "react";
import {
  Flex,
  Wrap,
} from "@chakra-ui/react";


import { Card } from "./Card";
import { Esqueleto } from "./Esqueleto";

export function ContentDescontos({loading, parceiros}) {

  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Wrap
        pb="3rem"
        align="center"
        maxW={1200}
        w="full"
        justify="center"
        color="pessego"
        spacing={8}
      >
        {!loading ? (
          parceiros.map((parceiro) => (
            <Card
              key={parceiro.heading}
              heading={parceiro.heading}
              img={parceiro.img}
              text={parceiro.text}
              address={parceiro.address}
              whatsapp={parceiro.whatsapp}
              tel={parceiro.tel || parceiro.whatsapp}
            />
          ))
        ) : (
          <>
            <Esqueleto />
            <Esqueleto />
            <Esqueleto />
          </>
        )}
      </Wrap>
    </Flex>
  );
}
