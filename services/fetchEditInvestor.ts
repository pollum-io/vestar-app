import { apiInstance } from "./api";

export const fetchEditInvestor = async (
	investor_id: any,
	data: any,
	token: any
) => {
	try {
		const api = apiInstance();
		const response = await api.put(`/investor/${investor_id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
