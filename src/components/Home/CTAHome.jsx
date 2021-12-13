import { Flex, Text, Heading, VStack, Box } from "@chakra-ui/react";

import { Botao } from "../Botao";

export function CTAHome(props) {
  return (
    <Flex
      color="#000"
      bg="branco"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex
        transform="translateY(192px)"
        zIndex={1}
        maxW={1150}
        flexDir="row"
        flex={1}
        backgroundImage={props.img}
        backgroundPosition={props.bp}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={{ base: "35rem 1rem 2rem", md: 36 }}
        justify={props.justify}
      >
        <VStack position="relative" p={8} bg="branco" maxW={420}>
          <Heading fontSize={{ base: 24, md: 32 }} color="pessego">
            {props.titulo}
          </Heading>
          <Text py={4}>
           {props.desc}
          </Text>
          <Botao url={props.url} w="full" text={props.button} />
          <Box
            position="absolute"
            bottom={0}
            h="4px"
            w="90%"
            maxW={250}
            bgGradient="linear(to-r, pessego, gradient2)"
          />
        </VStack>
      </Flex>
    </Flex>
  );
}
