import { Flex } from "@chakra-ui/react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { fetchGeocode } from "../../services";

export const Maps: FunctionComponent = () => {
	const [getLocalization, setGetLocalization] = useState<any>([]);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any,
	});
	const { data } = useQuery("geocode", fetchGeocode, {
		refetchOnWindowFocus: false,
		refetchInterval: 300000,
	});

	useEffect(() => {
		const localiza = data?.results.map((data: any) => data?.geometry?.location);
		setGetLocalization(localiza);
	}, [data]);

	const localization = useMemo(() => getLocalization?.[0], [getLocalization]);

	const markers = [
		{ id: 1, lat: -30.056766674179258, lng: -51.16853770737718 },
		{ id: 2, lat: -30.056432373116305, lng: -51.17922362813253 },
	];

	return (
		<>
			{isLoaded ? (
				<GoogleMap
					zoom={16}
					center={{ lat: -30.056766674179258, lng: -51.16853770737718 }}
					mapContainerClassName="map-container"
				>
					{markers.map((data: any) => (
						<MarkerF
							key={data.id}
							icon={{
								url: "icons/Home-Maps.svg",
								scaledSize: new google.maps.Size(57, 57),
								labelOrigin: new google.maps.Point(30, -32),
							}}
							label={{
								text: "Crypto Plaza",
								className: "map-label",
							}}
							position={{ lat: data.lat, lng: data.lng }}
						/>
					))}
				</GoogleMap>
			) : (
				<Flex>Oi</Flex>
			)}
		</>
	);
};
