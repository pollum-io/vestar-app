import axios from "axios";

export const authenticate = async (email: string, password: string) => {
	const response = await axios.post(
		"http://localhost:3000/api/user/authenticate",
		{
			email: email,
			password: password,
		},
		{
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
		}
	);

	return response.data;
};
