import { Flex, Text, Heading, Wrap, VStack, HStack } from "@chakra-ui/react";
import { PaymentSvg, PriceSvg, SupportSvg } from "../icons";

export function NossasVantagens() {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex
        pt={{ base: "1rem", md: "5rem" }}
        maxW={1100}
        flexDir="column"
        flex={1}
      >
        <Heading textAlign="center" fontWeight="bold" fontSize={24}>
          Nossas vantagens
        </Heading>
        <Wrap justify="space-evenly" py={8} spacing={0}>
          <Vantagem
            titulo="Preço justo"
            descricao="O Tion não cobra por corrida, apenas um tarifa única mensal."
            icon={<PriceSvg />}
          />
          <Vantagem
            titulo="Pagamentos"
            descricao="Dirigiu e caiu direto na em sua conta. Nada de burocracia ou taxas."
            icon={<PaymentSvg />}
          />
          <Vantagem
            titulo="Suporte"
            descricao="Entre em contato conosco para resolver qualquer problema, de forma rápida e eficiênte."
            icon={<SupportSvg />}
          />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Vantagem = (props) => (
  <VStack
    justifySelf="center"
    p={4}
    align="flex-start"
    height={230}
    maxW={250}
  >
    <HStack pb={4}>
      {props.icon}
      <Heading fontSize={22}>{props.titulo}</Heading>
    </HStack>
    <Text>{props.descricao}</Text>
  </VStack>
);
