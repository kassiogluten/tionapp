import {
  Flex,
  Text,
  Heading,
  Wrap,
  VStack,
  HStack,
  Input,
  Button,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import { PaymentSvg, PriceSvg, SupportSvg } from "../icons";
import { Botao } from "./Botao";

import { useForm } from "react-hook-form";

import axios from "axios";

import { useState } from "react";

export function Cadastro() {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSendMessage(data) {
    setIsLoading(true);

    toast({
      title: "ATENÇÃO !",
      description: "Recebimento da mensagem ainda em construção.",
      status: "info",
      isClosable: true,
      position: "top",
      onCloseComplete: () => setIsLoading(false),
    });
  }
  return (
    <Flex p={4} as="section" justify="center" align="center" w="100%">
      <Flex
        py={{ base: "1rem", md: "5rem" }}
        maxW={600}
        flexDir="column"
        flex={1}
        as="form"
        onSubmit={handleSubmit(handleSendMessage)}
      >
        <Heading textAlign="center" fontWeight="bold" fontSize={24}>
          Faça o cadastro
        </Heading>
        <VStack w="full" py={8} align="start">
          <FormLabel htmlFor="Nome">
            Nome
          </FormLabel>
          <Input
            borderRadius={0}
            bg="branco"
            color="gray.800"
            id="Nome"
            borderColor={errors.Nome ? "red" : "white"}
            p="25px"
            placeholder="Nome"
            type="text"
            {...register("Nome", { required: true })}
          />
          {errors.Nome && <Text color="red">Nome obrigatório!</Text>}
          <FormLabel pt={4} htmlFor="Email">
            Email
          </FormLabel>
          <Input
            borderRadius={0}
            bg="branco"
            color="gray.800"
            id="Email"
            borderColor={errors.Email ? "red" : "white"}
            p="25px"
            placeholder="E-mail"
            type="text"
            {...register("Email", { required: true })}
          />
          {errors.Email && <Text color="red">Email obrigatório!</Text>}
          <FormLabel pt={4} htmlFor="Telefone">
            Telefone
          </FormLabel>
          <Input
            borderRadius={0}
            bg="branco"
            color="gray.800"
            id="Telefone"
            borderColor={errors.Telefone ? "red" : "white"}
            p="25px"
            placeholder="Telefone"
            type="text"
            {...register("Telefone", { required: true })}
          />
          {errors.Telefone && <Text color="red">Telefone obrigatório!</Text>}
        </VStack>
        {!isValid ? (
          <Botao mt={4}
            sx={{ cursor: "not-allowed" }}
            opacity=".3"
            bg="pessego"
            color="cinza"
            h="56px"
            w="100%"
            fontSize="14px"
            onClick={() => {
              trigger();
            }}
            text="Cadastrar"
          />
        ) : (
          <Botao mt={4}
            _loading={{ color: "white" }}
            isLoading={isLoading}
            h="56px"
            bg="pessego"
            color="cinza"
            w="full"
            type="submit"
            _hover={{ bgColor: "azul" }}
            text="Cadastrar"
          />
        )}
      </Flex>
    </Flex>
  );
}
