import qs from "qs";

export const fetchOpportunitiesByCompany = async (query: object) => {
	const params = query ? `?${qs.stringify(query)}` : "";

	const request = await fetch(
		`http://localhost:3000/api/opportunity${params}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
		}
	).then(res => res.json());

	return request;
};
