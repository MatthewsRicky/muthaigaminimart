"use client";

import {
	Image,
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
						/>
						<Stack
							mt="6"
							spacing="3"
						>
							<Heading size="md">We are Located</Heading>
							<Text>
								At Diani Shopping Centre, Ukunda, Diani Beach Road, Diani Beach
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button
								variant="ghost"
								colorScheme="blue"
							>
								Contact us
							</Button>
							<Button
								variant="ghost"
								colorScheme="blue"
							>
								Back Home
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Location;
