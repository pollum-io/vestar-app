import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { OpportunitiesContainer } from "../../container";

const Opportunities: NextPage = props => <OpportunitiesContainer {...props} />;

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

	return {
		props: {
			user,
			token,
		},
	};
};
