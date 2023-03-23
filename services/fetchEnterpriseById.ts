export const fetchEnterpriseById = async (id: any, token: any) => {
	const request = await fetch(`http://localhost:3000/api/enterprise/${id}`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then(res => res.json());

	return request;
};
