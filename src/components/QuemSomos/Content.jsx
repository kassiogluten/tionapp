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
import { PessoasSvg } from "../../icons";

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
        <Heading color="pessego" py={8}>
          Nosso destino é o bem para as pessoas
        </Heading>
        <Text py={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis porttitor metus, at lobortis lacus tempor id. Nunc ac ipsum
          tempus, lobortis dui a, vestibulum sapien. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec congue nibh nec eleifend feugiat. Aliquam nec felis
          faucibus, commodo mauris et, tristique magna. Nullam luctus lorem
          vitae porttitor lobortis.
        </Text>
        <Text py={2}>
          Praesent pretium vestibulum viverra. Cras quis mauris lectus. Ut
          elementum risus quam, nec pharetra massa accumsan non. Donec a nulla
          vitae nulla consequat imperdiet. Phasellus ut magna leo. Donec vitae
          porta turpis. Nulla ligula elit, vulputate a tellus ac, iaculis
          iaculis eros. Nam consectetur dui eget nibh interdum, quis pharetra
          tellus sodales. Vivamus non enim ut risus bibendum molestie. Sed
          lacinia interdum ligula, eu tempor dui facilisis sed.
        </Text>
        <Text py={2}>
          ju Duis elit neque, dictum quis ipsum id, porta cursus mi. Vivamus
          laoreet tortor lorem, non rhoncus massa blandit quis. Pellentesque et
          iaculis urna. Pellentesque sollicitudin placerat turpis at iaculis.
          Pellentesque porttitor condimentum metus, quis laoreet metus mattis
          et. In eget faucibus est. Pellentesque orci ex, maximus eget vehicula
          eget, auctor euismod sem.
        </Text>
        <Wrap py={8} justify="center">
          <Image alt="Carros" src="/carros.jpg" width={488} height={347} />
          <Image alt="Carros" src="/carros.jpg" width={488} height={347} />
        </Wrap>
        <Heading color="pessego" p={8}>
          Valores do Tion
        </Heading>
        <Wrap spacing={8} pb={8} justify="center">
          <Valores
            icon={<PessoasSvg />}
            titulo="Pessoas em 1º lugar"
            desc="Queremos proporcionar a excelência, conforto, segurança e preço justo para nossos condutores e usuários."
          />
          <Valores
            icon={<PessoasSvg />}
            titulo="Inovar, criar e comprir"
            desc="Nossa missão no meio de transporte é inovar no transporte de pessoas. Mantendo nosso compromisso com a honestidade, e valorizamos nossa ética com colaboradores e usuários. "
          />
          <Valores
            icon={<PessoasSvg />}
            titulo="Segurança"
            desc="Levamos a sério a segurança de seus dados e em suas corridas."
          />
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
