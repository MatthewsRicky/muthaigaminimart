import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { MdPhone, MdInfo, MdMap } from "react-icons/md";

const ContactApp = ({ name, phone, address }) => {
	return (
		<Box
			borderWidth="1px"
			borderRadius="md"
			p="4"
			shadow="md"
		>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				mb="2"
			>
				<Text fontWeight="bold">{name}</Text>
			</Flex>
			<VStack
				spacing="2"
				align="start"
			>
				<Flex align="center">
					<MdPhone size={20} />
					<Text ml="2">{phone}</Text>
				</Flex>
				<Flex align="center">
					<MdInfo size={20} />
					<Text ml="2">{address}</Text>
				</Flex>
				<Flex align="center">
					<MdMap size={20} />
					<Text ml="2">Location: XYZ</Text>
				</Flex>
			</VStack>
		</Box>
	);
};

export default ContactApp;
