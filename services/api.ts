import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export const componentsApi: AxiosInstance = axios.create({
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
});
