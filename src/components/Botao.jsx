import { Button } from "@chakra-ui/button";

export const Botao = (props) => (
  <Button {...props}
    _hover={{ transform: "scale(1.01)", boxShadow: "0 0 6px #FF4655, 0 0 12px #FF465577"}}
    colorScheme="none"
    bgGradient="linear(to-r, pessego, gradient2)"
    h="54px"
    px={12}
    fontSize="16px"
    borderRadius={0}
    color="branco"
    w={props.w || 'inherit'}
  >
    {props.text}
  </Button>
);
