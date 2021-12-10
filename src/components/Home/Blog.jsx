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
  Tag,
} from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import { BlogSvg } from "../../icons";
import ScrollContainer from "react-indiana-drag-scroll";

const posts = [
  {
    title: "Show em Caratinga tem como patrocinador oficial o Tion.",
    img: "/blog1.jpg",
    date: "28, Out",
    cat: "Eventos",
    leitura: "12",
  },
  {
    title: "Atualização: Pagamentos por QR Code chegou",
    img: "/blog2.jpg",
    date: "20, Set",
    cat: "Atualizações",
    leitura: "10",
  },
  {
    title: "Expansão: O Tion chegou em Ipatinga!",
    img: "/blog3.jpg",
    date: "13, Set",
    cat: "Tion",
    leitura: "5",
  },
  {
    title: "Para motoristas: Qual o dia ideial para lavar o seu carro?",
    img: "/blog4.jpg",
    date: "10, Ago",
    cat: "Dicas",
    leitura: "7",
  },
];

export function Blog() {
  return (
    <>
      <Flex
        color="azul"
        as="section"
        justify="center"
        align="center"
        w="100%"
        bg="branco"
      >
        <Flex
          p="5rem 1rem 1rem"
          align="center"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          //flexDir="column"
        >
          <HStack>
            <BlogSvg />
            <Heading pl={4} maxW={250} color="pessego">
              Nossas novidades
            </Heading>
          </HStack>

          <Text display={{ base: "none", md: "flex" }} maxW={220}>
            Acompanhe nossas notícias, novidades e dicas.
          </Text>
        </Flex>
      </Flex>
      <Flex
        color="azul"
        as="section"
        justify="center"
        align="center"
        w="100%"
        bg="branco"
      >
        <ScrollContainer>
          <Flex p="1rem 1rem 5rem" align="start" maxW={1200} w="full">
            {posts.map((post) => (
              <Post
                key={post.title}
                title={post.title}
                img={post.img}
                date={post.date}
                cat={post.cat}
                leitura={post.leitura}
                slug={post.title
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")}
              />
            ))}
          </Flex>
        </ScrollContainer>
      </Flex>
    </>
  );
}

const Post = (props) => (
  <Link href={`blog/${props.slug}`} passHref>
    <a>
      <VStack
        overflowY="auto"
        border="1px solid #001A3433"
        align="start"
        maxW={280}
        minW={260}
        m={4}
        fontFamily="Space Grotesk"
        transition="transform 200ms ease"
        _hover={{transform:'scale(1.007)', borderBottomColor:'pessego'}}
      >
        <Image
          width={280}
          height={142}
          src={props.img}
          alt={props.title}
        ></Image>

        <VStack align="start" h={200} p={4}>
          <Tag fontWeight={500} bg="#FF465522" color="pessego">
            {props.cat}
          </Tag>
          <Heading fontSize={20}>{props.title}</Heading>
          <HStack flex={1} align="flex-end" fontSize={14}>
            <Text>{props.date}</Text>
            <Text color="pessego">/</Text>
            <Text>{props.leitura}min de leitura</Text>
          </HStack>
        </VStack>
      </VStack>
    </a>
  </Link>
);
