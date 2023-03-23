export const fetchCreateEnterprise = async (data: any, token: any) => {
	const request = await fetch(`http://localhost:3000/api/enterprise`, {
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
