import {
  Flex,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FaThList } from "react-icons/fa";
import React from "react";
import {
  ClockSvg,
  FaceSvg,
  InstaSvg,
  LogoSvg,
  MailSvg,
  TelSvg,
  WhatsSvg,
} from "../icons";
import { Botao } from "./Botao";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDir="column" justify="center" align="center" w="100%" as="header">
      <Flex
        p="1.5rem 2rem"
        w="full"
        align="center"
        maxW={1200}
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <MenuSuperior />
      </Flex>
      <Flex
        px="2rem"
        w="full"
        align="center"
        maxW={1200}
        bg="branco"
        justify="space-between"
        borderTopWidth="4px"
        borderColor="pessego"
      >
        <LogoSvg />
        <HStack display={{ base: "none", md: "flex" }} spacing={0} color="azul">
          <Menu />
        </HStack>
        <IconButton
          color="pessego"
          aria-label="Abrir menu de navegação"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
        >
          <FaThList />
        </IconButton>
      </Flex>
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton m={3} />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody onClick={onClose}>
            <VStack spacing={10}>
              <MenuSuperior />
              <Menu />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

const Menu = () => (
  <>
    <MenuLink text="Início" url="/" />
    <MenuLink text="Empresa" url="/empresa" />
    <MenuLink text="Suporte e ajuda" url="/suporte" />
    <Botao text="Seja um motorista" />
  </>
);

function MenuLink(props) {
  const router = useRouter();
  return (
    <Text style={{transition:'all 200ms'}}
      fontFamily="Space Grotesk"
      fontWeight="700"
      borderBottomWidth={6}
      borderColor={router.asPath === props.url ? "pessego" : "branca"}
      color={router.asPath === props.url ? "pessego" : "branca"}
      _hover={{ borderColor: "pessego", color: "pessego" }}
      p={{ base: "1rem", md: "2.5rem 2rem" }}
      as="a"
      href={props.url}
    >
      {props.text}
    </Text>
  );
}

const MenuSuperior = () => (
  <>
    <Flex
      justify="space-between"
      flex={1}
      maxW="650px"
      flexDir={{ base: "column", md: "row" }}
    >
      <HStack>
        <TelSvg />
        <Text>(33) 99912-3456</Text>
      </HStack>
      <HStack>
        <MailSvg />
        <Text>contato@tionapp.com.br</Text>
      </HStack>
      <HStack>
        <ClockSvg />
        <Text>Seg-Sáb: 7h às 18h</Text>
      </HStack>
    </Flex>
    <HStack>
      <FaceSvg />
      <WhatsSvg />
      <InstaSvg />
    </HStack>
  </>
);
