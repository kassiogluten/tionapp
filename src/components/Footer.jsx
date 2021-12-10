import {
  Flex,
  Text,
  Heading,
  Wrap,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { HeartSvg, LogoBrancaSvg } from "../icons";
import { DownloadApp } from "./DownloadApp";
import { SocialIcons } from "./SocialIcons";
import Link from "next/link";

export function Footer() {
  return (
    <Flex
      zIndex={90}
      bg="azul"
      pos="relative"
      flexDir="column"
      align="center"
      as="section"
      justify="center"
      w="100%"
    >
      <Flex 
        p={{base:"2rem", md:"8rem 1rem 4rem"}}
        maxW={1200}
        flexDir={{ base: "column", md: "row" }}
        w="full"
      >
        <VStack align={{ base: "center", md: "flex-start" }} flex={1}>
          <Link passHref href="/">
            <a>
              <LogoBrancaSvg />
            </a>
          </Link>
          <Text color="#B6CFFF" maxW={215} py={8}>
            Viagens em Caratinga com Inteligência e Estrátegia.
          </Text>
          <Text color="#B6CFFF">CNPJ: 41.466.581/0001-39</Text>
        </VStack>
        <Wrap
          pt={{ base: 8, md: 0 }}
          flex={3}
          justify={{ base: "flex-start", md: "flex-end" }}
          spacing={4}
        >
          <LinkSection
            titulo="Empresa"
            descricao="O Tion não cobra por corrida, apenas um tarifa única mensal."
          >
            <Text>Quem somos</Text>
            <Text>Nossos produtos</Text>
            <Text>Novidades e eventos</Text>
          </LinkSection>
          <LinkSection
            titulo="Passageiro"
            descricao="Dirigiu e caiu direto na em sua conta. Nada de burocracia ou taxas."
          >
            <Text>Como funciona</Text>
            <Text>Tarifas</Text>
            <Text>Promoções e cupons</Text>
            <Text>Segurança e privacidade</Text>
            <Text>Atendimento e suporte</Text>
            <Text>Pergunta frequetes</Text>
          </LinkSection>
          <LinkSection
            titulo="Motorista"
            descricao="Entre em contato conosco para resolver qualquer problema, de forma rápida e eficiênte."
          >
            <Text>Como funciona</Text>
            <Text>Seja um parceiro</Text>
            <Text>Atendimento e suporte</Text>
          </LinkSection>
        </Wrap>
      </Flex>
      <Flex 
        align="center"
        p={{base:"0 1rem", md:"2rem 1rem"}}
        maxW={1200}
        flexDir={{ base: "column", md: "row" }}
        w="full"
        justify="space-between"
      >
        <Box flex={1}>
          <Text color="#B6CFFF" fontSize="0.9rem"
            p={{ base: "1rem", md: 0 }}
            textAlign={{ base: "center", md: "left" }}
            maxW={320}
          >
            Rua Sylvio, R. Artur da Silva Araújo, 09 - Rodoviários, Caratinga -
            MG, 35302-612
          </Text>
        </Box>
        <DownloadApp align={{ base: "center", md: "end" }} />
      </Flex>
      <Flex
        align="center"
        overflowX="hidden"
        p="2rem 1rem"
        maxW={1200}
        flexDir={{ base: "column", md: "row" }}
        w="full"
        justify="space-between"
        position="relative"
        _after={{
          content: "''",
          width: { base: "75vw", md: "45vw", xl: 600 },
          height: "5px",
          bg: "pessego",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          marginX: "auto",
          // left: { base: 10, lg: '20%' },
        }}
      >
        <SocialIcons />
        <Wrap pt={{base:16, md:4}} fontSize={14}>
          <Text>Feito com</Text>
          <HeartSvg />
          <Text>
            {" "}
            por <strong>Suricato Agência</strong>
          </Text>
        </Wrap>
      </Flex>
    </Flex>
  );
}

export const LinkSection = (props) => (
  <VStack justifySelf="center" p={4} align="flex-start" maxW={250}>
    <HStack pb={4}>
      <Heading
        _before={{ content: '"/"', pr: 2, color: "pessego" }}
        fontSize={22}
      >
        {props.titulo}
      </Heading>
    </HStack>
    <Box sx={{ p: { py: 1 } }} my={16}>
      {props.children}
    </Box>
  </VStack>
);
