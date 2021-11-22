import { HStack, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { FaceSvg, InstaSvg, WhatsSvg } from "../icons";

export function SocialIcons() {
  return (
    <HStack>
      <FaceSvg />
      <WhatsSvg />
      <InstaSvg />
    </HStack>
  );
}
