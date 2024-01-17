import { apiInstance } from "./api";

export async function fetchImovelDetail(id: any, host?: string) {
	try {
		const api = apiInstance(host);
		console.log(id, host, "aaaaaaaaaaaa");
		const response = await api.get(`/opportunity/${id}`);
		console.log(response, "responseresponse");

		return response.data;
	} catch (error) {
		console.error(error);
	}
}
