import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Center,
  IconButton,
} from "@chakra-ui/react";

import Image from "next/image";
import { HowToDownloadSvg } from "../../icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export function HowTo() {
  const [pag, setPag] = useState(0);
  const totalSlides = Slides.length;

  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="azul">
      <Flex
        p="20rem 1rem 10rem"
        align="center"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        //flexDir="column"
      >
        <VStack my="5rem" maxW={580}>
          <HStack pb={24}>
            <Center p={4} bg="#002243" flex={1}>
              <HowToDownloadSvg />
            </Center>
            <Heading pl={4} fontSize={{ base: 18, md: 36 }}>
              Veja como é fácil baixar e utilizar o nosso app.
            </Heading>
          </HStack>
          <VStack
            border="1px solid #01264D"
            align="start"
            p={8}
            position="relative"
          >
            <Text
              p="5px 20px"
              bgGradient="linear(to-r,pessego, gradient2)"
              position="absolute"
              top={-4}
            >
              {Slides[pag].titulo}
            </Text>

            <Text>{Slides[pag].texto}</Text>
          </VStack>
          <HStack pt={8} alignSelf="flex-end">
            <IconButton
              colorScheme="none"
              color="white"
              _active={{ transform: "scale(0.95)" }}
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 0 6px #FF4655, 0 0 12px #FF465577",
              }}
              borderRadius={0}
              bgGradient="linear(to-r, pessego, gradient2)"
              disabled={pag === 0}
              onClick={() => setPag(pag - 1)}
              icon={<ChevronLeftIcon />}
            />
            <IconButton
              colorScheme="none"
              color="white"
              _active={{ transform: "scale(0.95)" }}
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 0 6px #FF4655, 0 0 12px #FF465577",
              }}
              borderRadius={0}
              disabled={pag >= totalSlides - 1}
              bgGradient="linear(to-r, pessego, gradient2)"
              onClick={() => setPag(pag + 1)}
              icon={<ChevronRightIcon />}
            />
          </HStack>
        </VStack>
        <Image
          quality={100}
          width={282}
          height={564}
          src="/iphone.png"
          alt="iphone"
        />
      </Flex>
    </Flex>
  );
}

const Slides = [
  {
    titulo: "01. Baixar o aplicativo",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros ipsum, ullamcorper sed diam eu, congue convallis metus. Nulla faucibus eu ipsum in dictum. Curabitur porta purus id tellus pharetra gravida. Sed odio erat, volutpat eu ultrices eu, commodo sit amet lacus. Vestibulum at vulputate massa.",
  },
  {
    titulo: "02. Registrar ou conectar",
    texto:
      " Sed odio erat, volutpat eu ultrices eu, commodo sit amet lacus. Vestibulum at vulputate massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros ipsum, ullamcorper sed diam eu, congue convallis metus. Nulla faucibus eu ipsum in dictum. Curabitur porta purus id tellus pharetra gravida.",
  },
  {
    titulo: "03. Solicitar corridas",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros ipsum, ullamcorper sed diam eu, congue convallis metus. Nulla faucibus eu ipsum in dictum. Curabitur porta purus id tellus pharetra gravida. Sed odio erat, volutpat eu ultrices eu, commodo sit amet lacus. Vestibulum at vulputate massa.",
  },
];
