import jwt_decode from "jwt-decode";
import type { GetServerSideProps, NextPage } from "next";
import { PortfolioContainer } from "../container";

const Portfolio: NextPage = () => <PortfolioContainer />;

export default Portfolio;

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
				destination: "/registrar",
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
