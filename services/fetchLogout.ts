import axios from "axios";

export const logout = async (push: any) => {
	const response = await axios({
		method: "get",
		url: "/api/user/logout",
	});
	if (response.status === 200) {
		push("/");
	}
};
