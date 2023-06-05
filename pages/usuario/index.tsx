import jwt_decode from "jwt-decode";
import { GetServerSideProps, NextPage } from "next";
import { Edit_ProfileContainer } from "../../container";
import { fetchGetInvestorById } from "../../services/fetchGetInvestorById";

interface IEditProfile {
	data: any;
	token: any;
}

const Editar_Perfil: NextPage<IEditProfile> = props => (
	<Edit_ProfileContainer {...props} />
);

export default Editar_Perfil;

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
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

	const response = await fetchGetInvestorById(query.id, token, host);

	if (!user?.investor_id && !user?.enterprise_id) {
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
			data: response?.data,
		},
	};
};
