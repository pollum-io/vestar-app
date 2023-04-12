import { apiInstance } from "./api";

export const fetchCreateInvestor = async (data: any, token: any) => {
	try {
		const api = apiInstance();
		const response = await api.post("/investor", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
