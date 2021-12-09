import {
  Flex,
  Text,
  Heading,
  Wrap,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { CadeadoSvg, FinanceiraSvg, LikeSvg, VelocidadeSvg } from "../../icons";
import ScrollContainer from "react-indiana-drag-scroll";
import { Botao } from "../Botao";

export function CTAHome() {
  return (
    <Flex
      color="#000"
      bg="branco"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex   transform="translateY(192px)" zIndex={1}
        maxW={1150}
        flexDir="row"
        flex={1}
        backgroundImage="/cta-home.jpg"
        backgroundPosition="60%"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        p={{base:"35rem 1rem 2rem", md:36}}

      >
        <VStack position="relative" p={8} bg="branco" maxW={420}>
          <Heading fontSize={{base:24, md:32}} color="pessego">Tenha sua independência financeira de verdade.</Heading>
          <Text py={4}>
            Nosso foco nos motoristas é estabilidade financeira, o <strong>Tion</strong> visa
            proporcionar uma taxa única mensal, sem taxas por cada corrida
            realizada.
          </Text>
          <Botao w="full" text="Saiba mais" href="#" />
          <Box position="absolute" bottom={2} h="4px" w="90%" maxW={250} bgGradient="linear(to-r, pessego, gradient2)"/>
        </VStack>
      </Flex>
    </Flex>
  );
}