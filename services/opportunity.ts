export async function fetchOpportunity() {
	const request = await fetch("http://localhost:3000/api/opportunity?page=1&limit=3", {
		method: "GET",
	});

	return request.json();
}
