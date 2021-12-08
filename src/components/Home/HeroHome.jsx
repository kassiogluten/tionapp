import { Flex, Text, VStack, Link, Image, Box } from "@chakra-ui/react";
import { Botao } from "../Botao";
import { DownloadApp } from "../DownloadApp";

export function HeroHome() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        justify="space-around"
        maxW={1000}
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack flex={1} align="start">
          <Text fontSize={24}>Vamos juntos mudar a</Text>
          <Text
            lineHeight={1}
            bgGradient="linear(to-r, pessego, gradient2)"
            bgClip="text"
            fontWeight="800"
            fontSize={{ base: 45, md: 85 }}
          >
            mobilidade urbana.
          </Text>
          <Text pt={{ base: 400, md: 100 }} fontSize={{ base: 16, md: 20 }}>
            Baixe agora o Tion
          </Text>

          <DownloadApp align="start" py={4} />
          <Botao as="a" url="/cadastro" text="Seja um motorista" w="full" />
        </VStack>
        <Flex
          zIndex={-1}
          flex={1}
          position={{ base: "absolute", md: "relative" }}
        >
          <Box
            bottom={0}
            zIndex={1}
            w="full"
            h="100%"
            pos="absolute"
            bgGradient="linear(to-t, azul 5%, transparent 40%) "
          />
          <Image
            src="/hero1.png"
            alt="Modelo segurando celular com o aplicativo"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
