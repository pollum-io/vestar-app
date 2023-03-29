import axios from "axios";

export async function fetchOpportunitiesImages(url: string) {
	const response = await axios.get(`/api/file/${url}`);
	return response.data.url;
}
