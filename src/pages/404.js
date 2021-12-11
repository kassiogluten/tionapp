import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import { LogoBrancaSvg } from "../icons";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>ERRO 404</title>
      </Head>
      <Box align="center" w="100%">
        <Flex
          align="center"
          maxW={1200}
          justify="space-evenly"
          h="100vh"
          flexDir="column"
          >
          <LogoBrancaSvg/>
          <Heading>Página não encontrada</Heading>
          <HStack>
            <Text>Erro 404 no link:</Text>
            <Badge>{router.asPath}</Badge>
          </HStack>
          <Button as="a" href="/">
            Voltar
          </Button>
        </Flex>
      </Box>
    </>
  );
}
