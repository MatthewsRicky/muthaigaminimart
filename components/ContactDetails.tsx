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
				<Heading>Conclusion</Heading>
			</CardHeader>
			<CardBody>
				<Text>View a summary of all your customers over the last month.</Text>
			</CardBody>
		</Card>
	);
};

export default ContactDetails;
