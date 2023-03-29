import axios from "axios";

export const fetchEditInvestor = async (
	investor_id: any,
	data: any,
	token: any
) => {
	try {
		const response = await axios.put(
			`http://localhost:3000/api/investor/${investor_id}`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
