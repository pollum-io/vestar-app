import axios from "axios";
import qs from "qs";

export const fetchOpportunitiesByCompany = async (query: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const response = await axios.get(
		`http://localhost:3000/api/opportunity${params}`,
		{
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		}
	);

	return response.data;
};
