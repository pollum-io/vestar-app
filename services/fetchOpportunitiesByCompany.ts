import axios from "axios";
import qs from "qs";
import { componentsApi } from "./api";

export const fetchOpportunitiesByCompany = async (query: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const response = await componentsApi.get(`/opportunity${params}`, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	return response.data;
};
