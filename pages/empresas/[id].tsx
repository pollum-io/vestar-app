import { GetServerSideProps, NextPage } from "next";
import { ICompaniesDetails } from "../../components/Companies/CompaniesCard/dto";
import { CompanieContainer } from "../../container";
import { fetchEnterpriseById } from "../../services/fetchEnterpriseById";

interface ICompanieProps {
	data: ICompaniesDetails;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

	const response = await fetchEnterpriseById(query.id)

	return {
		props: {
			data: response?.data
		}
	}
}


const Companie: NextPage<ICompanieProps> = ({ data }) => {
	return <CompanieContainer data={data} />;
}

export default Companie;
