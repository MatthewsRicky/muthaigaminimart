"use client";

import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/next-js";
import { motion, animate } from "framer-motion";
import { AiFillContacts } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import Link from "next/link";

import Map from "public/images/location_map.png";
import Logo from "@/src/public/images/g1.png"



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
					<div className="flex gap-4 justify-center items-center">
						<Image
							src={Logo}
							alt="Logo"
							width={100}
						/>
						<motion.h1
						initial={{ x: -300 }} // Initial x position (off the screen to the left)
						animate={{ x: 0 }} // Final x position (centered on the screen)
						transition={{ duration: 1.5, ease: "easeOut" }} // Animation duration
						className="text-xl text-white p-5 md:-p-[3.5] md:text-3xl lg:text-4xl font-bold"
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
				>Muthaiga mini Market <i>></i> Location</motion.h1>
			</div>
			<div className="flex flex-wrap justify-center  md:items-center flex-col md:flex-row gap-10 md:p-10 md:my-10">
			
				<div className="items-center md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-8 flex-col gap-2">
					<div className="m-6 flex flex-col">
						<h1 className="font-semibold">Working Time</h1>
						<h2>INFORMATION</h2>
					</div>
					<div>
						<Image
							src={"/images/location2.jpg"}
							alt="location photo"
							width={400}
							height={400}
						/>
						<div className="flex justify-center items-center m-6 gap-4">
						<div>
							<CalendarIcon
								boxSize={14}
								color="#000080"
							/>
						</div>
						<div>
							<h2 className="text-lg">Working Time</h2>
							<p>
								Our office customer service team is ready to help you.
								Monday-Friday: 9:30am to 5pm Saturday: 9:30am to 5pm Sunday:
								Closed
							</p>
						</div>
					</div>
					</div>

					
				</div>
				<div className="items-center md:max-w-[450px] 
					 drop-shadow-lg m-4 bg-blue-200/40 p-8 flex-col gap-2">
						<div className="my-4 mx-6 flex flex-col">
							<h1 className="font-semibold">Contact</h1>
							<h2>INFORMATION</h2>
					</div>
					
						
					<div>
						<Image
							src={"/images/location2.jpg"}
							alt="location photo"
							width={400}
							height={400}
						/>
							<div className="flex justify-center items-center m-5 gap-4">
								<div>
									<AiFillContacts
										size={60}
										color="#000080"
									/>
								</div>
								<div>
									<h2>Address Info</h2>
									<p>
										Located at Diani Shopping Center, Off Diani Beach Road.
									</p>
								</div>
							</div>
							<div className="flex justify-start items-center m-6 gap-4">
								<div>
									<PhoneIcon
										boxSize={12}
										color="#000080"
									/>
								</div>
								<div>
									<h2>Contact Details</h2>
									<p>0775 889988</p>
								</div>
							</div>
					</div>

				
				</div>
				<div className="md:max-w-[450px-750px] items center drop-shadow-lg m-4 bg-blue-200/40 p-2 items-center flex flex-col gap-2 hover:shadow-lg hover:shadow-[#ff2800]/80 hover:scale-105">
					
					<div className="flex justify-center items-center  md:min-w-[400px] max-w-[650px]">
						<Link href={"https://goo.gl/maps/GUtcA74v2rdzTKsq7"} target="_blank">
							<h1 className="font-semibold p-4 flex justify-center items-center">Location Map</h1>
							<Image
							src={Map}
							alt="Map"
						/>
						</Link>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
