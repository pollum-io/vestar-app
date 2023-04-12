import { apiInstance } from "./api";

export const fetchGetInvestorById = async (
	investor_id: any,
	token: any,
	host?: string
) => {
	try {
		const api = apiInstance();
		const response = await api.get(`/investor/${investor_id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
