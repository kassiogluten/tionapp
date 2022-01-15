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
  Spacer,
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
import { Botao } from "../Botao";

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
            titulo="Sem taxa por corrida"
            desc="Todo lucro da corrida fica para você. O Tion não cobra nenhuma tarifa por corrida, somente uma taxa única de serviço mensal de R$ 150,00."
          />
        </Wrap>
        <Wrap spacing={8} justify="center">
          <Text textAlign="center">(Apólice de seguro de acidentes pessoais a passageiros) com responsabilidade do motorista em caso de necessidade de utilização.</Text>
          <Item icon={<PrecoSvg />} titulo="Sem tarifas para condutores" />
          <Item icon={<PriceSvg />} titulo="Máquina de cartão" />
          <Item icon={<EscudoSvg />} titulo="Identificação " />
          <Item icon={<QualidadeSvg />} titulo="Segurança" />
        </Wrap>
        <VStack>
          <Heading textAlign="center" py={8} color="pessego" maxW={600} fontSize={20}>
            Nossa identificação será através do (Adesivo com imã) fácil remoção,
            sem deixar danificações na pintura do seu veículo e sendo fácil
            remoção para curtir o final de semana em família.
          </Heading>
          <Heading textAlign="center" py={8} color="pessego" maxW={600} fontSize={20}>
            Confira também os descontos oferecidos por nossos parceiros.
          </Heading>
          <Botao text="Ver descontos" url="/motorista/descontos" />
        </VStack>
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
  <VStack p={8} align="start" w={250}>
    <HStack pb={2} fontWeight={500}>
      {props.icon}
      <Text>{props.titulo}</Text>
    </HStack>
  </VStack>
);
