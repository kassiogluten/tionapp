import { Flex, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Botao } from "./Botao";

// import Image from "next/image";

export function Hero() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1000}
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack spacing={0} align="start" flex={1}>
          <Text fontSize={24}>O Tion cobra tarifa</Text>
          <Text
            lineHeight={0.7}
            bgGradient="linear(to-r, pessego, gradient2)"
            bgClip="text"
            fontWeight="800"
            fontSize={{ base: 100, md: 190 }}
          >
            zero
          </Text>
          <Text fontSize={{ base: 45, md: 75 }}>por corrida</Text>
         
          <Text py={8}>
            Após seu período de testes (30 dias gratuitamente), você paga somente uma taxa de R$ 150,00 para uso do aplicativo
            mensalmente.
          </Text>
          <Botao as="a" url="#cadastre" text="Seja um motorista" w="full" />
        </VStack>
        <Image transform={{base:"translateX(-10%)",md:"translateX(0)"}}
          src="/tion1.png"
          alt="Prévia do app em smartphones"
        ></Image>
      </Flex>
    </Flex>
  );
}
