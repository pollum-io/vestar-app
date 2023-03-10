export async function fetchEnterprise() {
	const request = await fetch(`http://localhost:3000/api/enterprise?page=1&limit=2`, {
		method: "GET",
	});

	return request.json();
}
