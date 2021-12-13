import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import { CarSvg, HatchSvg, MotoSvg, PriceSvg } from "../icons";
import ScrollContainer from "react-indiana-drag-scroll";

export function ContentTarifas() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="branco">
      <Flex
        flexWrap="wrap"
        py="3rem"
        pl="1rem"
        justify="center"
        align="start"
        maxW={1200}
        w="full"
        flexDir="column"
        display="relative"
      >
        <HStack py={8} w="full" borderBottom="1px solid #ddd">
          <Box>
            <HatchSvg />
          </Box>
          <Heading color="pessego">Carros</Heading>
        </HStack>
        <HStack as={ScrollContainer} py={8}>
          <Item />
          <Item />
          <Item />
        </HStack>
        <HStack pt={20} pb={8} w="full" borderBottom="1px solid #ddd">
          <Box>
            <MotoSvg />
          </Box>
          <Heading color="pessego">Motocicletas</Heading>
        </HStack>
        <HStack as={ScrollContainer} py={8}>
          <Item />
          <Item />
          <Item />
        </HStack>
      </Flex>
    </Flex>
  );
}

const Item = (props) => (
  <VStack
    color="azul"
    align="start"
    minW={{ base: 280, md: 350 }}
    fontFamily="Space Grotesk"
    sx={{ strong: { color: "pessego" } }}
  >
    <HStack>
      <PriceSvg />
      <Heading fontSize={18}>Bandeira 01</Heading>
    </HStack>

    <Text>6h00 às 19h059 - Todos os dias</Text>
    <Text>
      Taxa mínima: <strong>R$ 8,00</strong>
    </Text>
    <Text>
      Bandeirada: <strong>R$ 3,06</strong>
    </Text>
    <Text>R$ 0,15/min e R$ 1,08/KM. </Text>
  </VStack>
);
