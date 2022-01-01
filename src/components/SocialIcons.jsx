import {
  Avatar,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

import React from "react";
import { FaceSvg, InstaSvg, WhatsSvg } from "../icons";
import { User } from "./User";
import { auth } from "../lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

export function SocialIcons() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { user } = useMyContext();
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <HStack>
      <Avatar
        _hover={{ borderWidth: 2, cursor: "pointer" }}
        borderWidth={1}
        borderColor="pessego"
        onClick={onOpen}
        mx={2}
        size="xs"
        src={user?.photoURL}
      />
      <a href="https://www.facebook.com/Tion-105421665306951">
        <FaceSvg />
      </a>
      <a href="https://api.whatsapp.com/send?phone=553398650761">
        <WhatsSvg />
      </a>
      <a href="https://www.instagram.com/tionapp/">
        <InstaSvg />
      </a>
      <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={2} >
          <ModalCloseButton />
          <User />
        </ModalContent>
      </Modal>
    </HStack>
  );
}
