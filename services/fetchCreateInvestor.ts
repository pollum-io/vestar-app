export const fetchCreateInvestor = async (data: any, token: any) => {
	const request = await fetch(`http://localhost:3000/api/investor`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"content-type": "application/json",
			accept: "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then(res => res.json());

	return request;
}
