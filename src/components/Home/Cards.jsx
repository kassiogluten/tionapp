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
} from "@chakra-ui/react";

import Image from "next/image";

export function Cards() {
  return (
    <Flex
      color="pessego"
      as="section"
      justify="center"
      align="center"
      w="100%"
      bg="azul"
    >
      <Flex
      pt={300}
        pb="3rem"
        align="center"
        maxW={1000}
        w="full"
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Card
          img="/card1.jpg"
          heading="R$ 2,00 de desconto"
          text="na primeira corrida!"
        />
        <Card
          img="/card2.jpg"
          heading="Indique e ganhe!"
          text="Convide seus amigos e ganhe bônus no app"
        />
      </Flex>
    </Flex>
  );
}

const Card = (props) => (
  <VStack position="relative" m="1rem" bg="branco" align="center">
    <Image
      quality={99}
      alt={props.heading}
      src={props.img}
      width={488}
      height={329}
    />
    <Box w="full" align="start" p="2rem">
      <Heading lineHeight={1} pb={4} maxW={228}>
        {props.heading}
      </Heading>
      <Text>{props.text}</Text>
    </Box>
    <Box
      position="absolute"
      bottom={0}
      h="4px"
      w="70%"
      bgGradient="linear(to-r, pessego, gradient2)"
    />
  </VStack>
);
