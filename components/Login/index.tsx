import { Flex, Text, ButtonProps, Img, Input, Button } from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { authenticate } from "../../services/login";
import { useUser } from "../../hooks/useUser";
import PersistentFramework from "../../utils/persistent";

export const Login: FunctionComponent<ButtonProps> = () => {
	const { push } = useRouter();
	const [email, setEmail] = useState<any>();
	const [password, setPassword] = useState<any>();
	const { getInfosId } = useUser();

	const handleLogin = async () => {
		const data = await authenticate(email, password);
		getInfosId(
			data.data.user?.investor_id === null
				? data.data?.user?.enterprise_id
				: data.data?.user?.investor_id
		);
		push(!data.user?.investor_id ? "/registrar" : "/oportunidades");
	};

	return (
		<Flex
			bgColor="#ffffff"
			width="100vw"
			height="100vh"
			justifyContent="space-between"
		>
			<Flex
				w="50%"
				h="100vh"
				justifyContent="center"
				alignItems="center"
				fontFamily="Poppins"
			>
				<Flex flexDirection="column" w="22rem" justifyContent="center">
					<Flex flexDirection="column" gap="2">
						<Img
							w="max-content"
							h="max-content"
							src="images/backgrounds/LivnLogo.png"
						/>
						<Text
							color="#1789A3"
							fontSize="0.875rem"
							fontWeight="normal"
							lineHeight="150%"
							fontStyle="normal"
						>
							Viva Investindo
						</Text>
					</Flex>
					<Flex flexDirection="column" mt="1rem" gap="12px">
						<Text
							flexDirection="column"
							fontStyle="normal"
							fontWeight="500"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							color="#2D3748"
						>
							E-mail
						</Text>
						<Input
							placeholder="Digite seu email"
							_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
							border="0.0938rem solid #E2E8F0"
							_hover={{}}
							_focus={{}}
							fontStyle="normal"
							fontWeight="400"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							borderRadius="0.375rem"
							h="2rem"
							pl="0.7rem"
							color="#2D3748"
							onChange={e => setEmail(e.target.value)}
						/>
					</Flex>
					<Flex flexDirection="column" mt="1.5rem" gap="0.75rem">
						<Flex justifyContent="space-between" alignItems="center">
							<Text
								flexDirection="column"
								fontStyle="normal"
								fontWeight="500"
								fontSize="0.875rem"
								lineHeight="1.25rem"
								color="#2D3748"
							>
								Senha
							</Text>
							<Text
								flexDirection="column"
								fontStyle="normal"
								fontWeight="500"
								fontSize="0.75rem"
								lineHeight="1rem"
								color="#007D99"
								_hover={{ cursor: "pointer" }}
								onClick={() => push("/esqueceu_senha")}
							>
								Esqueceu a senha?
							</Text>
						</Flex>
						<Input
							placeholder="Digite sua senha"
							_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
							border="0.0938rem solid #E2E8F0"
							_hover={{}}
							_focus={{}}
							fontStyle="normal"
							fontWeight="400"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							borderRadius="0.375rem"
							h="2rem"
							pl="0.7rem"
							color="#2D3748"
							onChange={e => setPassword(e.target.value)}
							type={"password"}
						/>
					</Flex>
					<Flex mt="2.5rem">
						<Button
							fontStyle="normal"
							fontWeight="500"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							color="#FFFFFF"
							border="none"
							borderRadius="0.5rem"
							w="100%"
							h="2.2rem"
							bgColor="#1789A3"
							onClick={handleLogin}
							_hover={{
								cursor: "pointer",
								bgColor: "#007D99",
								boxShadow:
									"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
							}}
						>
							Login
						</Button>
					</Flex>
					<Flex bgColor="#E2E8F0" h="0.0625rem" w="100%" mt="2rem" />
					<Flex
						justifyContent="center"
						alignItems="center"
						mt="1.5rem"
						gap="1rem"
					>
						<Text
							fontStyle="normal"
							fontWeight="normal"
							fontSize="0.75rem"
							lineHeight="150%"
							color="#2D3748"
						>
							Ainda não possui uma conta?
						</Text>
						<Button
							type="submit"
							fontStyle="normal"
							fontWeight="500"
							fontSize="0.75rem"
							lineHeight="1rem"
							color="#007D99"
							bg={"transparent"}
							_hover={{ opacity: 0.8 }}
						>
							Cadastrar
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Flex h="100%" w="54rem">
				<Img
					src="images/backgrounds/LoginBackground.png"
					h="100%"
					w="max-content"
				/>
			</Flex>
		</Flex>
	);
};
