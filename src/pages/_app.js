import "../styles/globals.css";
import { theme } from "../styles/theme";
import { ContextProvider } from "../contexts/Context";
import { useUserData } from '../lib/hooks';

import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {

  const userData = useUserData();
  
  return (
    <ChakraProvider theme={theme}>
      <ContextProvider value={userData}>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
