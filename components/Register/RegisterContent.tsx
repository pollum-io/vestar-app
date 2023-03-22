import React, { FunctionComponent, useState } from "react";
import { Flex, Checkbox, Button, Text, SlideFade } from "@chakra-ui/react";
import { useRegister } from "../../hooks/useRegister";
import { useToasty } from "../../hooks/useToasty";
import { InputComponent } from "../Inputs/DeafultInput/InputComponent";
import { useForm } from "react-hook-form";
import {
	BsArrowRightShort,
	BsArrowLeftShort,
	BsCircleFill,
} from "react-icons/bs";
import { RiCheckFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { fetchCreateInvestor } from "../../services/fetchCreateInvestor";
import { fetchCreateEnterprise } from "../../services/fetchCreateEnterprise";
import { SelectComponent } from "../Select/SelectComponent";
import { brasilStates } from "./states";

export const RegisterContent: FunctionComponent<any> = props => {
	const { token } = props;
	const [canSend, setCanSend] = useState(false);
	const {
		firstStep,
		secondStep,
		isPhysical,
		setFirstStep,
		setSecondStep,
		setIsPhysical,
	} = useRegister();
	const {
		register,
		handleSubmit,
		control,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm();
	const { push } = useRouter();
	const { toast } = useToasty();

	const onSubmitForm = async (data: any) => {
		const request = isPhysical
			? {
					enterprise_name: String(data.enterprise_name),
					cnpj: data.cnpj.replace(/[-./]/g, ""),
					uf: data.uf,
					is_legal_entity: isPhysical,
					invited_by: String(data.invited_by),
			  }
			: {
					full_name: String(data.full_name),
					cpf: data.cpf.replace(/[.-]/g, ""),
					birthday_date: new Date(data.birthday_date),
					is_legal_entity: isPhysical,
					invited_by: String(data.invited_by),
			  };

		await (isPhysical
			? fetchCreateEnterprise(request, token)
			: fetchCreateInvestor(request, token)
		)
			.then(res => {
				if (res) {
					toast({
						id: "toast1",
						position: "top-right",
						status: "success",
						title: "Cadastro enviado com sucesso!",
						description:
							"Você receberá no e-mail informado mais informações em breve.",
					});
					push("/oportunidades");
				}
			})
			.catch(err => {
				console.log({ err });
			});
	};

	const handleClearInputs = () => {
		reset({
			full_name: "",
			enterprise_name: "",
			cpf: "",
			birthday_date: "",
			cnpj: "",
			uf: "",
			corporate_name: "",
		});
	};

	return (
		<Flex>
			<form onSubmit={handleSubmit(onSubmitForm)}>
				{firstStep ? (
					<SlideFade in={firstStep} offsetY="-30px">
						<Flex flexDirection="column" gap="1.625rem">
							<Flex gap="0.9375rem" fontFamily="Poppins">
								<Flex gap="0.75rem">
									<Checkbox
										spacing="0.75rem"
										isChecked={isPhysical === false ? true : false}
										variant="circular"
										icon={<BsCircleFill color="#ffffff" size={7} />}
										borderColor="#E2E8F0"
										onChange={() => {
											setIsPhysical(false);
											handleClearInputs();
										}}
									/>
									<Text
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color={isPhysical ? "#718096" : "#2D3748"}
										fontWeight={isPhysical ? "400" : "500"}
									>
										Sou Pessoa Física
									</Text>
								</Flex>
								<Flex gap="0.75rem">
									<Checkbox
										spacing="0.75rem"
										isChecked={isPhysical === false ? false : true}
										fontStyle="normal"
										icon={<BsCircleFill color="#ffffff" size={7} />}
										variant="circular"
										borderColor="#E2E8F0"
										onChange={() => {
											setIsPhysical(true);
											handleClearInputs();
										}}
									>
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color={isPhysical ? "#2D3748" : "#718096"}
											fontWeight={isPhysical ? "500" : "400"}
										>
											Sou Pessoa Jurídica
										</Text>
									</Checkbox>
								</Flex>
							</Flex>
							<Flex flexDirection="column" gap="0rem">
								{isPhysical ? (
									<>
										<InputComponent
											placeholderText="Insira aqui"
											label="Razão Social"
											type="text"
											{...register("enterprise_name")}
										/>
										<InputComponent
											placeholderText="00.000.000/0000-00"
											label="CNPJ"
											maxLength={18}
											type="text"
											{...register("cnpj")}
										/>
										<SelectComponent
											label="Uf"
											type="uf"
											selectValue={brasilStates}
											{...register("uf")}
										/>
										<InputComponent
											label="Quem convidou você para a LIVN?"
											type="text"
											placeholderText="Insira aqui"
											{...register("invited_by")}
										/>
									</>
								) : (
									<>
										<InputComponent
											label="Sem abreviações"
											type="text"
											placeholderText="Insira aqui"
											{...register("full_name")}
										/>
										<InputComponent
											label="Data de Nascimento"
											type="date"
											placeholderText="dd/mm/aaaa"
											{...register("birthday_date")}
										/>
										<InputComponent
											label="CPF"
											maxLength={14}
											type="text"
											placeholderText="000.000.000-00"
											{...register("cpf")}
										/>
										<InputComponent
											label="Quem convidou você para a LIVN?"
											type="text"
											placeholderText="Insira aqui"
											{...register("invited_by")}
										/>
									</>
								)}
								<Button
									mt="2rem"
									w="9.25rem"
									h="2rem"
									justifyContent="center"
									padding="0.2188rem 1.25rem"
									alignItems="center"
									gap="0.5rem"
									bgColor="#2D3748"
									_hover={{ bgColor: "#171923" }}
									fontFamily="Poppins"
									fontStyle="normal"
									fontWeight="500"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									borderRadius="0.5rem"
									color="#ffffff"
									onClick={() => {
										setSecondStep(true), setFirstStep(false);
									}}
								>
									Prosseguir {<BsArrowRightShort size={22} />}
								</Button>
							</Flex>
						</Flex>
					</SlideFade>
				) : (
					<SlideFade in={!firstStep} offsetY="-30px">
						<Flex flexDirection="column" gap="1.625rem">
							<Flex flexDirection="column" gap="0.5rem">
								<Flex>
									<Text
										fontFamily="Poppins"
										fontStyle="normal"
										fontWeight="500"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#2D3748"
									>
										Termos e Condições de Uso
									</Text>
								</Flex>
								<Flex
									borderRadius="0.375rem"
									border="0.0625rem solid #E2E8F0"
									w="47.4375rem"
									h="17.75rem"
									padding="22px 22px 0 22px"
									mr="1rem"
								>
									<Flex
										id="scrollbar"
										overflowX="hidden"
										overflowY="auto"
										gap="1rem"
									>
										<Text
											color="#171923"
											fontFamily="Poppins"
											fontStyle="normal"
											fontWeight="400"
											fontSize="0.75rem"
											lineHeight="1rem"
											textAlign="justify"
											mr="1.0625rem"
										>
											Lorem ipsum dolor sit amet consectetur. Pellentesque vel
											malesuada accumsan mattis quis elit lectus vitae. Ut
											aliquam pellentesque nascetur proin eget bibendum
											penatibus senectus. Quis turpis arcu maecenas viverra.
											Posuere semper duis morbi lobortis amet a. Adipiscing
											cursus in lectus tortor ullamcorper eget. Vitae diam quam
											et euismod. Eget sed metus est pharetra euismod est
											faucibus. Pharetra faucibus posuere volutpat cursus velit
											viverra vitae fringilla. Arcu consectetur viverra non
											tempus. Consequat faucibus tortor bibendum nisl enim
											accumsan id nec quis. Malesuada cursus donec nulla vel
											condimentum ut augue. Auctor venenatis malesuada ultrices
											diam enim integer vitae tincidunt adipiscing. Sed enim
											neque pellentesque lacus nunc. Vitae pellentesque eu in
											scelerisque. Faucibus quam in maecenas phasellus id tempus
											senectus molestie eros. Dolor nunc vivamus neque convallis
											vestibulum pellentesque urna. Massa proin amet iaculis
											elementum quisque enim. Adipiscing molestie imperdiet
											pellentesque arcu ultrices facilisi dolor phasellus. Velit
											vulputate lacus mauris senectus porta malesuada nibh
											sollicitudin sagittis. Adipiscing cursus in lectus tortor
											ullamcorper eget. Vitae diam quam et euismod. Eget sed
											metus est pharetra euismod est faucibus. Pharetra faucibus
											posuere volutpat cursus velit viverra vitae fringilla.
											Arcu consectetur viverra non tempus. Consequat faucibus
											tortor bibendum nisl enim accumsan id nec quis. Malesuada
											cursus donec nulla vel condimentum ut augue. Auctor
											venenatis malesuada ultrices diam enim integer vitae
											tincidunt adipiscing. eros. Dolor nunc vivamus neque
											convallis vestibulum pellentesque urna. Massa proin amet
											iaculis elementum quisque enim. Adipiscing molestie
											imperdiet pellentesque arcu ultrices facilisi dolor
											phasellus. Velit vulputate lacus mauris senectus porta
											malesuada nibh sollicitudin sagittis. Adipiscing cursus in
											lectus tortor ullamcorper eget. Vitae diam quam et
											euismod. Eget sed metus est pharetra euismod est faucibus.
											Pharetra faucibus posuere volutpat cursus velit viverra
											vitae fringilla. Arcu consectetur viverra non tempus.
											Consequat faucibus tortor bibendum nisl enim accumsan id
											nec quis. Malesuada cursus donec nulla vel condimentum ut
											augue. Auctor venenatis malesuada ultrices diam enim
											integer vitae tincidunt adipiscing.
										</Text>
									</Flex>
								</Flex>
							</Flex>
							<Flex flexDirection="column" fontFamily="Poppins" gap="2.125rem">
								<Flex gap="0.75rem">
									<Checkbox
										defaultChecked={false}
										spacing="0.75rem"
										variant="green"
										icon={<RiCheckFill size={20} />}
										borderColor="#E2E8F0"
										onChange={() => {
											setCanSend(!canSend), setSecondStep(!secondStep);
										}}
									/>
									<Text
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color="#2D3748"
									>
										Declaro que li e aceito os termos acima.
									</Text>
								</Flex>
								<Flex gap="1.5rem">
									<Button
										mt="0.375rem"
										w="9.25rem"
										h="2rem"
										justifyContent="center"
										padding="0.2188rem 1.25rem"
										alignItems="center"
										gap="0.5rem"
										bgColor="transparent"
										border="1px solid #323841"
										color="#171923"
										_hover={{ bgColor: "#F7FAFC" }}
										fontFamily="Poppins"
										fontStyle="normal"
										fontWeight="500"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										borderRadius="0.5rem"
										onClick={() => {
											setFirstStep(true),
												setSecondStep(false),
												setCanSend(false);
										}}
									>
										<BsArrowLeftShort size={22} />
										Voltar
									</Button>
									<Button
										mt="0.375rem"
										w="9.25rem"
										h="2rem"
										isDisabled={!canSend ? true : false}
										justifyContent="center"
										padding="0.2188rem 1.25rem"
										alignItems="center"
										gap="0.5rem"
										bgColor="#2D3748"
										_hover={
											!canSend ? { opacity: "0.3" } : { bgColor: "#171923" }
										}
										fontFamily="Poppins"
										fontStyle="normal"
										fontWeight="500"
										fontSize="0.875rem"
										lineHeight="1.25rem"
										borderRadius="0.5rem"
										color="#ffffff"
										type="submit"
									>
										Enviar Cadastro
									</Button>
								</Flex>
							</Flex>
						</Flex>
					</SlideFade>
				)}
			</form>
		</Flex>
	);
};
