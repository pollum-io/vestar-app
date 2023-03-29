import axios from "axios";

export const authenticate = async (email: string, password: string) => {
	const response = await axios.post(
		"/api/user/authenticate",
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
