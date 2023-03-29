import axios from "axios";

export const fetchCreateEnterprise = async (data: any, token: any) => {
	try {
		const response = await axios.post(
			"http://localhost:3000/api/enterprise",
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
