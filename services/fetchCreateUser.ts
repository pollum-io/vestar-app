import { apiInstance } from "./api";

export const fetchCreateUser = async (data: any) => {
	const api = apiInstance();
	try {
		const response = await api.post("/user", data);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
