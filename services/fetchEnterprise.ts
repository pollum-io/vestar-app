import axios from "axios";
import { api } from "./api";

export async function fetchEnterprise() {
	const response = await api.get("/enterprise", {
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
	});
	return response.data;
}
