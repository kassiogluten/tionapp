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
import {
  EscudoSvg,
  FinanceiraSvg,
  InovarSvg,
  PaymentSvg,
  PessoasSvg,
  PrecoSvg,
  PriceSvg,
  QualidadeSvg,
  SegurancaSvg,
  VelocidadeSvg,
} from "../../icons";

export function Content() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="branco">
      <Flex
        p="2rem 1rem"
        maxW={1200}
        w="full"
        justify="space-between"
        flexDir="column"
        color="azul"
      >
        <Heading color="pessego" p={8}>
          Por que usar o app do Tion?
        </Heading>
        <Wrap spacing={8} pb={8} justify="center">
          <Valores
            icon={<PessoasSvg />}
            titulo="Pessoas em 1º lugar"
            desc="Queremos proporcionar a excelência, conforto, segurança e preço justo para nossos condutores e usuários."
          />
          <Valores
            icon={<InovarSvg />}
            titulo="Inovar, criar e comprir"
            desc="Nossa missão no meio de transporte é inovar no transporte de pessoas. Mantendo nosso compromisso com a honestidade, e valorizamos nossa ética com colaboradores e usuários. "
          />
          <Valores
            icon={<SegurancaSvg />}
            titulo="Segurança"
            desc="Levamos a sério a segurança de seus dados e em suas corridas."
          />
        </Wrap>
        <Wrap spacing={8} justify="center">
          <Item icon={<PrecoSvg />} titulo="Condutor com  ficha limpa" />
          <Item icon={<EscudoSvg />} titulo="Cliente e condutor segurado" />
          <Item icon={<PriceSvg />} titulo="Formas de pagamento" />
          <Item icon={<QualidadeSvg />} titulo="Rapidez e segurança" />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Valores = (props) => (
  <VStack
    p={8}
    align="start"
    w="full"
    maxW={360}
    h={300}
    borderWidth={2}
    borderColor="#00000022"
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
const Item = (props) => (
  <VStack p={8} align="start" w={250} >
    <HStack pb={2} fontWeight={500}>
      {props.icon}
      <Text>{props.titulo}</Text>
    </HStack>
  </VStack>
);
