import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { OpportunitiesContainer } from "../../container";

const Opportunities: NextPage = () => <OpportunitiesContainer />;

export default Opportunities;

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

	if (!user?.investor_id) {
		return {
			redirect: {
				permanent: false,
				destination: "/register",
			},
			props: {
				user,
				token,
			},
		};
	}

	return {
		props: {
			user,
			token,
		},
	};
};
