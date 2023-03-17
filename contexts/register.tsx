import React, { createContext, useState, useMemo } from "react";

interface IRegister {
	firstStep: boolean;
	setFirstStep: React.Dispatch<React.SetStateAction<boolean>>;
	secondStep: boolean;
	setSecondStep: React.Dispatch<React.SetStateAction<boolean>>;
	isPhysical: boolean;
	setIsPhysical: React.Dispatch<React.SetStateAction<boolean>>;
	ended: boolean;
	setEnded: React.Dispatch<React.SetStateAction<boolean>>;
	hasToken: boolean;
	setHasToken: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterContext = createContext({} as IRegister);

export const RegisterProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [firstStep, setFirstStep] = useState<boolean>(true);
	const [secondStep, setSecondStep] = useState<boolean>(false);
	const [isPhysical, setIsPhysical] = useState<boolean>(true);
	const [ended, setEnded] = useState(false);
	const [hasToken, setHasToken] = useState(false);
	const providerValue = useMemo(
		() => ({
			firstStep,
			setFirstStep,
			secondStep,
			setSecondStep,
			isPhysical,
			setIsPhysical,
			ended,
			setEnded,
			hasToken,
			setHasToken,
		}),
		[
			firstStep,
			setFirstStep,
			secondStep,
			setSecondStep,
			isPhysical,
			setIsPhysical,
			ended,
			setEnded,
			hasToken,
			setHasToken,
		]
	);

	return (
		<RegisterContext.Provider value={providerValue}>
			{children}
		</RegisterContext.Provider>
	);
};
