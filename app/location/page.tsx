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
			<div className="hero w-full md:my-0 group relative">
				<motion.div
					initial={{ x: -300 }} // Initial x position (off the screen to the left)
					animate={{ x: 0 }} // Final x position (centered on the screen)
					transition={{ duration: 1 }} // Animation duration
					className="mt-[4rem] flex flex-col justify-center items-center absolute top-[37%] left-[24%] md:left-[33%] xl:left[45%] md:top-[24%] p-4 mx-auto text-center gap-6 bg-[#fff] text-[#000080]"
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
						className="text-3xl  md:text-4xl lg:text-5xl font-bold"
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
			<div className="flex flex-wrap justify-center  md:items-baseline flex-col sm:flex-col md:flex-row gap-10 md:p-10 md:m-10">
				<div className="md:min-h-[450px] justify-around items-center md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-8 flex flex-col gap-2">
					<div className="hover:underline underline-offset-2">
						<h1 className="font-semibold">Contact</h1>
						<h2>INFORMATION</h2>
					</div>

					<div className="flex gap-4">
						<div>
							<AiFillContacts
								size={80}
								color="#000080"
							/>
						</div>
						<div>
							<h2>Address Info</h2>
							<p>
								Located at Diani Shopping Center, Off Diani Beach Road.{" "}
							</p>
						</div>
					</div>
					<div>
						<div className="flex gap-4">
							<PhoneIcon
								boxSize={12}
								color="#000080"
							/>
						</div>
						<div>
							<h2>Contact Details</h2>
							<p></p>
						</div>
					</div>
				</div>
				<div className="md:min-h-[450px] justify-around md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-8 items-center  flex-col gap-2">
					<div className="hover:underline underline-offset-2">
						<h1 className="font-semibold">Working Time</h1>
						<h2>INFORMATION</h2>
					</div>

					<div className="flex gap-4">
						<div>
							<CalendarIcon
								boxSize={14}
								color="#000080"
							/>
						</div>
						<div>
							<h2>Working Time</h2>
							<p>
								Our office customer service team is ready to help you.
								Monday-Friday: 9:30am to 5pm Saturday: 9:30am to 5pm Sunday:
								Closed
							</p>
						</div>
					</div>
				</div>
				<div className="md:max-w-[450px-750px] lg:max-w-[750px-1080px] xl:w-full items center drop-shadow-lg m-4 bg-blue-200/40 p-2 items-center flex flex-col gap-2">
					
					<div className="flex justify-center items-center  md:min-w-[400px]">
						<Link href={"https://goo.gl/maps/GUtcA74v2rdzTKsq7"}>
							<h1 className="font-semibold">Location Map</h1>
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
