"use client";
import Image from "next/image";
import {
	Card,
	CardBody,
	Heading,
	Stack,
	Text,
	Divider,
	CardFooter,
	ButtonGroup,
	Button,
} from "@chakra-ui/react";

const Location = () => {
	return (
		<div>
			<div className="hero relative h-[100vh]">
				<div className="text-white absolute top-[35%] left-[35%] z-10">
					<h1 className="flex absolute justify-center top-[50%] items-center py-4 px-6 rounded-md shadow-md shadow-orange-500/90 text-4xl md:text-6xl lg:text-8xl text-orange-500/90 bg-blue-950/80 mx-auto transition-all duration-300">
						Location
					</h1>
				</div>
			</div>
			<div>
				<Card maxW="xl">
					<CardBody>
						<Image
							src="/public/images/muthaiga-entrance.png"
							alt="Green double couch with wooden legs"
							width={400}
							height={400}
						/>
						<Stack
							mt="6"
							spacing="3"
						>
							<Heading size="md">We are Located</Heading>
							<Text>
								At Diani Shopping Centre, Ukunda, Diani Beach Road, Diani Beach
							</Text>
							<Text
								color="blue.600"
								fontSize="2xl"
							>
								$450
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button
								variant="solid"
								colorScheme="blue"
							>
								Buy now
							</Button>
							<Button
								variant="ghost"
								colorScheme="blue"
							>
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</div>
			PH2J+779,
		</div>
	);
};

export default Location;
