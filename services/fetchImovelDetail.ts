import { apiInstance } from "./api";

export async function fetchImovelDetail(id: any, host?: string) {
	try {
		const api = apiInstance();
		const response = await api.get(`/opportunity/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
