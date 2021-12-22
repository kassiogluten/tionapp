import { Flex, Text, Heading, Wrap, VStack, Center } from "@chakra-ui/react";
import { DeliverySvg, HatchSvg, MotoSvg, SedanSvg } from "../icons";

export function EscolhaCategoria(props) {
  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Flex p="1rem" maxW={1200} flexDir="column" flex={1}>
        <Heading fontWeight="bold" fontSize={24}>
          {props.titulo}
        </Heading>
        <Wrap justify="center" py={8} spacing={8}>
          <Categoria
            titulo="Tion Comun - Hatch"
            descricao="Veículos a partir de 2004"
            icon={<HatchSvg />}
          />
          <Categoria
            titulo="Tion Conforto - Sedan"
            descricao="Sedan a partir de 2004"
            icon={<SedanSvg />}
          />
          <Categoria
            titulo="Tion Moto"
            descricao="Veículos a patir de 2004"
            icon={<MotoSvg />}
          />
          <Categoria
            breve
            titulo="Tion Entregas"
            descricao="Vans ou caminhonetes"
            icon={<DeliverySvg />}
          />
        </Wrap>
      </Flex>
    </Flex>
  );
}

const Categoria = (props) => (
  <VStack
    p={4}
    justify="space-evenly"
    align="center"
    bg="#002C5855"
    height={277}
    width={267}
    transform={{
      base: props.breve && "translateY(20px)",
      sm: "translateY(0px)",
    }}
  >
    {props.breve && (
      <Center
        opacity="0.75"
        mt={-14}
        fontWeight={600}
        p="5px 2rem"
        color="pessego"
        bg="branco"
      >
        EM BREVE
      </Center>
    )}
    {props.icon}
    <Heading fontSize={22} color="pessego">
      {props.titulo}
    </Heading>
    <Text>{props.descricao}</Text>
  </VStack>
);
