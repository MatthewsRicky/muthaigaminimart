import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	StackDivider,
	Text,
	Box,
	Heading,
	Stack,
} from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const ContactDetails = () => {
	return (
		<Card variant={}>
			<CardHeader>
				<Heading size="md">Customer Care</Heading>
			</CardHeader>

			<CardBody>
				<Stack
					divider={<StackDivider />}
					spacing="4"
				>
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase"
						>
							<PhoneIcon />
						</Heading>
						<Text
							pt="2"
							fontSize="sm"
						>
							0700 000 000
						</Text>
					</Box>
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase"
						>
							<PhoneIcon />
						</Heading>
						<Text
							pt="2"
							fontSize="sm"
						>
							0700 000 000
						</Text>
					</Box>
					<Box>
						<Heading
							size="xs"
							textTransform="uppercase"
						>
							Email
						</Heading>
						<Text
							pt="2"
							fontSize="sm"
						>
							mmm@gmail.com
						</Text>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default ContactDetails;
