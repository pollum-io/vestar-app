import axios from "axios";

export const fetchEditInvestor = async (
	investor_id: any,
	data: any,
	token: any
) => {
	try {
		const response = await axios.put(`/api/investor/${investor_id}`, data, {
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
