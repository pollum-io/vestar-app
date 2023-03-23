export async function fetchEnterpriseById(id: any) {
	const request = await fetch(`http://localhost:3000/api/enterprise/${id}`, {
		method: "GET",
	});

	return request.json();
}
