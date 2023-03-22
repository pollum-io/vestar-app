import {
	Flex,
	Text,
	Button,
	Img,
	Input,
	Collapse,
	PinInput,
	PinInputField,
	HStack,
	InputGroup,
	InputRightElement,
	ScaleFade,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FunctionComponent, useMemo, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PasswordStrengthBar from "react-password-strength-bar";

export const Forgot_PasswordContainer: FunctionComponent = () => {
	//pages states
	const [emailPage, setEmailPage] = useState<boolean>(true);
	const [pinPage, setPinPage] = useState<boolean>(false);
	const [passwordPage, setPasswordPage] = useState<boolean>(false);
	//inputs validation
	const [validCode, setValidCode] = useState<number>(0);
	const [isEmailValid, setIsEmailValid] = useState<string>("0");
	//password states
	const [buttonScore, setButtonScore] = useState<any>()
	const [isButtonValid, setIsButtonValid] = useState<any>()
	const [firstPassword, setFirstPassword] = useState<any>()
	const [secondPassword, setSecondPassword] = useState<any>()
	const [showPasswordInputOne, setShowPasswordInputOne] = useState<boolean>(false);
	const [showPasswordInputTwo, setShowPasswordInputTwo] = useState<boolean>(false);

	const { push } = useRouter();

	useMemo(() => {
		if (buttonScore < 2 || firstPassword !== secondPassword) {
			return setIsButtonValid(true)
		} else {
			return setIsButtonValid(false)
		}
	}, [buttonScore, firstPassword, secondPassword])

	return (
		<Flex
			bgColor="#ffffff"
			width="100vw"
			height="100vh"
			justifyContent="center"
			alignItems="center"
		>
			<ScaleFade in={emailPage || pinPage || passwordPage}>
				<Flex
					flexDirection="column"
					w="20rem"
					justifyContent="center"
					fontFamily="Poppins"
				>
					<Flex flexDirection="column" gap="0.625rem">
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
							Redefinir senha
						</Text>
					</Flex>
					{emailPage && (
						<Flex id="Insert email" flexDirection="column" mt="1rem" gap="1.5rem">
							<Text
								fontStyle="normal"
								fontWeight="400"
								fontSize="12px"
								lineHeight="150%"
								color="#2D3748"
								display={"flex"}
							>
								Digite seu e-mail para o processo de verificação, enviaremos um código para o endereço informado.
							</Text>
							<Flex flexDirection="column" gap="0.5rem">
								<Text
									flexDirection="column"
									fontStyle="normal"
									fontWeight="500"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#2D3748"
									display={"flex"}
								>
									E-mail
								</Text>
								<InputGroup size="md">
									<Input
										placeholder={"exemplo@exemplo.com"}
										_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
										border="0.0938rem solid #E2E8F0"
										type={"email"}
										_hover={{}}
										fontStyle="normal"
										fontWeight="400"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										borderRadius="0.375rem"
										h="2rem"
										pl="0.7rem"
										color="#2D3748"
										onChange={e => setIsEmailValid(e.target.value)}
									/>
								</InputGroup>
							</Flex>
							<Flex flexDir={"column"} gap="1.25rem" alignItems={"center"}>
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
									_hover={{ cursor: "pointer", bgColor: "#007D99", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)" }}
									onClick={() => { setEmailPage(false); setPinPage(true) }}
									isDisabled={isEmailValid <= "0" ? true : false}
								>
									Enviar código
								</Button>
								<Text
									fontStyle="normal"
									fontWeight="500"
									fontSize="0.875rem"
									color="#007D99"
									border="none"
									borderRadius="0.5rem"
									w="max"
									bgColor="transparent"
									_hover={{ cursor: "pointer", opacity: "0.3" }}
									transition={"0.4s"}
									onClick={() => push("/")}
								>
									Voltar ao login
								</Text>
							</Flex>
						</Flex>
					)}
					<ScaleFade in={pinPage}>
						<Flex id='Insert pin' flexDirection="column" mt="1rem" display={pinPage ? "flex" : "none"}>
							<Text
								mt="0.5rem"
								fontStyle="normal"
								fontWeight="400"
								fontSize="12px"
								color="#2D3748"
								display={"flex"}
							>
								Digite o código de 4 dígitos que você recebeu em seu e-mail.
							</Text>
							<HStack mt="1.5rem" mb="2rem" justifyContent="space-between">
								<PinInput
									type="number"
									onChange={e => setValidCode(e.length)}
								>
									<PinInputField
										border="1px solid #E2E8F0"
										borderRadius="0.375rem"
										w="4.25rem"
										h="2rem"
										_hover={{}}
										color="#2D3748"
									/>
									<PinInputField
										border="1px solid #E2E8F0"
										borderRadius="0.375rem"
										w="4.25rem"
										h="2rem"
										alignSelf="stretch"
										_hover={{}}
										color="#2D3748"
									/>
									<PinInputField
										border="1px solid #E2E8F0"
										borderRadius="0.375rem"
										w="4.25rem"
										h="2rem"
										_hover={{}}
										color="#2D3748"
									/>
									<PinInputField
										border="1px solid #E2E8F0"
										borderRadius="0.375rem"
										w="4.25rem"
										h="2rem"
										_hover={{}}
										color="#2D3748"
									/>
								</PinInput>
							</HStack>
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
								_hover={{ cursor: "pointer", bgColor: "#007D99", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)" }}
								isDisabled={validCode <= 3 ? true : false}
								onClick={() => { setPinPage(false); setPasswordPage(true) }}
							>
								Verificar
							</Button>
							<Flex mt={"2rem"} bgColor="#E2E8F0" h="0.0625rem" w="100%" />
							<Flex justifyContent={"space-evenly"}>
								<Text
									mt="0.5rem"
									fontStyle="normal"
									fontWeight="400"
									fontSize="12px"
									color="#2D3748"
									display={"flex"}
								>
									Não recebeu o código?
								</Text>
								<Text
									mt="0.5rem"
									fontStyle="normal"
									fontWeight="500"
									fontSize="12px"
									color="#007D99"
									display={"flex"}
								>
									Reenviar Código
								</Text>
							</Flex>

						</Flex>
					</ScaleFade>
					<ScaleFade in={passwordPage}>
						<Flex id='Insert new password' flexDirection="column" mt="1rem">
							<Flex flexDirection="column" gap="0.5rem">
								<Text
									flexDirection="column"
									fontStyle="normal"
									fontWeight="500"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#2D3748"
									display={"flex"}
								>
									Nova senha
								</Text>
								<InputGroup size="md">
									<Input
										placeholder={"Digite aqui"}
										_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
										border="0.0938rem solid #E2E8F0"
										type={showPasswordInputOne ? "password" : "text"}
										_hover={{}}
										fontStyle="normal"
										fontWeight="400"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										borderRadius="0.375rem"
										h="2rem"
										pl="0.7rem"
										color="#2D3748"
										onChange={e => setFirstPassword(e.target.value)}

									/>
									<InputRightElement
										display={"flex"}
										onClick={() => setShowPasswordInputOne(!showPasswordInputOne)}
										alignItems="center"
										_hover={{ cursor: "pointer" }}
										pb="0.55rem"
									>
										{showPasswordInputOne ? (
											<AiOutlineEyeInvisible size={25} color="#2D3748" />
										) : (
											<AiOutlineEye size={25} color="#2D3748" />
										)}
									</InputRightElement>
								</InputGroup>
								<Text fontWeight={"400"} fontSize={"xs"} color={"rgba(0, 0, 0, 0.36)"}>Deve conter no mínimo 8 caracteres incluindo números e letras</Text>
							</Flex>
							<Flex flexDirection="column" gap="0.5rem" mt={"1.5rem"}>
								<Text
									flexDirection="column"
									fontStyle="normal"
									fontWeight="500"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#2D3748"
									display={"flex"}
								>
									Confirmar nova senha
								</Text>
								<InputGroup size="md">
									<Input
										placeholder={"Digite aqui"}
										_placeholder={{ color: "rgba(0, 0, 0, 0.36)" }}
										border="0.0938rem solid #E2E8F0"
										type={showPasswordInputTwo ? "password" : "text"}
										_hover={{}}
										fontStyle="normal"
										fontWeight="400"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										borderRadius="0.375rem"
										h="2rem"
										pl="0.7rem"
										color="#2D3748"
										onChange={e => setSecondPassword(e.target.value)}
									/>
									<InputRightElement
										display={"flex"}
										onClick={() => setShowPasswordInputTwo(!showPasswordInputTwo)}
										alignItems="center"
										_hover={{ cursor: "pointer" }}
										pb="0.55rem"
									>
										{showPasswordInputTwo ? (
											<AiOutlineEyeInvisible size={25} color="#2D3748" />
										) : (
											<AiOutlineEye size={25} color="#2D3748" />
										)}
									</InputRightElement>
								</InputGroup>
								<PasswordStrengthBar onChangeScore={(score, feedback) => setButtonScore(score)} minLength={8} password={firstPassword} />
							</Flex>
							<Button
								fontStyle="normal"
								fontWeight="500"
								fontSize="0.875rem"
								lineHeight="1.25rem"
								mt={"2rem"}
								color="#FFFFFF"
								border="none"
								borderRadius="0.5rem"
								w="100%"
								h="2.2rem"
								bgColor="#1789A3"
								_hover={{ cursor: "pointer", bgColor: "#007D99", boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)" }}
								isDisabled={isButtonValid}
								onClick={() => push("/oportunidades")}
							>
								Continuar
							</Button>

						</Flex>
					</ScaleFade>
				</Flex>
			</ScaleFade>

		</Flex>
	);
};
