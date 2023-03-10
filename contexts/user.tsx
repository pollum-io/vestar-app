import React, { createContext, useState, useMemo } from "react";

interface IRegister {

}

export const UserContext = createContext({} as IRegister);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {

	const providerValue = useMemo(
		() => ({

		}),
		[
		]
	);

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	);
};
