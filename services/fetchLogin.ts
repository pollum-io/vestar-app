import axios from "axios";
import { api } from "./api";

export const authenticate = async (email: string, password: string) => {
	const response = await api.post(
		"/user/authenticate",
		{
			email: email,
			password: password,
		},
		{
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
		}
	);

	return response.data;
};
