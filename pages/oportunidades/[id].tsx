import { GetServerSideProps, NextPage } from "next";
import { ImovelContainer } from "../../container/Imovel/index";
import { IOpportunitiesCard } from "../../dtos/Oportunities";
import { fetchImovelDetail } from "../../services/imovelDetail";

interface IImovelProps {
	data: IOpportunitiesCard;
}

const Imovel: NextPage<IImovelProps> = ({ data }) => {
	return <ImovelContainer imovel={data} />;
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {

	const response = await fetchImovelDetail(query.id)

	return {
		props: {
			data: response.data
		}
	}
}

export default Imovel;
