import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import { posts } from "../../posts";

export function Content() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="branco">
      <Flex flexWrap="wrap" p="1rem 1rem 5rem" align="start" maxW={1200} w="full">
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
    </Flex>
  );
}

const Post = (props) => (
  <Link href={"/blog/" + props.slug} passHref>
    <a>
      <VStack color="azul"
        overflowY="auto"
        border="1px solid #001A3433"
        align="start"
        maxW={260}
        minW={260}
        m={4}
        fontFamily="Space Grotesk"
        transition="transform 200ms ease"
        _hover={{ transform: "scale(1.007)", borderBottomColor: "pessego" }}
      >
        <Image
          width={280}
          height={142}
          src={props.img}
          alt={props.title}
          objectFit="cover"
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
