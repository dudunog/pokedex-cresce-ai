import React, { useEffect } from "react"
import { type Signin as SigninUsecase } from "@/domain/usecases"
import { useAppSelector } from "@/main/providers"
import { type AuthenticationState } from "@/data/protocols/state-manager"
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export type SigninProps = {
  authentication: SigninUsecase
}

type SigninDataProps = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
}).required()

const Signin: React.FC<SigninProps> = ({
  authentication
}) => {
  const toast = useToast()

  const {
    error
  }: AuthenticationState = useAppSelector((state) => state.authentication)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<SigninDataProps>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: SigninDataProps): Promise<void> => {
    await authentication.signin(data.email, data.password)
  }

  useEffect(() => {
    toast({
      title: error?.error,
      status: "error",
      isClosable: true
    })
  }, [error])

  return (
    <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack w="full" maxW="md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Heading fontSize="2xl">Login</Heading>
            <Stack mt={5} spacing={4}>
              <FormControl id="email" isInvalid={Boolean(errors.email)}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <FormErrorMessage>
                  {errors?.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={Boolean(errors.password)}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Senha"
                  {...register("password")}
                />
                <FormErrorMessage>
                  {errors?.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack mt={5} spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between">
                <Checkbox>Lembre de mim</Checkbox>
              </Stack>
              <Button
                type="submit"
                colorScheme="orange"
                variant="solid"
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt="Pokeball"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Flex>
    </Stack>
  )
}

export default Signin
