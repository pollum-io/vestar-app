import axios from "axios";

export const fetchEnterpriseById = async (id: any) => {
	try {
		const response = await axios.get(
			`http://localhost:3000/api/enterprise/${id}`,
			{
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
				},
			}
		);
		return response.data;
	} catch (error: any) {
		console.log(error.message);
	}
};
