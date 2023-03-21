import React, { forwardRef, ForwardRefRenderFunction, useMemo, useState, useEffect } from "react";
import {
	Text, Input, Select, FormControl, FormLabel, HStack, Input as ChakraInput, InputProps as ChakraInputProps, Textarea, useColorModeValue
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	type?: string;
	defaultValue?: string;
	maxLength?: number;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, defaultValue, type, maxLength, ...rest }, ref) => {

	const [cpf, setCPF] = useState('');
	const [phone, setPhone] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [currInputValue, setCurrInputValue] = useState('');

	const currentValue = (typeInput: string) => {
		if (typeInput === 'CPF') return cpf
		if (typeInput === 'Telefone') return phone
		if (typeInput === 'CNPJ') return cnpj
		return undefined;
	}

	const handlePhoneChange = (event: any) => {
		const value = event.target.value;

		let maskedPhone = value
			.replace(/\D/g, '')
			.replace(/^(\d{2})(\d)/g, '($1) $2')
			.replace(/(\d)(\d{4})$/, '$1-$2');

		setPhone(maskedPhone);
	}

	const handleCPFChange = (event: any) => {
		const value = event.target.value;

		let maskedCPF = value
			.replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2');

		console.log(maskedCPF)

		setCPF(maskedCPF);
	}

	const handleCnpjChange = (event: any) => {
		const value = event.target.value;

		let maskedCnpj = value
			.replace(/\D/g, '')
			.replace(/^(\d{2})(\d)/, '$1.$2')
			.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
			.replace(/\.(\d{3})(\d)/, '.$1/$2')
			.replace(/(\d{4})(\d)/, '$1-$2');

		setCnpj(maskedCnpj);
	}

	return (
		<FormControl id={name}>
			{label && (
				<FormLabel htmlFor={name} fontWeight="semibold" mb="0.5rem" mt="1.5rem">
					<Text
						as="span"
						fontStyle="normal"
						fontWeight="500"
						fontSize="0.875rem"
						lineHeight="1.25rem"
						color={"#2D3748"}
					>
						{label}
					</Text>
				</FormLabel>
			)}
			<ChakraInput
				id={name}
				name={name}
				ref={ref}
				{...rest}
				_placeholder={{
					placeholderColor: "rgba(0, 0, 0, 0.36)",
					fontFamily: "Poppins",
				}}
				border={"0.0938rem solid #E2E8F0"}
				fontStyle="normal"
				fontWeight="400"
				fontSize="0.875rem"
				lineHeight="1.25rem"
				borderRadius="0.375rem"
				h="2rem"
				pl="0.7rem"
				color={"#2D3748"}
				type={type}
				_hover={{}}
				_focus={{
					boxShadow: "none",
					border: "0.0938rem solid #E2E8F0",
				}}
				defaultValue={defaultValue}
				maxLength={maxLength}
				value={defaultValue ? undefined : currentValue(`${label}`)}
				onChange={(e) => {
					switch (label) {
						case 'CPF':
							handleCPFChange(e)
							break;
						case 'CNPJ':
							handleCnpjChange(e)
							break;
						case 'Telefone':
							handlePhoneChange(e)
							break
						default:
							return "";
					}
				}}
			/>
		</FormControl>
	);
}

export const InputComponent = forwardRef(InputBase);
