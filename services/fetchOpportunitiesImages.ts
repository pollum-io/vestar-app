import axios from "axios";

export async function fetchOpportunitiesImages(url: string) {
	const response = await axios.get(`http://localhost:3000/api/file/${url}`);
	return response.data.url;
}
