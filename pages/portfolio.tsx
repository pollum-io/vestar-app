import jwt_decode from "jwt-decode";
import type { GetServerSideProps, NextPage } from "next";
import { PortfolioContainer } from "../container";
import { fetchEnterpriseInvestment } from "../services/fetchEnterpriseInvestmet";
import { fetchGetInvestment } from "../services/fetchGetInvestment";
import { fetchOpportunitiesByCompanyPortfolio } from "../services/fetchOpportunitiesByCompanyPortfolio";

interface IPortfolio {
	data?: any;
	enterpriseData?: any;
	enterpriseInvestment?: any;
}

const Portfolio: NextPage<IPortfolio> = ({
	data,
	enterpriseData,
	enterpriseInvestment,
}) => (
	<PortfolioContainer
		portfolioData={data}
		enterpriseData={enterpriseData}
		enterpriseInvestment={enterpriseInvestment}
	/>
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
		const response = await fetchOpportunitiesByCompanyPortfolio(
			user.enterprise_id
		);

		const investment = await fetchEnterpriseInvestment(
			host,
			user?.enterprise_id
		);

		return {
			props: {
				user,
				token,
				enterpriseData: response?.data,
				enterpriseInvestment: investment?.data,
			},
		};
	}

	const response = await fetchGetInvestment(user?.investor_id, token, host);

	return {
		props: {
			user,
			token,
			data: response?.data,
		},
	};
};
