import React, { createContext, useState, useMemo, useEffect } from "react";
import { fetchEnterpriseById } from "../services";
import { fetchGetInvestorById } from "../services/fetchGetInvestorById";
import PersistentFramework from "../utils/persistent";

interface IRegister {
	setUserInfos: any;
	getInfosId: any;
	getInfos: any;
	userInfos: any;
	username: string;
	isInvestor: boolean;
}

export const UserContext = createContext({} as IRegister);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
	const [isInvestor, setIsInvestor] = useState<boolean>(false);

	const [userInfos, setUserInfos] = useState<any>();
	const [username, setUsername] = useState<any>();

	const getInfosId = async (data: any) => {
		setUserInfos(data);

		PersistentFramework.add("id", String(data));
	};

	const getInfos = async (id: any) => {
		let name: string = "";
		const response = await fetchGetInvestorById(userInfos, id);
		const enterprise = await fetchEnterpriseById(userInfos);

		if (response?.data?.full_name) {
			name = response?.data?.full_name;
			setUsername(name);
			setIsInvestor(true);
			PersistentFramework.add("name", String(name));
			PersistentFramework.add("isInvestor", { isInvestor: true });
		} else {
			name = enterprise?.data?.enterprise_name;
			setUsername(name);
			setIsInvestor(false);
			PersistentFramework.add("name", String(name));
			PersistentFramework.add("isInvestor", { isInvestor: false });
		}
	};

	useEffect(() => {
		if (!userInfos || !username || !isInvestor) {
			const id = PersistentFramework.get("id");
			const name = PersistentFramework.get("name");
			const investor = PersistentFramework.get("isInvestor") as {
				[k: string]: any;
			};
			console.log(investor, "investorinvestor");
			if (investor?.isInvestor === true) {
				setIsInvestor(true);
			} else {
				setIsInvestor(false);
			}

			setUsername(name);
			setUserInfos(id);
			PersistentFramework.add("name", String(name));
			PersistentFramework.add("id", String(id));
		}
	}, [userInfos, username, isInvestor]);

	const providerValue = useMemo(
		() => ({
			isUserLogged,
			setIsUserLogged,
			userInfos,
			getInfos,
			username,
			setUserInfos,
			getInfosId,
			isInvestor,
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
