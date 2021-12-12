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
  Wrap,
} from "@chakra-ui/react";

import Image from "next/image";
import { EscudoSvg, InovarSvg, PessoasSvg, PrecoSvg, QualidadeSvg, SegurancaSvg } from "../../icons";
import { EscolhaCategoria } from "../EscolhaCategoria";

export function Content() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="azul">
      <Flex
        p="2rem 0rem"
        maxW={1200}
        w="full"
        justify="space-between"
        align="center"
        flexDir="column"
        color="branco"
      >
       <EscolhaCategoria titulo="Escolha a categoria que você deseja trabalhar" />
        <Wrap maxW={1000} pb={8} justify="center">
          <Item
            icon={<PrecoSvg />}
            titulo="Preço"
            desc="Nós cobramos um valor acessível para todos. "
          />
          <Item
            icon={<QualidadeSvg />}
            titulo="Qualidade"
            desc="Prezamos pela qualidade de nosso serviço. "
          />
          <Item
            icon={<EscudoSvg />}
            titulo="Segurança"
            desc="Garantimos a segurança de você e seus dados."
          />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Item = (props) => (
  <VStack
    p={8}
    align="start"
    w="full"
    maxW={300}
  >
    <HStack
      pb={2}
      color="pessego"
      fontSize={16}
      fontWeight={700}
      textAlign="left"
    >
      {props.icon}
      <Text>{props.titulo}</Text>
    </HStack>

    <Text>{props.desc}</Text>
  </VStack>
);
