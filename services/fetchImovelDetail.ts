import axios from "axios";

export async function fetchImovelDetail(id: any) {
	try {
		const response = await axios.get(
			`http://localhost:3000/api/opportunity/${id}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
