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
        maxW={1100}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <VStack maxW={450} pb={8} px={4} justify="center" align="start">
          <Text>{props.subtitulo}</Text>
          <Heading
            fontSize={{ base: 36, md: 56 }}
            bgGradient="linear(to-r, pessego, gradient2)"
            bgClip="text"
            py={props.desc || props.subtitulo ? 0 : 10}
          >
            {props.titulo}
          </Heading>
          {props.desc && <Text py={8}>{props.desc}</Text>}
        </VStack>
        {props.imagem && (
          <Box w="full" maxW={592} h={424} position="relative">
            <Image
              objectFit={props.fit || "cover"}
              src={props.imagem}
              layout="fill"
              alt={props.titulo}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
