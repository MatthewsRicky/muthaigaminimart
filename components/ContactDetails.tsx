import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	Heading,
} from "@chakra-ui/react";

const ContactDetails = () => {
	return (
		<Card>
			<CardHeader>
				<Heading>Contact</Heading>
			</CardHeader>
			<CardBody>
				<Text fontSize="4xl">
					View a summary of all your customers over the last month.
				</Text>
			</CardBody>
			<CardFooter>Muthaiga mini Market</CardFooter>
		</Card>
	);
};

export default ContactDetails;
