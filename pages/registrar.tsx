import { GetServerSideProps, NextPage } from "next";
import { RegisterContainer } from "../container";
import jwt_decode from "jwt-decode";
import { fetchGetInvestorById } from "../services/fetchGetInvestorById";

const Registrar: NextPage = props => <RegisterContainer {...props} />;

export default Registrar;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = req.cookies["livn_auth"];

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

	if (!user?.investor_id && !user?.enterprise_id) {
		return {
			props: { user, token },
		};
	}

	return {
		redirect: {
			permanent: false,
			destination: "/oportunidades",
		},
		props: { user, token },
	};
};
