export const fetchEditInvestor = async (investor_id: any, data: any, token: any) => {
	const request = await fetch(`http://localhost:3000/api/investor/${investor_id}`, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"content-type": "application/json",
			accept: "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then(res => res.json());

	return request;
}
