import axios from "axios";

export async function fetchImages(url: string) {
	const response = await axios.get(`/api/file/${url}`);
	return response.data.url;
}
