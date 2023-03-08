import { Flex } from "@chakra-ui/react"
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api"
import { FunctionComponent, useEffect, useMemo, useState } from "react"
import { useQuery } from "react-query"
import { fetchGeocode } from "../../services"
import homeIcon from './Home-Maps.svg'
interface IMaps {
	localization?: any;
	localizations?: [];
}

export const Maps: FunctionComponent<IMaps> = ({ localization, localizations }) => {
	const [getLocalization, setGetLocalization] = useState<any>([])
	const [data, setData] = useState<any>([])

	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any })

	useEffect(() => {
		if (localization) {
			fetchGeocode(localization as any).then(res => { setData(res) })
		}
	}, [localization])

	useEffect(() => {
		const getPlace = data?.results?.map((data: any) => data?.geometry?.location)
		setGetLocalization(getPlace)
	}, [data])

	const convertPlace = useMemo(() => (getLocalization?.[0]), [getLocalization])

	return (
		<>
			{isLoaded ? (
				<GoogleMap
					zoom={16}
					center={convertPlace}
					mapContainerClassName="map-container"
				>
					<MarkerF
						icon={{
							url: homeIcon.src,
							scaledSize: new google.maps.Size(57, 57),
							labelOrigin: new google.maps.Point(30, -32),
						}}
						label={{
							text: 'Crypto Plaza',
							className: "map-label",
						}}
						position={convertPlace} />
				</GoogleMap>
			) : (
				<Flex>Oi</Flex>
			)}

		</>
	)
}
