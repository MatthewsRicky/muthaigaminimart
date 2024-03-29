"use client";

import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/next-js";
import { motion, animate } from "framer-motion";
import { AiFillContacts } from "react-icons/ai";

import Link from "next/link";

const Location = () => {
	return (
		<div>
			<div className="location w-full md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="flex flex-col justify-center items-center h-full bg-black/30 p-4 mx-auto text-center gap-6 text-[#000080]"
				>
					<div className="flex gap-4 justify-center bg-white p-4 items-center">
						<Image
							src="/images/Logo 3.svg"
							alt="Logo"
							width={100}
							height={100}
						/>
						<motion.h1
							initial={{ x: -300 }} // Initial x position (off the screen to the left)
							animate={{ x: 0 }} // Final x position (centered on the screen)
							transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
							className="text-xl text-[#000080] p-5 md:-p-[3.5] md:text-3xl lg:text-4xl font-bold"
						>
							LOCATION
						</motion.h1>
					</div>
				</motion.div>
			</div>
			<div className="flex w-full bg-blue-200/40 text-[#000080] p-2">
				<motion.h1
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
				>
					Muthaiga mini Market <i>{">"}</i> Location
				</motion.h1>
			</div>
			<div className="flex flex-wrap justify-center md:flex-row md:items-center flex-col gap-10 md:p-10 md:my-10">
				<div className="items-center md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-6 flex-col gap-2">
					<div className="m-6 flex flex-col">
						<h1 className="font-semibold">Working Time</h1>
						<h2>INFORMATION</h2>
					</div>
					<div>
						<Image
							src={"/images/location2.jpeg"}
							alt="location photo"
							width={400}
							height={400}
							className="flex justify-center items-center mx-auto rounded-md shadow-lg shadow-[#ff2800]/60"
						/>
						<div className="flex justify-center items-center m-6 gap-4">
							<div>
								<CalendarIcon
									boxSize={14}
									color="#000080"
								/>
							</div>
							<div className="flex flex-col gap-3">
								<h2 className="text-lg font-semibold">Working Time</h2>
								<p>
									Our office customer service team is ready to help you.
									Monday-Friday: 9:30am to 5pm Saturday: 9:30am to 5pm Sunday:
									Closed
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="items-center md:max-w-[450px] 
					 drop-shadow-lg m-4 bg-blue-200/40 p-2 flex-col gap-2"
				>
					<div className="my-4 mx-6 flex flex-col">
						<h1 className="font-semibold">Contact</h1>
						<h2>INFORMATION</h2>
					</div>

					<div>
						<Image
							src={"/images/location3.jpeg"}
							alt="location photo"
							width={400}
							height={400}
							className="flex justify-center items-center mx-auto rounded-md shadow-lg shadow-[#ff2800]/60"
						/>
						<div className="flex flex-col justify-center p-2 m-5 gap-4">
							<div className="flex justify-center items-center gap-4">
								<div>
									<AiFillContacts
										size={60}
										color="#000080"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<h2 className="text-lg font-semibold">Address Info</h2>
									<p>Located at Diani Shopping Center, Off Diani Beach Road.</p>
								</div>
							</div>
							<div className="flex flex-col p-2 gap-4">
								<div className="flex items-center gap-4">
									<div>
										<PhoneIcon
											boxSize={12}
											color="#000080"
										/>
									</div>
									<div className="flex flex-col gap-1">
										<h2 className="text-lg font-semibold">Contact Details</h2>
										<p>0775 889988</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="md:max-w-[450px-750px] items-center drop-shadow-lg m-4 p-2 flex flex-col md:flex-row justify-center gap-2">
				<div className="flex justify-center items-center  md:min-w-[400px] max-w-[500px] shadow-md shadow-[#000080] hover:shadow-lg hover:shadow-[#ff2800]/80 hover:scale-105">
					<Link
						href={"https://goo.gl/maps/GUtcA74v2rdzTKsq7"}
						target="_blank"
					>
						<h1 className="font-semibold text-[#000080] p-4 flex justify-center items-center">
							Location Map
						</h1>
						<Image
							src="/images/location-map.jpeg"
							alt="Map"
							width={400}
							height={400}
						/>
						<p className="font-semibold text-[#000080] p-4 flex justify-center items-center">
							Click to view full map
						</p>
					</Link>
				</div>
				<div className="md:max-w-[450px-750px] items-center drop-shadow-lg m-4 p-2 flex flex-col gap-2">
					<div className="flex flex-col justify-center items-center  md:min-w-[400px] max-w-[650px] shadow-md shadow-[#000080] hover:shadow-lg hover:shadow-[#ff2800]/80 hover:scale-105">
						<Link href="/whatsapporders">
							<h1 className="font-semibold text-[#000080] p-4 flex justify-center items-center">
								Shop from Home
							</h1>
							<Image
								src="/images/carticon.jpeg"
								alt="Cart Icon for whatsapp orders"
								width={400}
								height={400}
							/>
						</Link>
						<div>
							<h1 className="font-semibold text-[#000080] p-4 flex justify-center items-center">
								Order on WhatsApp
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
