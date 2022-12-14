import { Center, Icon, Text } from "native-base";
import { Button } from "@/components/Button";

import { useAuth } from "@/hooks/useAuth";

import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";

export function SignIn() {
  const { singIn, isUserLoading } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" padding={7}>
      <Logo width={212} height={40} />

      <Button
        type="SECONDARY"
        title="CONTINUAR COM GOOGLE"
        leftIcon={
          <Icon as={Fontisto} name="google" color="white" size="lg" mb="1" />
        }
        mt="12"
        onPress={singIn}
        isLoading={isUserLoading}
      />
      <Text
        color="white"
        fontSize="12"
        fontFamily="heading"
        textAlign="center"
        mt="4"
      >
        Não utilizamos nenhuma informação além {"\n"}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}
