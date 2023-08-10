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
import { motion, animate } from "framer-motion";

const Location = () => {
	return (
		<div>
			<div className="hero w-full my-[5rem] md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="mt-[4rem] flex flex-col absolute top-[30%] left-[24%] sm:left-[30%] md:left-[24%] sm:top-20 md:top-16 p-8 rounded-lg mx-auto text-center gap-8 text-[#fff] bg-[#000080]/40 mix-blend-hard-light"
				>
					<motion.h1
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
						className="text-3xl  md:text-4xl lg:text-5xl font-bold"
					>
						LOCATION
					</motion.h1>
				</motion.div>
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
