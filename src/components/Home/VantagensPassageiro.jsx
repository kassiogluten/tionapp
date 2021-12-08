import { Flex, Text, Heading, Wrap, VStack, HStack, Box } from "@chakra-ui/react";
import { CadeadoSvg, FinanceiraSvg, LikeSvg, VelocidadeSvg } from "../../icons";
import ScrollContainer from "react-indiana-drag-scroll";

export function VantagensPassageiro() {
  return (
    <Flex
      color="#000"
      bg="branco"
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <ScrollContainer>
        <Flex
          py={{ base: "1rem", md: "5rem" }}
          w={1200}
          flexDir="row"
          flex={1}
          pr={8}
        >
          <Vantagem
            titulo="Segurança"
            descricao="Para motoristas ou passageiros, nosso foco sempre será a segurança de quem utiliza nosso app."
            icon={<CadeadoSvg />}
          />

          <Vantagem
            titulo="Praticidade e velocidade"
            descricao="Pedir um carro e se mover de um ponto ao outro ficou bem mais fácil. Trabalhar e ganhar dinheiro dirigindo também."
            icon={<VelocidadeSvg />}
          />

          <Vantagem
            titulo="Qualidade"
            descricao="Um dos nossos maiores pilares. Qualidade para quem se move e para quem dirige."
            icon={<LikeSvg />}
          />

          <Vantagem
            titulo="Indepedência financeira"
            descricao="Sem taxas por corrida. Pague apenas uma tarifa mensal do uso de serviço e aumente sua renda."
            icon={<FinanceiraSvg />}
          />
        </Flex>
      </ScrollContainer>
    </Flex>
  );
}

const Vantagem = (props) => (
  <VStack
    bg="branco"
    boxShadow="20px 60px 55px -20px #CDD0D5"
    justifySelf="center"
    p={8}
    align="flex-start"
    w={278}
    m={4}
  >
    <HStack pb={4}>
      <Box>{props.icon}</Box>
      <Heading fontSize={16}>{props.titulo}</Heading>
    </HStack>
    <Text fontSize={14}>{props.descricao}</Text>
  </VStack>
);
