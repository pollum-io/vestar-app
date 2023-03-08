import React, { FunctionComponent } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { ImovelDetail } from "../../components/Imovel/imovel";
import { IOpportunitiesCard } from "../../dtos/Oportunities";

interface IImovelProps {
	imovel: IOpportunitiesCard;
}

export const ImovelContainer: FunctionComponent<IImovelProps> = ({ imovel }) => {

	return (
		<DefaultTemplate>
			<ImovelDetail imovelDetails={imovel} />
		</DefaultTemplate>
	);
};
