import { LegacyRef } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function Form({ children, onSubmit }) {
	const methods = useForm();
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
}

function Input({ name, defaultValue }) {
	const { register } = useFormContext();
	return (
		<input
			name={name}
			defaultValue={defaultValue}
			ref={register as LegacyRef<HTMLInputElement>}
		/>
	);
}

function MyForm() {
	const onSubmit = (data) => {
		const formData = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email
		};
		// enviar formData para a API
	};

	return (
		<Form onSubmit={onSubmit}>
			<Input name="firstName" defaultValue="" />
			<Input name="lastName" defaultValue="" />
			<Input name="email" defaultValue="" />
			<button type="submit">Enviar</button>
		</Form>
	);
}
