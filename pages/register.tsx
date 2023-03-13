import { GetServerSideProps, NextPage } from "next";
import jwt_decode from "jwt-decode";
import { RegisterContainer } from "../container";

const Register: NextPage = (props) => <RegisterContainer {...props} />;

export default Register;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = req.cookies["livn_auth"];
	console.log(token)

	if (!token) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
			props: {},
		};
	}

	const user: any = jwt_decode(token);

	if (!user?.investor_id) {
		return {
			props: { user, token },
		};
	}
	if (user?.investor_id) {
		return {
			redirect: {
				permanent: false,
				destination: "/oportunidades",
			},
			props: {},
		};
	}


	return {
		props: {
			user,
			token,
		},
	};
};
