import { NextPage } from "next";
import { withRouter } from 'next/router'
import { ImovelContainer } from "../../container/Imovel/index";
import { IOpportunitiesCard } from "../../dtos/Oportunities";

const Imovel: NextPage<IOpportunitiesCard> = () => <ImovelContainer />;

export async function getServerSideProps() {
	return {
		props: {

		}
	}
}

export default Imovel;
