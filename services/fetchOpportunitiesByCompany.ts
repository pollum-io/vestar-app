export const fetchOpportunitiesByCompany = async (id: any) => {
	const request = await fetch(
		`http://localhost:3000/api/opportunity?enterprise_id=${id}`,
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
