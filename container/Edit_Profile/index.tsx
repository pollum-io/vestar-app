import { Button, Collapse, Flex, Img, SlideFade, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { InputComponent } from "../../components";
import { formatDateBirthday } from "../../utils/formatDate";
import { DefaultTemplate } from "../DefaultTemplate";
import { useQuery } from "react-query";
import { useUser } from "../../hooks/useUser";
import { fetchEditInvestor } from "../../services/fetchEditInvestor";
import { useToasty } from "../../hooks/useToasty";
import { formatCPF } from "../../utils/formatCpf";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";
import { SelectComponent } from "../../components/Select/SelectComponent";

const estadosCivis = [
	{ id: 1, name: "Solteiro(a)" },
	{ id: 2, name: "Casado(a)" },
	{ id: 3, name: "União Estável" },
	{ id: 4, name: "Viúvo(a)" },
	{ id: 5, name: "Separado(a) judicialmente" },
	{ id: 6, name: "Divorciado(a)" },
];

const estadosRegimesPatrimoniais = [
	{ id: 1, name: "Comunhão parcial de bens" },
	{ id: 2, name: "Comunhão universal de bens)" },
	{ id: 3, name: "Separação total de bens" },
	{ id: 4, name: "Participação final nos aquestos)" },
];
interface IEditProfile {
	data: any;
}

export const Edit_ProfileContainer: FunctionComponent<any> = props => {
	const { data, token } = props;
	const [pagePath, setPagePath] = useState("personal");
	const [isDisabled, setIsDisabled] = useState(true);
	const [maritalStatus, setMaritalStatus] = useState<any>("");
	const [equityRegime, setEquityRegime] = useState<any>("");
	const {
		register,
		handleSubmit,
		control,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm();
	const { userInfos } = useUser();
	const { toast } = useToasty();
	const dataFormatada = new Date(data?.birthday_date)
		.toISOString()
		.split("T")[0];
	console.log(maritalStatus, "maritalStatus");

	console.log(data, "Dados vindo da API");

	const onSubmitForm = async (data: any) => {
		console.log(data, "Dados chegando na funcao");

		const request = {
			full_name: data.full_name,
			mother_name: data.mother_name,
			city_of_birth: data.city_of_birth,
			birthday_date: new Date(data.birthday_date),
			cpf: data.cpf.replace(/[^\w]/gi, "").replace(/\s+/g, ""),
			rg: data.rg,
			cnh: data.cnh,
			marital_status: {
				status: maritalStatus,
				equity_regime: equityRegime,
				spouse_name: data.spouse_name,
				spouse_cpf: data.spouse_cpf,
				spouse_rg: data.spouse_rg,
			},
			address: data.address,
			profession: data.profession,
			email: data.email,
			phone_number: data.phone_number
				.replace(/[^\w]/gi, "")
				.replace(/\s+/g, ""),
		};

		await fetchEditInvestor(userInfos, request, token)
			.then(res => {
				if (res) {
					console.log(res, "res");

					toast({
						id: "toast-edit",
						position: "top-right",
						status: "success",
						title: "Dados editados!",
						description: "Os seus dados foram atualizados!",
					});
				}
			})
			.catch(err => {
				console.log({ err });
			});
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
										<Flex flexDirection="column" gap="0.25rem" mb="2.75rem">
											<InputComponent
												label="Nome"
												type="text"
												{...register("full_name")}
												defaultValue={data?.full_name}
											/>
											<InputComponent
												label="Nome da Mãe"
												type="text"
												{...register("mother_name")}
												defaultValue={data?.mother_name}
											/>
											<InputComponent
												label="Cidade de nascimento"
												type="text"
												{...register("city_of_birth")}
												defaultValue={data?.city_of_birth}
											/>
											<InputComponent
												label="Data de Nascimento "
												type="date"
												{...register("birthday_date")}
												defaultValue={dataFormatada}
											/>
											<InputComponent
												label="CPF"
												type="text"
												maxLength={14}
												{...register("cpf")}
												defaultValue={formatCPF(data?.cpf)}
											/>
											<InputComponent
												label="RG"
												type="text"
												{...register("rg")}
												defaultValue={data?.rg}
											/>
											<InputComponent
												label="CNH"
												type="text"
												{...register("cnh")}
												defaultValue={data?.cnh}
											/>
										</Flex>
									</Flex>
									<Flex
										flexDirection="column"
										gap="0.25rem"
										fontFamily="Poppins"
										fontStyle="normal"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										w="20rem"
									>
										<SelectComponent
											defaultValue={data?.marital_status?.status}
											setData={setMaritalStatus}
											label="Estado Civil"
											type="marital"
											selectValue={estadosCivis}
											{...register("status")}
										/>
										<Collapse
											in={
												maritalStatus === "Casado(a)" ||
												data?.marital_status?.status === "Casado(a)"
											}
										>
											<SelectComponent
												defaultValue={data.marital_status?.equity_regime}
												setData={setEquityRegime}
												label="Regime Patrimonial"
												type="regime_patrimonial"
												selectValue={estadosRegimesPatrimoniais}
												{...register("equity_regime")}
											/>
											<InputComponent
												label="Nome Completo do Cônjuge"
												type="text"
												{...register("spouse_name")}
												defaultValue={data?.marital_status?.spouse_name}
											/>
											<InputComponent
												label="CPF do Cônjuge"
												type="text"
												{...register("spouse_cpf")}
												defaultValue={formatCPF(
													data?.marital_status?.spouse_cpf
												)}
											/>
											<InputComponent
												label="RG do Cônjuge"
												type="text"
												{...register("spouse_rg")}
												defaultValue={data?.marital_status?.spouse_rg}
											/>
										</Collapse>
										<InputComponent
											label="Endereço Residencial"
											type="text"
											{...register("address")}
											defaultValue={data?.address}
										/>
										<InputComponent
											label="Ocupação Profissional"
											type="text"
											{...register("profession")}
											defaultValue={data?.profession}
										/>
										<InputComponent
											label="Email"
											type="email"
											{...register("email")}
											defaultValue={data?.email}
										/>
										<InputComponent
											label="Telefone"
											type="text"
											maxLength={15}
											{...register("phone_number")}
											defaultValue={formatPhoneNumber(data?.phone_number)}
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
										isDisabled={!isDisabled}
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
