export const fetchGetInvestment = async (investor_id: any, token: any) => {
	const request = await fetch(
		`http://localhost:3000/api/investment/${investor_id}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	).then(res => res.json());

	return request;
};
