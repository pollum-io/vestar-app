import React, { useEffect, useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { fetchOpportunitiesImages } from "../../services/opportunitiesImages";

const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

interface ICarousel {
	widthValue: string;
	heightValue: string;
	extra_images?: any;
	modal_images?: any;
}

export const Carousel: React.FC<ICarousel> = props => {
	const { widthValue, heightValue, extra_images, modal_images } = props;
	const [slider, setSlider] = React.useState<Slider | null>(null);
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "10px" });

	const [imagesCarousel, setImagesCarousel] = useState<string[]>([])

	useEffect(() => {
		if (extra_images) {
			extra_images.map((picture: string) => {
				fetchOpportunitiesImages(picture).then(res => {
					setImagesCarousel(prevState => [...prevState, res])
				})
			})
		}
	}, [extra_images])

	return (
		<Box
			position={"relative"}
			height={heightValue}
			width={widthValue}
			overflow={"hidden"}
		>
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			<IconButton
				aria-label="left-arrow"
				borderRadius="full"
				position="absolute"
				left={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt />
			</IconButton>
			<IconButton
				aria-label="right-arrow"
				borderRadius="full"
				position="absolute"
				right={side}
				top={top}
				transform={"translate(0%, -50%)"}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt />
			</IconButton>
			<Slider {...settings} ref={slider => setSlider(slider)}>
				{(modal_images ? modal_images : imagesCarousel)?.map((url: any, index: any) => (
					<Box
						key={index}
						height={heightValue}
						position="relative"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						backgroundImage={`url(${url})`}
						objectFit={'cover'}
					/>
				))}
			</Slider>
		</Box>
	);
};
