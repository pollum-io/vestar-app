export async function fetchOpportunitiesImages(url: string) {
	const request = await fetch(`http://localhost:3000/api/file/${url}`, {
		method: "GET",
	});

	return request.url;
}
