import { IOpportunitieAddress } from "../components/Opportunities/OpportunitiesCard/dto";

export async function fetchGeocode(localization: IOpportunitieAddress) {
	const { address, neighborhood, state_alias, street } = localization;

	const request = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${address}+${street},+${neighborhood},+${state_alias}&key=${
			process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any
		}`,
		{
			method: "GET",
		}
	);

	return request.json();
}
