import { HStack, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { FaceSvg, InstaSvg, WhatsSvg } from "../icons";

export function SocialIcons() {
  return (
    <HStack>
      <a href="https://www.facebook.com/Tion-105421665306951">
        <FaceSvg />
      </a>
      <a href="https://api.whatsapp.com/send?phone=553398650761">
        <WhatsSvg />
      </a>
      <a href="https://www.instagram.com/tionapp/">
        <InstaSvg />
      </a>
    </HStack>
  );
}
