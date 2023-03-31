import axios from "axios";
import { api, componentsApi } from "./api";

export const fetchGetInvestorById = async (
	investor_id: any,
	token: any,
	isOutOfPages?: boolean
) => {
	try {
		const response = await (isOutOfPages ? componentsApi : api).get(
			`/investor/${investor_id}`,
			{
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
