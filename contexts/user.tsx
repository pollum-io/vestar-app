import React, { createContext, useState, useMemo, useEffect } from "react";
import PersistentFramework from "../utils/persistent";

interface IRegister { setUserInfos: any; getInfos: any; userInfos: any; }

export const UserContext = createContext({} as IRegister);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
	const [userInfos, setUserInfos] = useState<any>();


	const getInfos = async (data: any) => {
		setUserInfos(data)
		PersistentFramework.add("id", String(data))

	}

	useEffect(() => {
		if (!userInfos) {
			const id = PersistentFramework.get("id")
			setUserInfos(id)
			PersistentFramework.add("id", String(id))
		}
	}, [userInfos])


	const providerValue = useMemo(
		() => ({ isUserLogged, setIsUserLogged, userInfos, setUserInfos, getInfos }),
		[isUserLogged, userInfos]
	);

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	);
};
