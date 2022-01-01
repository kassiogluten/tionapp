/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import debounce from "lodash.debounce";
import { useMyContext } from "../contexts/Context";

import { useAuthState } from "react-firebase-hooks/auth";
import { FaPen, FaTools, FaUserCog } from "react-icons/fa";

export function User() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return (
    <Center h={450}>
      {user ? (
        !username ? (
          <RegisterUsername />
        ) : (
          <UserInfo username={username} />
        )
      ) : (
        <SignInButton />
      )}
    </Center>
  );
}

function SignInButton(props) {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return <Button onClick={signInWithGoogle}>Entrar com Google</Button>;
}

function UserInfo(props) {
  const { setUser } = useMyContext();
  const [user] = useAuthState(auth);
  useEffect(() => {
    setUser(user);
  }, [user]);
  return (
    <Flex
      align="center"
      flexDir="column"
      h="full"
      justifyContent="space-between"
      px={6}
      py={4}
      w="full"
    >
      <Text fontSize=".8rem">{props.username}</Text>
      <Avatar size="lg" src={user?.photoURL} alt={user?.displayName} />
      <Text fontWeight="bold">{user?.displayName}</Text>
      <Text fontSize=".8rem">{user?.email}</Text>

      <Accordion w="100%" allowToggle>
        <Panel user={user} icon={<FaUserCog />} title="Perfil">
          <Text opacity={0.5}>
            Membro desde:{" "}
            {new Date(user?.metadata.creationTime).toLocaleString("pt-BR")}
          </Text>
          <Text opacity={0.5}>
            Último login:{" "}
            {new Date(user?.metadata.lastSignInTime).toLocaleString("pt-BR")}
          </Text>
          <Button mt={4} onClick={() => auth.signOut()}>
            Desconectar
          </Button>
        </Panel>
        <Panel user={user} icon={<FaPen />} title="Posts">
          Você ainda não tem posts.
        </Panel>
        <Panel user={user} icon={<FaTools />} title="Configurações">
          Somente o administrador pode alterar as configurações.
        </Panel>
      </Accordion>
    </Flex>
  );
}

const Panel = (props) => (
  <AccordionItem
    _focus={{ outline: 0 }}
    borderRadius={8}
    bg="#00000033"
    mb={2}
    fontSize="0.8rem"
    border="none"
  >
    <AccordionButton lineHeight={1}>
      <Box sx={{ svg: { mr: 2 } }} spacing={8} flex="1" textAlign="left">
        {props.icon} {props.title}
      </Box>
      <AccordionIcon />
    </AccordionButton>

    <AccordionPanel>{props.children}</AccordionPanel>
  </AccordionItem>
);

function RegisterUsername() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username } = useMyContext();
  const [user] = useAuthState(auth);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, {
      username: formValue,
      photoURL: user.photoURL,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
  };

  const onChange = (e) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  //

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  return (
    !username && (
      <Center
        as="form"
        onSubmit={onSubmit}
        h={250}
        justifyContent="space-between"
        align="center"
        flexDir="column"
      >
        <Text fontWeight="bold">Cadastre seu nome de usuário</Text>
        <Input
          name="username"
          placeholder="Digite seu usuario"
          value={formValue}
          onChange={onChange}
        />
        <UsernameMessage
          username={formValue}
          isValid={isValid}
          loading={loading}
        />
        <Button
          as="button"
          type="submit"
          className="btn-green"
          disabled={!isValid}
        >
          Cadastrar
        </Button>
        {!isValid && (
          <Button onClick={() => auth.signOut()}>Desconectar</Button>
        )}

        {/*           <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div> */}
      </Center>
    )
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <Text>Verificando...</Text>;
  } else if (isValid) {
    return <Text color="green.300">{username} está disponível!</Text>;
  } else if (username && !isValid) {
    return <Text color="red.300">Este usuário já existe!</Text>;
  } else {
    return <Text></Text>;
  }
}
