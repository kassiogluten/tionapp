import {
  Flex,
  Box,
  Text,
  Heading,
  Wrap,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import {
  CadeadoSvg,
  CarSvg,
  CarteiraSvg,
  FinanceiraSvg,
  Like2Svg,
  LikeSvg,
  VelocidadeSvg,
} from "../../icons";
import { DownloadApp } from "../DownloadApp";

export function SobreOApp() {
  return (
    <Flex
      color="#000"
      bg="branco"
      as="section"
      justify="center"
      align="center"
      w="100%"
      flexDir={{ base: "column", lg: "row" }}
    >
      <Flex
        color="branco"
        justify={{ base: "center", md: "right" }}
        w="100%"
        bgGradient="linear(to-br, pessego, gradient2)"
        flex={1}
      >
        <Box
          flex={1}
          p={{ base: "5rem 1rem 15rem", lg: "5rem 10rem 5rem 1rem" }}
          w="100%"
          maxW="550px"
        >
          <Text letterSpacing={5}>SOBRE O APP</Text>
          <Heading py={8}>Viaje de forma rápida, prática e segura.</Heading>
          <Text pb={8}>
            O Tion oferece os preços mais acessíveis no seu dia a dia para ir a
            um compromisso, ao supermercado, para casa ou a qualquer outro
            lugar.
          </Text>
          <DownloadApp align="start" />
        </Box>
      </Flex>
      <Image
        w={{ base: 220, lg: 260 }}
        zIndex={2}
        position="absolute"
        left="50%"
        transform={{ base: "translate(-50%, 0)", lg: "translate(-50%, 20%)" }}
        src="/phone.png"
        alt="Phone"
      ></Image>
      <Flex w="100%" flex={1} justify={{ base: "center", md: "start" }}>
        <Box
          p={{ base: "15rem 1rem 5rem", lg: "5rem 1rem 5rem 12rem" }}
          w="100%"
          maxW="550px"
        >
          <Accordion defaultIndex={[0]} id="teste" allowToggle>
            <Acordeao
              icon={<CarteiraSvg />}
              titulo="Preço acessível"
              desc="O Tion é uma ótima opção quando você tem um compromisso marcado e precisa agendar uma viagem."
            />
            <Acordeao
              icon={<CarSvg />}
              titulo="Carros selecionados"
              desc="Todos os veículos são avaliados pela equipe do Tion após o cadastro do motorista. garantindo sua segurança e conforto."
            />
            <Acordeao
              icon={<Like2Svg />}
              titulo="Motoristas bem avaliados"
              desc="Através do nosso sistema de notas, podemos filtrar os melhores motoristas para trabalhar como parceiro."
            />
          </Accordion>
        </Box>
      </Flex>
    </Flex>
  );
}

const Acordeao = (props) => (
  <AccordionItem id="acordao" my={4} borderWidth={2} borderColor="#00000022">
    <AccordionButton p={4}>
      <HStack
        color="pessego"
        fontSize={16}
        fontWeight={700}
        flex="1"
        textAlign="left"
      >
        {props.icon}
        <Text>{props.titulo}</Text>
      </HStack>
      <AccordionIcon color="#00000022" />
    </AccordionButton>

    <AccordionPanel>{props.desc}</AccordionPanel>
  </AccordionItem>
);
