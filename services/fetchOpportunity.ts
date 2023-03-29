import axios from "axios";
import qs from "qs";

export const fetchOpportunity = async (query?: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const response = await axios.get(`/api/opportunity${params}`);

	return response.data;
};
