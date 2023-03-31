import axios from "axios";
import { api } from "./api";

export async function fetchImovelDetail(id: any) {
	try {
		const response = await api.get(`/opportunity/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
