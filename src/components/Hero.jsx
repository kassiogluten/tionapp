import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";

import Image from "next/image";

export function Hero(props) {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        p={{ base: "12rem 0 0", md: "15rem 1rem 1rem" }}
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <VStack pb={8} px={4} justify="center" align="start">
          <Text>{props.subtitulo}</Text>
          <Heading color="pessego">{props.titulo}</Heading>
        </VStack>
        <Box w="full" maxW={592} h={424} position="relative">
          <Image
            objectFit="cover"
            src={props.imagem}
            layout="fill"
            alt={props.titulo}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
