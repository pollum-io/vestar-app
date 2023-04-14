export const fetchOpportunitiesByCompanyPortfolio = async (
	enterpriseId: string
) => {
	const request = await fetch(
		`http://localhost:3000/api/opportunity?enterprise_id=${enterpriseId}`,
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
