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
		<div className="flex justify-center items-center">
			<Card className="flex justify-center items-center w-[360px] md:w-[720px] lg:w-[1080px]">
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
		</div>
	);
};

export default ContactDetails;
