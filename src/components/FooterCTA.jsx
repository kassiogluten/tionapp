import {
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  Wrap,
  Image,
} from "@chakra-ui/react";

// import Image from "next/image";
import { CityFooterSvg } from "../icons";
import { DownloadApp } from "./DownloadApp";

export function FooterCTA() {
  return (
    <Flex
      position="relative"
      overflowX="hidden"
      as="section"
      justify="center"
      align="center"
      w="100%"
      py={{ base: 12, md: 24 }}
      bgGradient="linear(to-r, pessego, gradient2)"
    >
      <Flex
        p="2rem"
        maxW={1200}
        flexDir={{ base: "column", md: "row" }}
        flex={1}
        justify="space-between"
      >
        <VStack align={{ base: "center", md: "start" }} flex={1.5}>
          <Heading
            textAlign={{ base: "center", md: "start" }}
            pb={8}
            fontSize={42}
            fontWeight="bold"
          >
            Se preferir, cadastre-se diretamente pelo app.
          </Heading>
          <Text>Baixe nosso app e comece a faturar agora mesmo.</Text>
        </VStack>
        <DownloadApp />
      </Flex>
      <Box position="absolute" bottom={0} left={0}>
        <CityFooterSvg />
      </Box>
    </Flex>
  );
}
