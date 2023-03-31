import axios from "axios";
import { api } from "./api";

export const fetchEnterpriseById = async (id: any) => {
	try {
		const response = await api.get(`/enterprise/${id}`, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
