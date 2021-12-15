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
          <Item
            numero={1}
            band={"5"}
            km={"1,90"}
            min={"0,20"}
            minimo={10}
            horario={"06:00h às 19:59h"}
          />
          <Item
            numero={2}
            band={"6,50"}
            km={"2,20"}
            min={"0,22"}
            minimo={12}
            horario={"20:00h às 23:59h"}
          />
          <Item
            numero={2}
            band={"6,50"}
            km={"2,20"}
            min={"0,22"}
            minimo={12}
            horario={"00:00h às 05:59h"}
          />
        </HStack>
        <HStack pt={20} pb={8} w="full" borderBottom="1px solid #ddd">
          <Box>
            <MotoSvg />
          </Box>
          <Heading color="pessego">Motocicletas</Heading>
        </HStack>
        <HStack as={ScrollContainer} py={8}>
          <Item
            numero={1}
            band={"2,80"}
            km={"0,80"}
            min={"0,13"}
            minimo={6}
            horario={"06:00h às 19:59h"}
          />
          <Item
            numero={2}
            band={"3,20"}
            km={"1,20"}
            min={"0,18"}
            minimo={8}
            horario={"20:00h às 23:59h"}
          />
          <Item
            numero={2}
            band={"3,20"}
            km={"1,20"}
            min={"0,18"}
            minimo={8}
            horario={"00:00h às 05:59h"}
          />
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
      <Heading fontSize={18}>Bandeira {props.numero}</Heading>
    </HStack>

    <Text>{props.horario} - Todos os dias</Text>
    <Text>
      Taxa mínima: <strong>R$ {props.minimo}</strong>
    </Text>
    <Text>
      Bandeirada: <strong>R$ {props.band}</strong>
    </Text>
    <Text>R$ {props.min}/min e R$ {props.km}/KM</Text>
  </VStack>
);
