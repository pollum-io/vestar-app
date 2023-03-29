import axios from "axios";

export async function fetchImovelDetail(id: any) {
	try {
		const response = await axios.get(`/api/opportunity/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
