import {
  Flex,
  Text,
  Heading,
  VStack,
  Input,
  useToast,
  FormLabel,
  Textarea,
  Box,
  Spacer,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Botao } from "./Botao";

import { useForm } from "react-hook-form";
import axios from "axios";

import { useState } from "react";
import { SocialIcons } from "./SocialIcons";
import { MailSvg, TelSvg } from "../icons";
import { PhoneIcon } from "@chakra-ui/icons";
import { FiMapPin, FiMousePointer } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function ContactForm() {
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

    try {
      const { Nome, Email, Telefone, Empresa, Assunto, Mensagem } = data;

      await axios.post("/api/mail/contact", {
        name: Nome,
        phone: Telefone,
        email: Email,
        subject: Assunto,
        message: Mensagem,
      });

      toast({
        title: "Obrigado.",
        description: "Sua mensagem foi enviada",
        status: "success",
        isClosable: true,
        position: "bottom",
        duration: 7000,
      });

      reset();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Ocorreu um erro.",
        description:
          "Por favor, tente novamente mais tarde ou entre em contato com a gente através do WhatsApp.",
        status: "error",
        isClosable: true,
        position: "bottom",
        duration: null,
      });
    }
  }

  return (
    <Flex p={4} as="section" justify="center" w="100%" bg="branco" color="azul">
      <Flex
        align={{ base: "center", lg: "start" }}
        py={{ base: "4rem", md: "5rem" }}
        maxW={1100}
        flexDir={{ base: "column", lg: "row" }}
        flex={1}
        justify="space-between"
        as="form"
        onSubmit={handleSubmit(handleSendMessage)}
      >
        <VStack py={8} maxW={488} w="full" align="start">
          <Heading color="pessego" fontSize={24}>
            Preencha o formulário
          </Heading>

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
            register={register}
            errors={errors}
            id="Assunto"
            label="Assunto"
            placeholder="Qual o assunto ?"
          />
          <Campo
            register={register}
            errors={errors}
            id="Mensagem"
            label="Mensagem"
          >
            <Textarea
              minH={135}
              resize="Vertical"
              maxW={488}
              _placeholder={{ color: "gray.300", fontSize: 14 }}
              borderRadius={0}
              bg="branco"
              color="gray.800"
              id="Mensagem"
              p="25px"
              placeholder="Deixe sua mensagem"
              type="text"
              borderColor="gray.300"
              {...register("Mensagem")}
              mb={16}
            />
          </Campo>
          <Box h={10} />
          {!isValid ? (
            <Botao
              maxW={488}
              alignSelf="start"
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
              text="Enviar"
            />
          ) : (
            <Botao
              maxW={488}
              alignSelf="start"
              _loading={{ color: "white" }}
              isLoading={isLoading}
              h="56px"
              bg="pessego"
              color="cinza"
              w="full"
              type="submit"
              _hover={{ bgColor: "azul" }}
              text="Enviar"
            />
          )}
        </VStack>

        <VStack py={8} maxW={488} w="full" align="start">
          <Heading pb={8} color="pessego" fontSize={24}>
            Ou contate-nos
          </Heading>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=553398650761"
          >
            <HStack py={2}>
              <FaWhatsapp size={26} color="#FF4655" />
              <Text>Whatsapp</Text>
            </HStack>
          </Link>
          <Link href="mailto:contato@tionapp.com.br">
            <HStack py={2}>
              <MailSvg color="#FF4655" />
              <Text>contato@tionapp.com.br</Text>
            </HStack>
          </Link>
          <Link href="tel: (33) 99912-3456">
            <HStack py={2}>
              <TelSvg color="#FF4655" />
              <Text>(33) 99912-3456</Text>
            </HStack>
          </Link>

          <HStack py={2}>
            <FiMapPin size={26} color="#FF4655" />
            <Text>
              Rua Sylvio, R. Artur da Silva Araújo, 09 - Rodoviários, Caratinga
              - MG, 35302-612
            </Text>
          </HStack>

          <SocialIcons />
        </VStack>
      </Flex>
    </Flex>
  );
}

function Campo(props) {
  return (
    <VStack w="100%" align="start">
      <FormLabel mb={0} mt={8} htmlFor={props.id}>
        {props.label}
        {props.errors[props.id] && (
          <Text display="inline" color="red">
            (Campo obrigatório!)
          </Text>
        )}
      </FormLabel>
      {props.children || (
        <Input
          maxW={488}
          _placeholder={{ color: "gray.300", fontSize: 14 }}
          borderRadius={0}
          bg="branco"
          color="gray.800"
          id={props.id}
          borderColor={props.errors[props.id] ? "red" : "gray.300"}
          p="25px"
          placeholder={props.placeholder}
          type="text"
          {...props.register(props.id, { required: props.required })}
        />
      )}
    </VStack>
  );
}
