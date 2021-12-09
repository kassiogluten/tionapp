import {
  Flex,
  Text,
  Heading,
  VStack,
  Box,
  Wrap,
  Image,
} from "@chakra-ui/react";

import { CityFooterSvg } from "../icons";
import { DownloadApp } from "./DownloadApp";

export function FooterCTA({
  title = "Para onde vamos?",
  desc = "Baixe nosso app e comece a viajar agora mesmo.",
  img,
}) {
  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      w="100%"
      py={{ base: 12, md: 24 }}
      background="url(/footer-bg.svg) no-repeat bottom, linear-gradient(to right, #FF4655, #F37053)"
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
            {title}
          </Heading>
          <Text>{desc}</Text>
        </VStack>
        <DownloadApp />
      </Flex>
      {img && (
        <Image 
          display={{ base: "none", lg: "block" }}
          pos="absolute"
          mx="auto"
          transform="translateY(-5px)"
          zIndex={1}
          maxW={223}
          src={img}
          alt="iphone"
        />
      )}
    </Flex>
  );
}
