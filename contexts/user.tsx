import React, { createContext, useState, useMemo } from "react";

interface IRegister {}

export const UserContext = createContext({} as IRegister);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

	const providerValue = useMemo(
		() => ({ isUserLogged, setIsUserLogged }),
		[isUserLogged]
	);

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	);
};
