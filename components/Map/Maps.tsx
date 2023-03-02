import { Flex } from "@chakra-ui/react"
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api"
import { FunctionComponent, useEffect, useMemo, useState } from "react"
import { useQuery } from "react-query"
import { fetchGeocode } from "../../services"

export const Maps: FunctionComponent = () => {
	const [getLocalization, setGetLocalization] = useState<any>([])
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APY_KEY as any })
	const { data } = useQuery("geocode", fetchGeocode, {
		refetchOnWindowFocus: false,
		refetchInterval: 300000,
	})

	useEffect(() => {
		const localiza = data?.results.map((data: any) => data?.geometry?.location)
		setGetLocalization(localiza)
	}, [data])

	const localization = useMemo(() => (getLocalization?.[0]), [getLocalization])

	return (
		<>
			{isLoaded ? (
				<GoogleMap
					zoom={16}
					center={localization}
					mapContainerClassName="map-container">
					<MarkerF position={localization} />
				</GoogleMap>
			) : (
				<Flex>Oi</Flex>
			)}

		</>
	)
}
