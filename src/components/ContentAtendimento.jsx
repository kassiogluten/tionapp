import {
  Flex,
  Text,
  Heading,
  VStack,
  Input,
  FormLabel,
  Textarea,
  Box,
  HStack,
  Link,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import { Botao } from "./Botao";

import { SocialIcons } from "./SocialIcons";
import { MailSvg, TelSvg } from "../icons";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function ContentAtendimento() {
  return (
    <Flex p={4} as="section" justify="center" w="100%" bg="branco" color="azul">
      <Flex
        align={{ base: "center", lg: "start" }}
        py={{ base: "4rem", md: "5rem" }}
        maxW={1100}
        flexDir={{ base: "column", lg: "row" }}
        flex={1}
        justify="center"
      >
        <VStack py={8} w="full" align="start">
          <Heading pb={8} color="pessego" fontSize={24}>
            Peguntas frequentes
          </Heading>

          <Accordion w="full">
            <Item
              pergunta="Porque o TION não cobra dos motoristas tarifas na corridas?"
              resposta="Nossos motoristas tem apenas três compromissos com nós, a mensalidade, felicidade e comprometimento em atender bem nossos clientes."
            />
            <Item
              pergunta="Porque o TION cobra apenas uma taxa mensal de 150 R$ dos condutores."
              resposta="Um preço justo em vista dos outros custenhos em geral do um motorista, que utiliza seu próprio veículo para o trabalho ou atê mesmo um alugado."
            />
            <Item
              pergunta="Porque o TION faz campanhas e não desconta o capital dos condutores?"
              resposta="Nosso objetivo é fazer com que nossos motoristas venham melhorar as condições financeiras."
            />
            <Item
              pergunta="TION porque você da desconto de 2 R$ na primeira corrida?"
              resposta="Nossa idéia é criar uma conexão com os clientes, através de desconto nas corridas e formação de novos pontos para utlizar e ter descontos"
            />
            <Item
              pergunta="TION o que você vai fazer para se evitar o cancelamento de corridas?"
              resposta="Primeiro passo já estamos realizando, cobrança mensal e justa dos motoristass.
Deslocar sempre o motoristas mais próximo
"
            />
            <Item
              pergunta="Qual o proposito do TION na sociedade?"
              resposta="Impactar o maximo de pessoas possíveis"
            />
            <Item
              pergunta="TION seus motoristas recebem treinamento sobre direção defensiva?"
              resposta="Estamos ajustando uma parceria em benefícios dos motoristas e clientes."
            />
            <Item
              pergunta="TION seus motoristas recebem treinamento sobre atendimento ao cliente?"
              resposta="Estamos ajustando uma parceria em benefícios dos motoristas e clientes."
            />
            <Item
              pergunta="TION qual a sua estratégia para nos condutores termos mais clientes?"
              resposta="Preço, campanhas de marketing, cupons de desconto, excelência no atendimento e respeito com os clientes."
            />
          </Accordion>
        </VStack>
      </Flex>
    </Flex>
  );
}

const Item = (props) => (
  <AccordionItem border="1px solid #eee" my={4}>
    <AccordionButton>
      <Box fontWeight={600} flex="1" textAlign="left">
        {props.pergunta}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel py={4}>{props.resposta}</AccordionPanel>
  </AccordionItem>
);
