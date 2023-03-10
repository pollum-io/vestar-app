export interface IOpportunitiesCard {
	__v: number;
	_id: string;
	address: IOpportunitieAddress;
	profitability: number;
	pictures_enterprise: string[];
	name: string;
	enterprise_type: string;
	expected_delivery_date: string; // ou data
	min_investment: number;
	isPortfolio?: boolean;
	cub_expected: number;
	description: string;
	end_date: string; // ou data
	enterprise_id: string;
	general_info: string[];
	init_date: string; // ou data
	neighbor_description: string;
	pictures_extra: string[];
	pictures_neighbor: string[];
	createdAt: string; // ou data
	updatedAt: string; // ou data
	blocked?: boolean;
	finished?: boolean;
}

export interface IOpportunitieAddress {
	state: string;
	neighborhood: string;
	street: string;
	address: number;
	state_alias?: string;
}
