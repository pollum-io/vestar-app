import React, { FunctionComponent, useMemo } from "react";
import { Flex, Text, Input, FormControl, Select } from "@chakra-ui/react";
import { useRegister } from "../../../hooks/useRegister";
import { IDefaultInput } from "./dto";
import InputMask from "react-input-mask";

export const DefaultInput: FunctionComponent<IDefaultInput> = ({
	title,
	color,
	placeholderColor,
	bgColor,
	inputSize,
	placeholder,
	type,
	border,
	inputColor,
	registerType,
	register
}) => {

	const validation = useMemo(() => {
		if (title === "CPF") {
			return "999.999.999-99"
		} else if (title === "CNPJ") {
			return "99.999.999/9999-99"
		} else {
			return
		}
	}, [title])

	return (
		<Flex flexDirection="column" fontFamily="Poppins" gap="0.5rem">
			<Text
				fontStyle="normal"
				fontWeight="500"
				fontSize="0.875rem"
				lineHeight="1.25rem"
				color={color ? color : "#2D3748"}
			>
				{title}
			</Text>
			{title === "UF" ? (
				<Select
					_hover={{}}
					w={inputSize || ""}
					h="2rem"
					border={border ? border : "0.0938rem solid #E2E8F0"}
					placeholder='Select option' color={"black"}
					fontSize="0.875rem"
					{...register(registerType, { required: true })}
				>
					<option value="AC">Acre</option>
					<option value="AL">Alagoas</option>
					<option value="AP">Amapá</option>
					<option value="AM">Amazonas</option>
					<option value="BA">Bahia</option>
					<option value="CE">Ceará</option>
					<option value="DF">Distrito Federal</option>
					<option value="ES">Espírito Santo</option>
					<option value="GO">Goías</option>
					<option value="MA">Maranhão</option>
					<option value="MT">Mato Grosso</option>
					<option value="MS">Mato Grosso do Sul</option>
					<option value="MG">Minas Gerais</option>
					<option value="PA">Pará</option>
					<option value="PB">Paraíba</option>
					<option value="PR">Paraná</option>
					<option value="PE">Pernambuco</option>
					<option value="PI">Piauí</option>
					<option value="RJ">Rio de Janeiro</option>
					<option value="RN">Rio Grande do Norte</option>
					<option value="RS">Rio Grande do Sul</option>
					<option value="RO">Rondônia</option>
					<option value="RR">Roraíma</option>
					<option value="SC">Santa Catarina</option>
					<option value="SP">São Paulo</option>
					<option value="SE">Sergipe</option>
					<option value="TO">Tocantins</option>
				</Select>
			) : (
				<FormControl>
					<Input
						placeholder={placeholder}
						_placeholder={{
							color: placeholderColor ? placeholderColor : "rgba(0, 0, 0, 0.36)",
							fontFamily: "Poppins",
						}}
						border={border ? border : "0.0938rem solid #E2E8F0"}
						bgColor={bgColor}
						fontStyle="normal"
						fontWeight="400"
						w={inputSize || ""}
						fontSize="0.875rem"
						lineHeight="1.25rem"
						borderRadius="0.375rem"
						h="2rem"
						pl="0.7rem"
						color={inputColor ? inputColor : "#2D3748"}
						type={type || "text"}
						_hover={{}}
						_focus={{
							boxShadow: "none",
							border: border ? border : "0.0938rem solid #E2E8F0",
						}}
						{...register(registerType, { required: true })}
						as={InputMask}
						mask={validation}
						maskChar={null}
					/>
				</FormControl>
			)
			}
		</Flex >
	);
};

export const DefaultInputs: FunctionComponent<any> = (props) => {
	const { register } = props;
	const { isPhysical } = useRegister();

	return (
		<Flex flexDirection="column" gap="1.5rem">
			<DefaultInput
				title={isPhysical ? "Nome Completo" : "Razão Social"}
				inputSize="20rem"
				placeholder={isPhysical ? "Sem abreviações" : "Insira aqui"}
				registerType="full_name"
				register={register}
			/>
			<DefaultInput
				title={isPhysical ? "Data de Nascimento" : "CNPJ"}
				inputSize={isPhysical ? "9.875rem" : "11rem"}
				placeholder={isPhysical ? "dd/mm/aaaa" : "00.000.000/0000-00"}
				type={isPhysical ? "date" : ""}
				registerType={isPhysical ? "birthday_date" : "cnpj"}
				register={register}

			/>
			<DefaultInput
				title={isPhysical ? "CPF" : "UF"}
				inputSize={isPhysical ? "9.875rem" : "20rem"}
				placeholder={isPhysical ? "000.000.000-00" : "Insira aqui"}
				registerType={isPhysical ? "cpf" : "uf"}
				register={register}
			/>
			<DefaultInput
				title="Quem convidou você para a LIVN?"
				inputSize="20rem"
				placeholder="Insira aqui"
				registerType="invited_by"
				register={register}
			/>
		</Flex>
	);
};
