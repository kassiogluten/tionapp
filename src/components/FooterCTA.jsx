import {
  Flex,
  Text,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import { CityFooterSvg } from "../icons";

export function FooterCTA() {
  return (
    <Flex
      position="relative"
      overflowX="hidden"
      as="section"
      justify="center"
      align="center"
      w="100%"
      py={24}
      bgGradient="linear(to-r, pessego, gradient2)"
    >
      <Flex
        p="2rem"
        maxW={1200}
        flexDir={{ base: "column", md: "row" }}
        flex={1}
        justify="space-between"
      >
        <VStack maxW={477} align="start">
          <Heading pb={8} fontSize={42} fontWeight="bold">
            Se preferir, cadastre-se diretamente pelo app.
          </Heading>
          <Text>Baixe nosso app e comece a faturar agora mesmo.</Text>
        </VStack>
      </Flex>
      <Box position="absolute" bottom={0} left={0}>
        <CityFooterSvg />
      </Box>
    </Flex>
  );
}
