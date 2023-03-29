import axios from "axios";
import qs from "qs";

export const fetchOpportunity = async (query?: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const response = await axios.get(
		`http://localhost:3000/api/opportunity${params}`
	);

	return response.data;
};
