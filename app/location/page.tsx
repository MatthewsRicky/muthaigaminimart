"use client";

import { CalendarIcon, PhoneIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/next-js";
import { motion, animate } from "framer-motion";
import { AiFillContacts } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

import Map from "public/images/location_map.png";

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
			<div className="flex flex-wrap justify-center items-center  md:items-baseline flex-col sm:flex-col md:flex-row gap-10 md:p-10 md:m-10">
				<div className="md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-8 flex flex-col gap-2">
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
								Located in the shopping Center right after Watatu Watano
								junction on the right, Off Diani Beach Road.{" "}
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
				<div className="md:max-w-[450px] drop-shadow-lg m-4 bg-blue-200/40 p-8 items-center  flex-col gap-2">
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
				<div className="md:max-w-[450px-750px] lg:max-w-[750px-1080px] xl:w-full items center drop-shadow-lg m-4 bg-blue-200/40 p-2 items-center flex-1 flex-col gap-2">
					<h1 className="font-semibold">Location Map</h1>
					<div className="flex justify-center items-center  md:min-w-[400px]">
						<Image
							src={Map}
							alt="Map"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
