import axios from "axios";
import { api, componentsApi } from "./api";

export const fetchEditInvestor = async (
	investor_id: any,
	data: any,
	token: any
) => {
	try {
		const response = await componentsApi.put(`/investor/${investor_id}`, data, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
