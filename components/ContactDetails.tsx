import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	Heading,
	Stack,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const ContactDetails = () => {
	return (
		<Card className="bg-blue-950 text-white">
			<CardHeader>
				<Heading>Contact</Heading>
			</CardHeader>
			<CardBody>
				<Stack>
					<Text className="flex gap-4">
						<PhoneIcon /> <p>0700 000 000</p>
					</Text>
					<Text fontSize="4xl"></Text>
					<Text fontSize="4xl"></Text>
				</Stack>
			</CardBody>
			<CardFooter>Muthaiga mini Market</CardFooter>
		</Card>
	);
};

export default ContactDetails;
