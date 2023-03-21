import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { DefaultInput } from "../../components";
import { formatDateBirthday } from "../../utils/formatDate";
import { DefaultTemplate } from "../DefaultTemplate";
import { useQuery } from "react-query";
import { useUser } from "../../hooks/useUser";
import { fetchEditInvestor } from "../../services/fetchEditInvestor";
import { useToasty } from "../../hooks/useToasty";

interface IEditProfile {
	data: any;
}

export const Edit_ProfileContainer: FunctionComponent<any> = props => {
	const { data, token } = props;
	const [pagePath, setPagePath] = useState("personal");
	const [isDisabled, setIsDisabled] = useState(true);
	const [isMarried, setIsMarried] = useState(true);
	const {
		register,
		handleSubmit,
		control,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm();
	const { userInfos } = useUser()
	const { toast } = useToasty();


	console.log(data, "investor")

	const onSubmitForm = async (data: any) => {
		const request =
		{
			full_name: data.full_name,
			mother_name: data.mother_name,
			city_of_birth: data.city_of_birth,
			birthday_date: data.birthday_date,
			cpf: data.cpf,
			rg: data.rg,
			cnh: data.cnh,
			marital_status: data.marital_status,
			address: data.address,
			profession: data.profession,
			email: data.email,
			phone_number: data.phone_number,
		}

		// await fetchEditInvestor(userInfos, request, token).then(res => {
		// 	if (res) {
		// 		toast({
		// 			id: "toast-edit",
		// 			position: "top-right",
		// 			status: "success",
		// 			title: "Dados editados!",
		// 			description:
		// 				"Os seus dados foram atualizados!",
		// 		});
		// 	}
		// })
		// 	.catch(err => {
		// 		console.log({ err });
		// 	});

	};

	return (
		<DefaultTemplate>
			<Flex
				w="100%"
				alignItems="center"
				justifyContent="center"
				px={["unset", "unset", "2rem", "5rem"]}
				pt="6.25rem"
				pb="7rem"
			>
				<Flex
					w="100%"
					maxWidth="70rem"
					justifyContent="space-between"
					gap={["unset", "unset", "2rem", "2rem", "2rem"]}
				>
					<Flex>
						<Button
							w="8.4375rem"
							h="2.25rem"
							borderRadius="0rem"
							bgColor="transparent"
							borderLeft={
								pagePath === "personal" ? "0.125rem solid #007D99" : "none"
							}
							color={pagePath === "personal" ? "#007D99" : "#4A5568"}
							_hover={{ color: "#007D99" }}
							_active={{}}
							fontFamily="Poppins"
							fontWeight="500"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							onClick={() => setPagePath("personal")}
						>
							Dados Pessoais
						</Button>
					</Flex>
					<Flex w="100%" justifyContent="end">
						<Flex
							flexDirection="column"
							gap="2.75rem"
							w="100%"
							maxWidth="47.4375rem"
						>
							<Flex gap="1.5rem" alignItems="center">
								<Img src="/icons/Avatar.png" w="6rem" h="6rem" />
								<Text
									fontFamily="Poppins"
									fontWeight="600"
									fontSize="1.5rem"
									lineHeight="2rem"
									alignItems="center"
									color="#171923"
								>
									Editar Perfil
								</Text>
							</Flex>

							<form onSubmit={handleSubmit(onSubmitForm)}>
								<Flex justifyContent="space-between" w="100%">
									<Flex
										flexDirection="column"
										fontFamily="Poppins"
										fontStyle="normal"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#2D3748"
										w="100%"
										maxWidth="18.5rem"
										gap="1.5rem"
									>
										<Flex flexDirection="column" gap="0.25rem">
											<Text fontWeight="500">Nome Completo</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"full_name"}
												register={register}
												defaultValue={data.full_name}
											/>
										</Flex>
										<Flex flexDirection="column">
											<Text fontWeight="500">Nome da Mãe</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"mother_name"}
												register={register}
											/>
										</Flex>
										<Flex flexDirection="column">
											<Text fontWeight="500">Cidade de Nascimento</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"city_of_birth"}
												register={register}
											/>
										</Flex>
										<Flex flexDirection="column" gap="0.25rem">
											<Text fontWeight="500">Data de Nascimento </Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"birthday_date"}
												register={register}
												defaultValue={formatDateBirthday(data.birthday_date)}
											/>
										</Flex>
										<Flex flexDirection="column" gap="0.25rem">
											<Text fontWeight="500">CPF</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"cpf"}
												register={register}
												defaultValue={data.cpf}
											/>
										</Flex>
										<Flex flexDirection="column">
											<Text fontWeight="500">RG</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"rg"}
												register={register}
											/>
										</Flex>
										<Flex flexDirection="column">
											<Text fontWeight="500">CNH</Text>
											<DefaultInput
												color="#2D3748"
												placeholderColor="#2D3748"
												bgColor="transparent"
												inputSize="100%"
												type="text"
												border="0.0625rem solid #E2E8F0"
												inputColor="#2D3748"
												registerType={"cnh"}
												register={register}
											/>
										</Flex>
									</Flex>
									<Flex
										flexDirection="column"
										gap="1.5rem"
										fontFamily="Poppins"
										fontStyle="normal"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										w="20rem"
									>
										<DefaultInput
											title="Estado Civil"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											registerType={"marital_status"}
											register={register}
										/>
										<DefaultInput
											title="Nome Completo do Cônjuge"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											display={isMarried}
											registerType={""}
											register={register}
										/>
										<DefaultInput
											title="CPF do Cônjuge"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											display={isMarried}
											registerType={""}
											register={register}
										/>
										<DefaultInput
											title="RG do Cônjuge"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											display={isMarried}
											registerType={""}
											register={register}
										/>
										<DefaultInput
											title="Endereço Residencial"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											registerType={"address"}
											register={register}
										/>
										<DefaultInput
											title="Ocupação Profissional"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											registerType={"profession"}
											register={register}
										/>
										<DefaultInput
											title="E-mail"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="100%"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											registerType={"email"}
											register={register}
										/>
										<DefaultInput
											title="Telefone"
											color="#2D3748"
											placeholderColor="#2D3748"
											bgColor="transparent"
											inputSize="9.875rem"
											type="text"
											border="0.0625rem solid #E2E8F0"
											inputColor="#2D3748"
											registerType={"phone_number"}
											register={register}
										/>
									</Flex>
								</Flex>
								<Flex w="100%" justifyContent="flex-start">
									<Button
										w="13.375rem"
										h="2rem"
										background="#2D3748"
										borderRadius="0.5rem"
										fontFamily="Poppins"
										fontWeight="500"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#FFFFFF"
										isDisabled={isDisabled}
										_hover={
											isDisabled ? { opacity: "0.3" } : { bgColor: "#171923" }
										}
										_active={{}}
										type="submit"
									>
										Salvar Alterações
									</Button>
								</Flex>
							</form>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};
