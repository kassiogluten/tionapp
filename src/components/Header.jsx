import {
  Flex,
  HStack,
  IconButton,
  Text,
  Fade,
  Wrap,
  CloseButton,
  Box,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import { ClockSvg, LogoSvg, MailSvg, TelSvg } from "../icons";

import Link from "next/link";

import { Botao } from "./Botao";
import { useRouter } from "next/dist/client/router";
import { SocialIcons } from "./SocialIcons";
import { LinkList, LinkSection } from "./Footer";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Header() {
  const [tab, setTab] = useState({
    active: false,
    type: "Empresa",
  });

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      <Flex
        p={{ base: "2rem 1rem", md: 0 }}
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        as="header"
        pos="absolute"
      >
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
          py={{ base: "1rem", md: 0 }}
          w="full"
          align="center"
          maxW={1200}
          bg="branco"
          justify="space-between"
          borderTopWidth="4px"
          borderColor="pessego"
        >
          <Link passHref href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>
          <HStack
            display={{ base: "none", md: "flex" }}
            spacing={0}
            color="azul"
          >
            <Menu tab={tab} setTab={setTab} />
          </HStack>
          <IconButton
            color="azul"
            aria-label="Abrir menu de navegação"
            display={{ base: "flex", md: "none" }}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FiMenu size={30} />
          </IconButton>
        </Flex>

        <Flex
          in={tab.active}
          onClick={() => setTab({ active: false })}
          as={Fade}
          zIndex={3}
          px="2rem"
          py={{ base: "1rem", md: 0 }}
          w="full"
          align="center"
          maxW={1200}
          bg="branco"
          display={{ base: "none", md: tab.active ? "flex" : "none" }}
          top={0}
          left={0}
          h="full"
        >
          <Wrap color="azul" pt={8} flex={3} justify="flex-start" spacing={8}>
            {tab.type === "Empresa" ? <SubMenuEmpresa /> : <SubMenuSuporte />}
          </Wrap>
        </Flex>
      </Flex>
    </>
  );
}

const MobileMenu = ({ mobileMenu, setMobileMenu }) => (
  <Flex
    as={Fade}
    in={mobileMenu}
    w="full"
    h="100vh"
    flexDir="column"
    display={{ base: mobileMenu ? "flex" : "none", md: "none" }}
    pos="fixed"
    top={0}
    left={0}
    bg="branco"
    color="azul"
    onClick={() => setMobileMenu(false)}
    zIndex={5}
    overflowY="scroll"
  >
    
    <HStack pt={5} justify="space-around">
      <Link passHref href="/">
        <a>
          <LogoSvg />
        </a>
      </Link>
      <CloseButton color="azul" size={60} />
    </HStack>
    
    <HStack pt={5}>
      <Text pl={2} fontWeight={600} color="pessego">
        Empresa
      </Text>
      <Box h="1px" w="full" bg="pessego" />
    </HStack>
    <SubMenuEmpresa />
    <HStack pt={5}>
      <Text pl={2} minW={140} fontWeight={600} color="pessego">
        Suporte e ajuda
      </Text>
      <Box h="1px" w="full" bg="pessego" />
    </HStack>
    <SubMenuSuporte />
    <Botao url="/cadastro#cadastre" text="Seja um motorista" />
  </Flex>
);

const SubMenuEmpresa = () => (
  <Wrap>
    <LinkSection
      titulo="Empresa"
      descricao="O Tion não cobra por corrida, apenas um tarifa única mensal."
    >
      <LinkList titulo="Quem somos" url="/quem-somos" />
      <LinkList titulo="Nossos produtos" url="/nossos-produtos" />
      <LinkList titulo="Novidades e eventos" url="/blog" />
      <LinkList titulo="Tarifas" url="/tarifas" />
    </LinkSection>

    <LinkSection
      titulo="Passageiro"
      descricao="Dirigiu e caiu direto na em sua conta. Nada de burocracia ou taxas."
    >
      <LinkList titulo="Como funciona" url="/passageiro/como-funciona" />
      <LinkList
        titulo="Segurança e privacidade"
        url="/passageiro/privacidade"
      />
    </LinkSection>

    <LinkSection
      titulo="Motorista"
      descricao="Entre em contato conosco para resolver qualquer problema, de forma rápida e eficiente."
    >
      <LinkList titulo="Como funciona" url="/motorista/como-funciona" />
      <LinkList titulo="Seja um parceiro" url="/cadastro" />
      <LinkList titulo="Descontos" url="/motorista/descontos" />
    </LinkSection>
  </Wrap>
);

const SubMenuSuporte = () => (
  <Wrap>
    <LinkSection titulo="Atendimento">
      <LinkList titulo="Suporte e ajuda" url="/atendimento" />
    </LinkSection>
  </Wrap>
  /*   <Wrap>
    <LinkSection titulo="Para Passageiro">
      <LinkList titulo="Atendimento e suporte" url="/passageiro/atendimento" />
      <LinkList titulo="Perguntas frequentes" url="/passageiro/faq" />
    </LinkSection>
    <LinkSection titulo="Para Motorista">
      <LinkList titulo="Atendimento e suporte" url="/motorista/atendimento" />
      <LinkList titulo="Perguntas frequentes" url="/motorista/faq" />
    </LinkSection>
  </Wrap> */
);

const Menu = (props) => (
  <>
    <MenuLink text="Início" url="/" />
    <MenuLink tab={props.tab} setTab={props.setTab} text="Empresa" />
    <MenuLink text="Suporte e ajuda" url="/atendimento" />
    {/* <MenuLink tab={props.tab} setTab={props.setTab} text="Suporte e ajuda" /> */}
    <Botao url="/cadastro#cadastre" text="Seja um motorista" />
  </>
);

function MenuLink(props) {
  const router = useRouter();
  return (
    <Text
      style={{ transition: "all 200ms" }}
      fontFamily="Space Grotesk"
      fontWeight="700"
      borderBottomWidth={6}
      borderColor={router.pathname === props.url ? "pessego" : "branca"}
      color={router.pathname === props.url ? "pessego" : "branca"}
      _hover={{ borderColor: "pessego", color: "pessego", cursor: "pointer" }}
      p={{ base: "1rem", md: "2.5rem 2rem" }}
      as="a"
      href={props.url}
      onClick={() =>
        props.tab &&
        props.setTab({
          active: !props.tab.active || props.text !== props.tab.type,
          type: props.text,
        })
      }
    >
      {props.text}
      {props.tab && <ChevronDownIcon />}
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
      <Link passHref href="tel: (33) 99912-3456">
        <HStack _hover={{ color: "pessego", cursor: "pointer" }}>
          <TelSvg />
          <Text>(33) 99912-3456</Text>
        </HStack>
      </Link>
      <Link passHref href="mailto:contato@tionapp.com.br">
        <HStack _hover={{ color: "pessego", cursor: "pointer" }}>
          <MailSvg />
          <Text>contato@tionapp.com.br</Text>
        </HStack>
      </Link>
      <HStack>
        <ClockSvg />
        <Text>Seg-Sáb: 7h às 18h</Text>
      </HStack>
    </Flex>
    <SocialIcons />
  </>
);
