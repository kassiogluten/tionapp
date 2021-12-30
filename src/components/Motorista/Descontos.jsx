import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Box,
  Wrap,
} from "@chakra-ui/react";

import Image from "next/image";

export function ContentDescontos() {
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
        <Card
          heading="MAXIMUS ACADEMIA"
          img="/parceiro-maximus.jpeg"
          text="R$ 70 todos os dias e R$ 65,00 3x"
        />
        <Card
          heading="EXPRESSO LANCHES"
          img="/parceiro-expresso.jpeg"
          text="10% nos lanches (exceto refrigerantes)"
        />
        <Card
          heading="NOOVA CAR – MECÂNICA"
          img="/parceiro-noovacar.jpeg"
          text="15% na mão de obra"
        />
        <Card
          heading="AUTO BRILHO – LAVA JATO"
          img="/parceiro-autobrilho.jpeg"
          text="R$ 30 dentro e fora (limpeza básica) por R$ 25"
        />
        <Card
          heading="GS LAVA JATO "
          img="/parceiro-gs.jpeg"
          text="30 dentro e fora (limpeza básica) por R$ 25"
        />
        <Card
          heading="REGIS PIZZARIA"
          img="/parceiro-regis.jpeg"
          text="10% em geral"
        />
        <Card
          heading="CENTRO AUTOMOTIVO TOBOBA "
          img="/parceiro-toboga.jpeg"
          text="15% na mão de obra"
        />
        <Card
          heading="POSTO DO IRMÃO"
          img="/parceiro-postoirmao.jpeg"
          text="Descontos: 
            0.10 R$ centavos gasolina 
            0.05 R$ álcool e diesel"
        />
        <Card
          heading="POSTO ATLANTA"
          img="/parceiro-atlanta.jpeg"
          text="Desconto de 0,10 gasolina/etanol - NO DINHEIRO"
        />
      </Wrap>
    </Flex>
  );
}

const Card = (props) => (
  <VStack
    width={300}
    h={400}
    position="relative"
    m="1rem"
    bg="branco"
    align="center"
  >
    <Box width={300} height={300} pos="relative" overflow="hidden">
      <Box
        sx={{
          filter: "blur(8px)",
          WebkitFilter: "blur(8px)",
          transform: "scale(1.2)",
        }}
        w="full"
        h={"full"}
        pos="absolute"
        bgImage={props.img}
        bgSize="auto"
      />
      <Image
        objectFit="contain"
        quality={90}
        alt={props.heading}
        src={props.img}
        layout="fill"
      />
    </Box>
    <Box w="full" align="start" p="2rem">
      <Heading fontSize={28} lineHeight={1} pb={4} maxW={228}>
        {props.heading}
      </Heading>
      <Text>{props.text}</Text>
    </Box>
    <Box
      position="absolute"
      bottom={0}
      h="4px"
      w="70%"
      bgGradient="linear(to-r, pessego, gradient2)"
    />
  </VStack>
);
