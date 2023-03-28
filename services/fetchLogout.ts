export const logout = async (push: any) => {
	const response = await fetch("http://localhost:3000/api/user/logout");

	if (response.status === 200) {
		push("/");
	}
};
