import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { InvestContainer } from "../container";
import { IOpportunitiesCard } from "../dtos/Oportunities";
import { fetchImovelDetail } from "../services/fetchImovelDetail";

interface IInvest {
	data: IOpportunitiesCard;
	cotas: number;
	address: string;
}

const Investir: NextPage<IInvest> = ({ data, cotas, address }) => (
	<InvestContainer data={data} cotas={cotas} oportunitiesAddress={address} />
);

export default Investir;

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
	const host = req.headers.host;
	const token = req.cookies["livn_auth"];
	const response = await fetchImovelDetail(query.id, host);
	let cotas = query.cotas;
	let address = query.oportunitiesAddress;

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
			data: response.data,
			cotas,
			address,
		},
	};
};
