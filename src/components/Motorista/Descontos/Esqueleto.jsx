import React from "react";
import {
  Flex,
  HStack,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

export const Esqueleto = () => (
  <Flex justify="space-between" flexDir="column" w={300} h={450} bg="white">
    <Skeleton height="200px" />
    <Skeleton mx="1rem" mt={4} height="40px" />
    <SkeletonText mx="1rem" mt="4" noOfLines={3} spacing="4" />
    <HStack mb="5px" mx="2.5rem">
      <Skeleton w="30%" height="30px" />
      <Skeleton w="30%" height="30px" />
      <Skeleton w="30%" height="30px" />
    </HStack>
  </Flex>
);


