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
import { InovarSvg, PessoasSvg, SegurancaSvg } from "../../icons";

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
          Aplicativo de transporte urbano, com a proposta de inovar no ramo de
          mobilidade urbana, que visa crescer e expandir sua marca na cidade de
          Caratinga/MG e região com o nicho focado nos motoristas, clientes e
          manter o nosso lema inovador em sermos diferentes.
        </Text>
        <Heading color="pessego" py={8}>
          HOJE A CIDADE DE CARATINGA ENCONTRA-SE SATURADA PELOS APLICATIVOS
        </Heading>
        <Text py={2}>
          Nós da empresa TION APP temos nossos diferenciais, oferecendo preço
          justo, cupons de desconto, parcerias comerciais, promoções especiais
          para os clientes, fornecimento de máquina de cartão para pagamento no
          crédito, débito e pix, <strong>corridas sem tarifas descontada dos motoristas</strong>,
          pagamento mensal de 150 R$ por mês para ser nosso parceiro, testes 
          <strong> grátis de 30 dias sem custo para os motoristas</strong> e melhores condições
          financeiras para os motoristas.
        </Text>
       
        <Wrap py={8} justify="center">
          <Image alt="Carros" src="/ctga1.jpeg" width={488} height={347} />
          <Image alt="Carros" src="/ctga2.jpeg" width={488} height={347} />
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
