import { apiInstance } from "./api";

export const fetchGetInvestment = async (
	investor_pf: any,
	token: any,
	host?: string
) => {
	try {
		const api = apiInstance(host);
		const response = await api.get(`/investment/${investor_pf}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
