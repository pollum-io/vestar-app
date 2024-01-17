import axios, { AxiosInstance } from "axios";

export const apiInstance = (host?: string): AxiosInstance =>
	axios.create({
		baseURL: host ? `${host}/api` : "/api",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
	});
