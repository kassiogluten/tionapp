import { Flex, Text, VStack, Image } from "@chakra-ui/react";

export function Revolution() {
  return (
    <Flex bg="branco" as="section" justify="center" align="center" w="100%">
      <Flex
        position="relative"
        p="5rem 1rem"
        align="center"
        justify="space-around"
        maxW={1000}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          top="35%"
          px={8}
          zIndex={0}
          flex={1}
          position={{ base: "absolute", md: "relative" }}
        >
          <Image
            w={{ base: 280, md: 400 }}
            src="/revolution.png"
            alt="Preview do App"
          />
        </Flex>
        <VStack flex={1} align="start">
          <Text
            pb={6}
            fontFamily="Space Grotesk"
            lineHeight={1}
            bgGradient="linear(to-r, pessego, gradient2)"
            bgClip="text"
            fontWeight="800"
            fontSize={{ base: 24, md: 42 }}
          >
            A revolução do transporte chegou no leste de Minas Gerais.
          </Text>
          <Text color="#000">
            Nosso objetivo é transformar a mobilidade urbana oferecendo preços
            especiais para os passageiros e melhores condições financeiras para
            os usuários motoristas.
          </Text>
          <Text
            w="full"
            align="center"
            color="pessego"
            pt={{ base: 500, md: 100 }}
          >
            Peça agora uma viagem no Tion.
          </Text>
          <Text fontWeight="700" w="full" align="center" color="pessego">
            Baixe o app!
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
