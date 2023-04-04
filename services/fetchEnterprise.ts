export async function fetchEnterprise() {
	const request = await fetch(`http://localhost:3000/api/enterprise`, {
		method: "GET",
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
	});
	return request.json();
}
