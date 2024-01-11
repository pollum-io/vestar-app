import React, { useMemo, useState } from "react";
import {
	Button,
	Flex,
	Img,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PasswordStrengthBar from "react-password-strength-bar";
import { useToasty } from "../../hooks/useToasty";
import { fetchChangePassword } from "../../services/fetchChangePassword";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { fetchCreateUser } from "../../services/fetchCreateUser";

type ComponentProps = {};

export const CreateAccountContainer: React.FC<ComponentProps> = props => {
	const [email, setEmail] = useState<any>();
	const [password, setPassword] = useState<any>();
	const { push } = useRouter();
	const { t } = useTranslation();
	const [buttonScore, setButtonScore] = useState<any>();
	const [isButtonValid, setIsButtonValid] = useState<any>();
	const [firstPassword, setFirstPassword] = useState<any>();
	const [secondPassword, setSecondPassword] = useState<any>();
	const [showPasswordInputOne, setShowPasswordInputOne] =
		useState<boolean>(true);
	const [showPasswordInputTwo, setShowPasswordInputTwo] =
		useState<boolean>(true);
	const { toast } = useToasty();

	useMemo(() => {
		if (buttonScore < 2 || firstPassword !== secondPassword) {
			setIsButtonValid(false);
		} else {
			setPassword(secondPassword);
			setIsButtonValid(true);
		}
	}, [buttonScore, firstPassword, secondPassword]);

	const handleVerifyPasswordChange = async () => {
		const data = { email, password };
		try {
			await fetchCreateUser(data);
			toast({
				id: "toast-login-suc",
				position: "top-right",
				status: "success",
				title: t("toast.accountCreated"),
				description: t("toast.accountCreatedDesc"),
			});
			push("/");
		} catch {
			console.error("Error on create an account");
		}
	};

	return (
		<Flex
			w={"100vw"}
			h="100vh"
			flexDirection="column"
			alignItems={"center"}
			justifyContent="center"
		>
			<Img
				position={"absolute"}
				zIndex={"1"}
				w="100vw"
				h="100vh"
				src="/images/backgrounds/loginBg.jpg"
			/>
			<Flex
				flexDir={"column"}
				zIndex={"99"}
				p="3rem"
				borderRadius={"12px"}
				boxShadow="0rem 1.25rem 1.5625rem rgba(31, 41, 55, 0.1), 0rem 0.625rem 0.625rem rgba(31, 41, 55, 0.04)"
			>
				<Text
					bgGradient="linear(to-r, #3a8da0, #9ccbd6 )"
					bgClip="text"
					fontSize="1.2rem"
					fontWeight="extrabold"
				>
					Create your account
				</Text>
				<Flex
					flexDirection="column"
					mt="1rem"
					gap="12px"
					w={"25rem"}
					zIndex={"99"}
				>
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
						placeholder={t("login.placeholderEmail") as any}
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
				<Flex
					id="Insert new password"
					flexDirection="column"
					mt="1rem"
					w={"25rem"}
					zIndex={"99"}
				>
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
							{t("forgotPassword.newPassword") as string}
						</Text>
						<InputGroup size="md">
							<Input
								placeholder={t("forgotPassword.typeHere") as string}
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
						<Text
							fontWeight={"400"}
							fontSize={"xs"}
							color={"rgba(0, 0, 0, 0.36)"}
						>
							{t("forgotPassword.mustContain") as string}
						</Text>
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
							{t("forgotPassword.confirmPassword") as string}
						</Text>
						<InputGroup size="md">
							<Input
								placeholder={t("forgotPassword.typeHere") as string}
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
						<PasswordStrengthBar
							onChangeScore={(score, feedback) => setButtonScore(score)}
							minLength={8}
							password={firstPassword}
						/>
					</Flex>
					<Flex mt={"10"}>
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
							_hover={{
								cursor: "pointer",
								bgColor: "#007D99",
								boxShadow:
									"0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
							}}
							isDisabled={isButtonValid === false}
							onClick={() => handleVerifyPasswordChange()}
						>
							{t("forgotPassword.confirm")}
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
