import jwt_decode from "jwt-decode";
import type { GetServerSideProps, NextPage } from "next";
import { PortfolioContainer } from "../container";
import { fetchEnterpriseById, fetchOpportunitiesByCompany } from "../services";
import { fetchGetInvestment } from "../services/fetchGetInvestment";

interface IPortfolio {
	data?: any;
	enterpriseData?: any;
}

const Portfolio: NextPage<IPortfolio> = ({ data, enterpriseData }) => (
	<PortfolioContainer portfolioData={data} enterpriseData={enterpriseData} />
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

	if (!user?.investor_id && !user?.enterprise_id) {
		return {
			redirect: {
				permanent: false,
				destination: "/registrar",
			},
			props: {},
		};
	}

	if (user?.enterprise_id) {
		const response = await fetchOpportunitiesByCompany(user.enterprise_id);

		return {
			props: {
				user,
				token,
				enterpriseData: response?.data,
			},
		};
	}

	const response = await fetchGetInvestment(user?.investor_id, token);

	return {
		props: {
			user,
			token,
			data: response.data,
		},
	};
};
