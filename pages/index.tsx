import jwt_decode from "jwt-decode";
import { LoginContainer } from "../container";
import type { GetServerSideProps, NextPage } from "next";

const Login: NextPage = () => <LoginContainer />;

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = req.cookies["livn_auth"];

	if (!token) {
		return { props: {} };
	}

	const user: any = jwt_decode(token);

	if (!user?.investor_id) {
		return {
			redirect: {
				permanent: false,
				destination: "/register",
			},
			props: { user, token },
		};
	}

	return {
		redirect: {
			permanent: false,
			destination: "/portfolio",
		},
		props: { user, token },
	};
};
