import qs from "qs";

export async function fetchOpportunity(query?: object) {
	const params = query ? `?${qs.stringify(query)}` : "";

	const request = await fetch(
		`http://localhost:3000/api/opportunity${params}`,
		{
			method: "GET",
		}
	);

	return request.json();
}
