import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import { apiInstance } from "../../services/api";
import { motion } from "framer-motion";

const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: false,
	speed: 500,
	autoplaySpeed: 0,
	slidesToShow: 1,
	slidesToScroll: 1,
};

interface ICarousel {
	widthValue: string;
	heightValue: string;
	extra_images?: string[];
	modal_images?: string[];
	selectedImage?: string;
	setCurrentIndex?: any;
	isOpen?: boolean;
}

export const Carousel: React.FC<ICarousel> = props => {
	const {
		widthValue,
		heightValue,
		extra_images,
		modal_images,
		selectedImage,
		setCurrentIndex,
		isOpen,
	} = props;
	const [slider, setSlider] = React.useState<Slider | null>(null);

	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const [imagesCarousel, setImagesCarousel] = useState<string[]>([]);
	const api = apiInstance();

	useMemo(() => {
		if (modal_images) {
			const allImages = modal_images || [];
			let orderedImages = [...allImages];

			if (selectedImage && allImages.indexOf(selectedImage) > 0) {
				const selectedIndex = allImages.indexOf(selectedImage);
				orderedImages.splice(selectedIndex, 1);
				orderedImages = [selectedImage, ...orderedImages];
				if (
					allImages.indexOf(selectedImage) === 0 ||
					orderedImages.indexOf(selectedImage) === 0
				) {
					setCurrentIndex(1);
				} else {
					setCurrentIndex(allImages.indexOf(selectedImage));
				}
			}

			Promise.all(
				orderedImages.map((picture?: string) => api.get(`/file/${picture}`))
			).then(responses => {
				const imageUrls = responses.map(
					response => response.request?.responseURL
				);
				setImagesCarousel(imageUrls);
			});
		} else {
			extra_images?.map((picture: string) => {
				api.get(`/file/${picture}`).then(response => {
					setImagesCarousel(prevState => [
						...prevState,
						response.request?.responseURL,
					]);
				});
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedImage]);

	const handleIndex = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<>
			<Box
				position={"relative"}
				height={heightValue}
				width={widthValue}
				overflow={"hidden"}
				borderRadius="0.25rem"
				_active={{ boxShadow: "none" }}
				boxShadow="none"
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

				<Slider
					{...settings}
					ref={slider => setSlider(slider)}
					afterChange={index => handleIndex(index + 1)}
				>
					{imagesCarousel.map((url: string, index: number) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.7 }}
							className="page-transition"
						>
							<Box
								height={heightValue}
								position="relative"
								backgroundPosition="center"
								backgroundRepeat="no-repeat"
								backgroundSize="cover"
								backgroundImage={`url(${url})`}
								objectFit={"cover"}
							/>{" "}
						</motion.div>
					))}
				</Slider>
			</Box>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7 }}
					className="page-transition"
				>
					<IconButton
						aria-label="left-arrow"
						borderRadius="full"
						position="absolute"
						left={"6.5rem"}
						top={top}
						zIndex={0}
						onClick={() => {
							slider?.slickPrev();
						}}
						bgColor="transparent"
						_hover={{ opacity: 0.6 }}
						_focus={{ bgColor: "transparent", boxShadow: "none" }}
					>
						<MdArrowBackIosNew color="#4A5568" size={50} />
					</IconButton>
					<IconButton
						aria-label="right-arrow"
						borderRadius="full"
						position="absolute"
						right={"6.5rem"}
						top={top}
						zIndex={2}
						onClick={() => {
							slider?.slickNext();
						}}
						bgColor="transparent"
						_hover={{ opacity: 0.6 }}
						_focus={{ bgColor: "transparent", boxShadow: "none" }}
					>
						<MdArrowForwardIos color="#4A5568" size={50} />
					</IconButton>{" "}
				</motion.div>
			)}
		</>
	);
};
