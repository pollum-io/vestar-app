import axios from "axios";

export const fetchCreateInvestor = async (data: any, token: any) => {
	try {
		const response = await axios.post("/api/investor", data, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
