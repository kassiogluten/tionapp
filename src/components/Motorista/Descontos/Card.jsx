import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { ContactButton } from "./ContactButton";

export const Card = (props) => (
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
      maxH={200}
      overflowY="hidden"
      h="full"
      w="full"
      justify="space-evenly"
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
      <ContactButton
        href={
          props.address
            ? `https://www.google.com/maps/place/ ${props.address} Caratinga`
            : null
        }
        type={props.address}
        icon={<FaMapMarkerAlt size={16} />}
      />
      <ContactButton
        href={
          props.whatsapp
            ? "https://api.whatsapp.com/send?phone=+55" + props.whatsapp
            : null
        }
        type={props.whatsapp}
        icon={<FaWhatsapp size={16} />}
      />
      <ContactButton
        href={props.tel ? "tel:" + props.tel : null}
        type={props.tel}
        icon={<FaPhoneAlt size={16} />}
      />
    </HStack>
  </VStack>
);
