import axios from "axios";
import { api, componentsApi } from "./api";

export const fetchCreateEnterprise = async (data: any, token: any) => {
	try {
		const response = await componentsApi.post("/enterprise", data, {
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
