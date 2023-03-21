import { FormProvider, useForm } from "react-hook-form";

export const Form = ({ children, onSubmit }: any) => {
	const methods = useForm();
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
}
