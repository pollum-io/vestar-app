export const fetchCreateInvestor = async (data: any, token: any) => {
	console.log(data, 'data dentro da api antes do de mandar pra url');
	const request = await fetch(`http://localhost:3000/api/investor`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"content-type": "application/json",
			accept: "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then(res => res.json());

	console.log(request, 'request API');
	return request;
}
