import {
  Button,
} from "@chakra-ui/react";

export const ContactButton = (props) => (
  <Button
    bg="#f7f7f7"
    as="a"
    target="_blank"
    href={props.href}
    disabled={!props.type}
    borderRadius={0}
    fontSize="0.7rem"
    _hover={{ bg: "azul" }}
    flex={1}
    fontWeight={400}
    sx={{ svg: { fill: "pessego" }, _hover: { svg: { fill: "azul" } } }}
  >
    {props.icon}
  </Button>
);
