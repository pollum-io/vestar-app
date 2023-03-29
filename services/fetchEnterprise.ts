import axios from "axios";

export async function fetchEnterprise() {
	const response = await axios.get("/api/enterprise", {
		headers: {
			"content-type": "application/json",
			accept: "application/json",
		},
	});
	return response.data;
}
