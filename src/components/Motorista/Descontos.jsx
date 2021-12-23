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
          text="70 todos os dias e 65,00 3x"
          cat="cat"
        />
        <Card
          heading="EXPRESSO LANCHES"
          img="/parceiro-expresso.jpeg"
          text="10% nos lanches e nos refrigerantes não"
          cat="cat"
        />
        <Card
          heading="NOVA CAR – MECÂNICA"
          img="/parceiro-noovacar.jpeg"
          text="15% na mão de obra"
          cat="cat"
        />
        <Card
          heading="AUTO BRILHO – LAVA JATO"
          img="/parceiro-autobrilho.jpeg"
          text="30 dentro e fora (limpeza básica) por 25 R$"
          cat="cat"
        />
        <Card
          heading="GS LAVA JATO "
          img="/parceiro-gs.jpeg"
          text="30 dentro e fora (limpeza básica) por 25 R$"
          cat="cat"
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
