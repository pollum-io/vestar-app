import React, {
	forwardRef,
	ForwardRefRenderFunction,
	useMemo,
	useState,
	useEffect,
} from "react";
import {
	Text,
	Input,
	Select,
	FormControl,
	FormLabel,
	HStack,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	Textarea,
	useColorModeValue,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	type?: string;
	defaultValue?: string;
	maxLength?: number;
	placeholderText?: string;
}

export const InputBase: ForwardRefRenderFunction<
	HTMLInputElement,
	InputProps
> = (
	{ name, label, defaultValue, type, maxLength, placeholderText, ...rest },
	ref
) => {
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
				disableUnderline
				id={name}
				name={name}
				ref={ref}
				{...rest}
				_placeholder={{
					placeholderColor: "rgba(0, 0, 0, 0.36)",
					fontFamily: "Poppins",
				}}
				placeholder={placeholderText}
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
			/>
		</FormControl>
	);
};

export const InputComponent = forwardRef(InputBase);
