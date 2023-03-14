export const authenticate = async (email: string, password: string) => {
	const response = await fetch(
		"http://localhost:3000/api/user/authenticate",
		{
			method: "post",
			headers: {
				"content-type": "application/json",
				accept: "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}
	).then(res => res.json());

	return response;
};
