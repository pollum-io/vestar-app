import axios from "axios";
import qs from "qs";
import { componentsApi } from "./api";

export const fetchOpportunity = async (query?: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const response = await componentsApi.get(`/opportunity${params}`);

	return response.data;
};
