import React, { createContext, useState, useMemo, useEffect } from "react";
import { fetchGetInvestorById } from "../services/fetchGetInvestorById";
import PersistentFramework from "../utils/persistent";
interface IRegister {
	setUserInfos: any;
	getInfosId: any;
	getInfos: any;
	userInfos: any;
	username: string;
}

export const UserContext = createContext({} as IRegister);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
	const [userInfos, setUserInfos] = useState<any>();
	const [username, setUsername] = useState<any>();

	const getInfosId = async (data: any) => {
		setUserInfos(data);
		PersistentFramework.add("id", String(data));
	};

	const getInfos = async (data: any) => {
		const response = await fetchGetInvestorById(userInfos, data);
		const name = response?.data?.full_name;
		setUsername(name);
		PersistentFramework.add("name", String(name));
	};

	useEffect(() => {
		if (!userInfos || !username) {
			const id = PersistentFramework.get("id");
			const name = PersistentFramework.get("name");
			setUsername(name);
			setUserInfos(id);
			PersistentFramework.add("name", String(name));
			PersistentFramework.add("id", String(id));
		}
	}, [userInfos, username]);

	const providerValue = useMemo(
		() => ({
			isUserLogged,
			setIsUserLogged,
			userInfos,
			getInfos,
			username,
			setUserInfos,
			getInfosId,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isUserLogged, userInfos, username]
	);

	return (
		<UserContext.Provider value={providerValue}>
			{children}
		</UserContext.Provider>
	);
};
