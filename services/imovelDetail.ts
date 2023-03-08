export async function fetchImovelDetail(id: string) {
	const request = await fetch(`http://localhost:3000/api/opportunity/${id}`, {
		method: "GET",
	});

	return request.json();
}
