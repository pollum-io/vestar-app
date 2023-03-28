export async function fetchOpportunity() {
	const request = await fetch("http://localhost:3000/api/opportunity", {
		method: "GET",
	});

	return request.json();
}
