import {
  Avatar,
  HStack,
  useDisclosure,
  useRadio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { useMyContext } from "../contexts/Context";
import { FaceSvg, InstaSvg, WhatsSvg } from "../icons";
import { Entrar } from "./Entrar";

export function SocialIcons() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useMyContext();
  return (
    <HStack>
      <Avatar onClick={onOpen} mx={2} size="xs" src={user?.photoURL} />
      <a href="https://www.facebook.com/Tion-105421665306951">
        <FaceSvg />
      </a>
      <a href="https://api.whatsapp.com/send?phone=553398650761">
        <WhatsSvg />
      </a>
      <a href="https://www.instagram.com/tionapp/">
        <InstaSvg />
      </a>
      <Modal size="xs" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Entrar/>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
