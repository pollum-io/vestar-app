import { Flex } from "@chakra-ui/react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { fetchGeocode } from "../../services";
interface IMaps {
	localization?: any;
	localizations?: any;
}

export const Maps: FunctionComponent<IMaps> = ({
	localization,
	localizations,
}) => {
	const [getLocalization, setGetLocalization] = useState<any>([]);
	const [getLocalizations, setGetLocalizations] = useState<any>([]);

	const [data, setData] = useState<any>([]);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any,
	});
	useEffect(() => {
		if (localization) {
			fetchGeocode(localization as any).then(res => {
				setData(res);
			});
		} else if (localizations) {
			localizations?.map((data: any) => {
				fetchGeocode(data.address as any).then(res => {
					setData((prevState: any) => [...prevState, res]);
				});
			});
		}
	}, [localization, localizations]);
	//aqui nessa funcao eu mando o address e recebo um array com todos os dados do lugar

	useEffect(() => {
		if (localizations) {
			const asd = data?.map((data: any) => data?.results).flat();
			const getPlace = asd?.map((data: any) => data?.geometry?.location);

			setGetLocalizations(getPlace);
		}
		const getPlace = data?.results?.map(
			(data: any) => data?.geometry?.location
		);
		setGetLocalization(getPlace);
	}, [data, localizations]);
	//aqui eu pego o location que tem lat e lng e que sao um array de obj [{}]

	const convertPlace = useMemo(() => getLocalization?.[0], [getLocalization]);
	//const convertPlaces = useMemo(() => getLocalizations, [getLocalizations]);

	const convertPlaces = getLocalizations.reduce((acc: any, curr: any) => {
		const alreadyExists = acc.some(
			(marker: any) => marker.lat === curr.lat && marker.lng === curr.lng
		);

		if (!alreadyExists) {
			acc.push(curr);
		}

		return acc;
	}, []);

	useEffect(() => {
		const ddd = convertPlaces.map((acc: any) => {
			console.log(acc.lat, "accaccaccacc");
		});
	}, [convertPlaces]);
	//aqui eu so pego o objeto da posicao 0

	return (
		<>
			{isLoaded ? (
				localizations?.length ? (
					<GoogleMap
						zoom={16}
						center={convertPlace}
						mapContainerClassName="map-container"
					>
						{convertPlaces.map((places: any) => {
							// eslint-disable-next-line react/jsx-key
							<MarkerF
								icon={{
									url: "/images/icons/Home-Maps.svg",
									scaledSize: new google.maps.Size(57, 57),
									labelOrigin: new google.maps.Point(30, -32),
								}}
								label={{
									text: "Crypto Plaza",
									className: "map-label",
								}}
								position={{ lat: places.lat, lng: places.lng }}
							/>;
						})}
					</GoogleMap>
				) : (
					<GoogleMap
						zoom={16}
						center={convertPlace}
						mapContainerClassName="map-container"
					>
						<MarkerF
							icon={{
								url: "/images/icons/Home-Maps.svg",
								scaledSize: new google.maps.Size(57, 57),
								labelOrigin: new google.maps.Point(30, -32),
							}}
							label={{
								text: "Crypto Plaza",
								className: "map-label",
							}}
							position={convertPlace}
						/>
					</GoogleMap>
				)
			) : (
				<Flex>Loading...</Flex>
			)}
		</>
	);
};
