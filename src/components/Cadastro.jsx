import {
  Flex,
  Text,
  Heading,
  VStack,
  Input,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import { PaymentSvg, PriceSvg, SupportSvg } from "../icons";
import { Botao } from "./Botao";

import { useForm } from "react-hook-form";

import { useState } from "react";

export function Cadastro() {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  async function submitHandler(data) {
    setIsLoading(true);

    await fetch("/api/sheets", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast({
      title: "Enviado !",
      description: `Olá ${Nome}, recebemos seus dados, entraremos em contato no número ${Telefone} para finalizar seu cadastro e agendar a vistoria.`,
      status: "success",
      isClosable: true,
      position: "bottom",
    });

    setIsLoading(false);
    reset();
  }

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { Nome, Telefone } = watch();

  return (
    <Flex
      id="cadastre"
      p={4}
      as="section"
      justify="center"
      align="center"
      w="100%"
    >
      <Flex
        py={{ base: "4rem", md: "5rem" }}
        maxW={600}
        flexDir="column"
        flex={1}
        as="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <Heading textAlign="center" fontWeight="bold" fontSize={24}>
          Faça o pré-cadastro
        </Heading>
        
          {/* <FormLabel htmlFor="Nome">Nome</FormLabel>
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
          {errors.Nome && <Text color="red">Nome obrigatório!</Text>} */}
          <Campo
            required
            register={register}
            errors={errors}
            id="Nome"
            label="Nome"
            placeholder="Qual seu nome ?"
          />
          <Campo
            required
            register={register}
            errors={errors}
            id="Email"
            label="E-mail"
            placeholder="Qual seu e-mail ?"
          />
          <Campo
            required
            register={register}
            errors={errors}
            id="Telefone"
            label="Telefone"
            placeholder="Qual seu telefone ?"
          />
          <Campo
            required
            register={register}
            errors={errors}
            id="Idade"
            label="Sua Idade"
            placeholder="Qual sua idade ?"
          />
          <Campo
            register={register}
            errors={errors}
            id="Veiculo"
            label="Modelo do veículo"
            placeholder="Qual modelo de seu veículo ?"
          />
          <Campo
            register={register}
            errors={errors}
            id="Ano"
            label="Ano do veículo"
            placeholder="Qual ano do veículo ?"
          />
        
        {!isValid ? (
          <Botao
            mt={8}
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
          <Botao
            mt={8}
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

function Campo(props) {
  return (
    <VStack w="100%" align="start">
      <FormLabel mb={0} mt={8} htmlFor={props.id}>
        {props.label} {props.errors[props.id] && <Text display="inline" color="red">(Campo obrigatório!)</Text>}
      </FormLabel>
      <Input
        _placeholder={{ color: "gray.300", fontSize: 14 }}
        borderRadius={0}
        bg="branco"
        color="gray.800"
        id={props.id}
        borderColor={props.errors[props.id] ? "red" : "white"}
        p="25px"
        placeholder={props.placeholder}
        type="text"
        {...props.register(props.id, { required: props.required })}
      />
    </VStack>
  );
}
