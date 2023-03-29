import axios from "axios";

export const fetchGetInvestment = async (investor_id: any, token: any) => {
	try {
		const response = await axios.get(`/api/investment/${investor_id}`, {
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
