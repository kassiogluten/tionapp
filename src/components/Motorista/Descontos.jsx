import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Box,
  Wrap,
  Button,
  Image,
  Badge,
  Spacer,
  CircularProgress,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";

import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { firestore } from "../../lib/firebase";

export function ContentDescontos() {
  const [parceiros, setParceiros] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function getParceiros() {
      setLoading(true)
      const ref = await firestore
        .collectionGroup("parceiros")
        .orderBy("id", "asc")
        .get();

      setParceiros(ref.docs.map((doc) => doc.data()));
      setLoading(false)
      // console.log(parceiros);
    }
    getParceiros();
  }, []);

  return (
    <Flex as="section" justify="center" align="center" w="100%">
      <Wrap
        pb="3rem"
        align="center"
        maxW={1200}
        w="full"
        justify="center"
        color="pessego"
        spacing={8}
      >
        {!loading ? (
          parceiros.map((parceiro) => (
            <Card
              key={parceiro.heading}
              heading={parceiro.heading}
              img={parceiro.img}
              text={parceiro.text}
              address={parceiro.address}
              whatsapp={parceiro.whatsapp}
              tel={parceiro.tel || parceiro.whatsapp}
            />
          ))
        ) : (
          <>
            <Esqueleto />
            <Esqueleto />
            <Esqueleto />
          </>
        )}
      </Wrap>
    </Flex>
  );
}

const Esqueleto = () => (
  <Flex justify="space-between" flexDir="column" w={300} h={400} bg="white">
    <Skeleton height="180px" />
    <Skeleton mx="1rem" mt={4} height="40px" />
    <SkeletonText mx="1rem" mt="4" noOfLines={3} spacing="4" />
    <HStack mb="5px" mx="1rem">
      <Skeleton w="30%" height="30px" />
      <Skeleton w="30%" height="30px" />
      <Skeleton w="30%" height="30px" />
    </HStack>
  </Flex>
);

const Card = (props) => (
  <VStack
    h={450}
    width={300}
    position="relative"
    m="1rem"
    bg="branco"
    align="center"
  >
    <Box width={300} height={200} pos="relative" overflow="hidden">
      <Image
        w="full"
        h={200}
        fit="contain"
        alt={props.heading}
        src={props.img || "/logo.jpg"}
        zIndex={3}
        position="relative"
      />
      <Box
        sx={{
          filter: "blur(8px)",
          WebkitFilter: "blur(8px)",
          transform: "scale(1.2)",
        }}
        w="full"
        h="full"
        pos="absolute"
        bgImage={props.img}
        bgSize="auto"
        bgPos="center"
        top={0}
        left={0}
        zIndex={2}
      />
    </Box>
    <Flex
      flexDir="column"
      maxH={250}
      overflowY="hidden"
      w="full"
      justify="space-between"
      p="1.5rem"
    >
      <Heading fontSize={28} lineHeight={1} pb={4} maxW={228}>
        {props.heading}
      </Heading>
      <Text
        lineHeight={1.1}
        fontSize="0.9rem"
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </Flex>
    <Box
      position="absolute"
      bottom={0}
      h="4px"
      w="70%"
      bgGradient="linear(to-r, pessego, gradient2)"
    />
    <Spacer />
    <HStack pb={1} w="70%">
      <Button
        bg="branco"
        as="a"
        target="_blank"
        href={
          props.address
            ? `https://www.google.com/maps/place/ ${props.address} Caratinga`
            : null
        }
        colorScheme="blackAlpha"
        disabled={!props.address}
        borderRadius={0}
        fontSize="0.7rem"
        _hover={{ bg: "azul" }}
        flex={1}
        fontWeight={400}
        sx={{ svg: { fill: "pessego" } }}
      >
        <FaMapMarkerAlt size={16} />
      </Button>
      <Button
        bg="branco"
        as="a"
        target="_blank"
        href={
          props.whatsapp
            ? "https://api.whatsapp.com/send?phone=+55" + props.whatsapp
            : null
        }
        colorScheme="blackAlpha"
        disabled={!props.whatsapp}
        borderRadius={0}
        fontSize="0.7rem"
        _hover={{ bg: "azul" }}
        flex={1}
        fontWeight={400}
        sx={{ svg: { fill: "pessego" } }}
      >
        <FaWhatsapp size={16} />
      </Button>
      <Button
        bg="branco"
        disabled={!props.tel}
        as="a"
        href={props.tel ? "tel:" + props.tel : null}
        borderRadius={0}
        fontSize="0.7rem"
        _hover={{ bg: "azul" }}
        flex={1}
        fontWeight={400}
        sx={{ svg: { fill: "pessego" } }}
      >
        <FaPhoneAlt size={16} />
      </Button>
    </HStack>
  </VStack>
);
