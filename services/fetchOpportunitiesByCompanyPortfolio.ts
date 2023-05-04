import qs from "qs";
import { apiInstance } from "./api";

export const fetchOpportunitiesByCompanyPortfolio = async (
	enterpriseId: string,
	host?: string
) => {
	const api = apiInstance(host);
	const request = await api.get(`/opportunity?enterprise_id=${enterpriseId}`);

	return request;
};
