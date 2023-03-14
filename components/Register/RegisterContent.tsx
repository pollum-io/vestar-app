import React, { FunctionComponent, useState } from "react";
import { Flex, Checkbox, Button, Text, SlideFade } from "@chakra-ui/react";
import { useRegister } from "../../hooks/useRegister";
import { DefaultInputs } from "../Inputs/DeafultInput/DefaultInput";
import { useForm } from "react-hook-form";
import {
	BsArrowRightShort,
	BsArrowLeftShort,
	BsCircleFill,
} from "react-icons/bs";
import { RiCheckFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { fetchCreateInvestor } from "../../services/fetchCreateInvestor";

export const RegisterContent: FunctionComponent<any> = props => {
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
	const { token } = props;

	const [canSend, setCanSend] = useState(false);
	const { push } = useRouter();

	const onSubmitForm = async (data: any) => {
		console.log({ data }, "data");

		const request = isPhysical
			? {
					full_name: String(data.full_name),
					cpf: data.cpf,
					birthday_date: new Date(data.birthday_date),
					is_legal_entity: isPhysical,
					invited_by: String(data.invited_by),
			  }
			: {
					corporate_name: data.corporate_name,
					cnpj: data.cnpj,
					uf: data.uf,
					is_legal_entity: isPhysical,
					invited_by: String(data.invited_by),
			  };

		await fetchCreateInvestor(request, token)
			.then(res => {
				if (res) {
					push("/oportunidades");
				}
			})
			.catch(err => {
				console.log({ err });
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
										isChecked={isPhysical}
										variant="circular"
										icon={<BsCircleFill color="#ffffff" size={7} />}
										borderColor="#E2E8F0"
										onChange={() => setIsPhysical(true)}
									/>
									<Text
										fontSize="0.875rem"
										lineHeight="1.25rem"
										color={isPhysical ? "#2D3748" : "#718096"}
										fontWeight={isPhysical ? "500" : "400"}
									>
										Sou Pessoa Física
									</Text>
								</Flex>
								<Flex gap="0.75rem">
									<Checkbox
										spacing="0.75rem"
										isChecked={!isPhysical ? true : false}
										fontStyle="normal"
										icon={<BsCircleFill color="#ffffff" size={7} />}
										variant="circular"
										borderColor="#E2E8F0"
										onChange={() => setIsPhysical(false)}
									>
										<Text
											fontSize="0.875rem"
											lineHeight="1.25rem"
											color={!isPhysical ? "#2D3748" : "#718096"}
											fontWeight={!isPhysical ? "500" : "400"}
										>
											Sou Pessoa Jurídica
										</Text>
									</Checkbox>
								</Flex>
							</Flex>
							<Flex flexDirection="column" gap="2rem">
								<DefaultInputs register={register} />

								<Button
									mt="0.375rem"
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
									type="button"
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
										type="button"
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
