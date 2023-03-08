import React, { FunctionComponent } from "react";
import { DefaultTemplate } from "../DefaultTemplate";
import { ImovelDetail } from "../../components/Imovel/imovel";

export const ImovelContainer: FunctionComponent = () => {

	return (
		<DefaultTemplate>
			<ImovelDetail />
		</DefaultTemplate>
	);
};
