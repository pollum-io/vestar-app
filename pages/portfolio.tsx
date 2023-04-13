import jwt_decode from "jwt-decode";
import type { GetServerSideProps, NextPage } from "next";
import { PortfolioContainer } from "../container";
import { fetchGetInvestment } from "../services/fetchGetInvestment";

interface IPortfolio {
	data: any;
}

const Portfolio: NextPage<IPortfolio> = ({ data }) => (
	<PortfolioContainer portfolioData={data} />
);

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
	const host = req.headers.host;

	if (!user?.investor_id) {
		return {
			redirect: {
				permanent: false,
				destination: "/registrar",
			},
			props: {},
		};
	}

	const response = await fetchGetInvestment(user?.investor_id, token, host);

	return {
		props: {
			user,
			token,
			data: response.data,
		},
	};
};
