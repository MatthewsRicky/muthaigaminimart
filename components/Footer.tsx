"use client";

import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className="w-full p-4 mx-auto bg-blue-200/40 text-blue-950">
			<div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
				<div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-lg shadow-blue-950/60">
					<h1 className="text-xl uppercase">Muthaiga Mini Market</h1>
					<p className="text-center p-2">
						Muthatiga Mini Market: your one-stop shop for fresh local produce,
						gourmet snacks, everyday essentials, and beach supplies in Diani
						Beach.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 w-full p-2 px-2 rounded-md shadow-lg shadow-blue-950/60">
					<h1 className="text-xl uppercase">Customer Service</h1>
					<p className="text-center p-2">
						Our customer service team at the head office is available to help
						you. Monday-Friday: 9am to 5pm Saturday: 9am to 1pm Sunday: Closed
					</p>
				</div>
				<div className="flex flex-col justify-center gap-6 w-full px-2 rounded-md shadow-lg shadow-blue-950/60">
					<h1 className=" text-xl text-center uppercase">
						Coming Soon on social media!
					</h1>
					<h1 className="flex text-4xl py-1 text-blue-950/90 bg-white  rounded-lg drop-shadow-2xl m-2 justify-around items-center">
						<AiOutlineFacebook className="hover:bg-blue-950/90 transition-all duration-300 hover:text-white m-4" />
						<AiOutlineInstagram className="hover:bg-blue-950/90 transition-all duration-300 hover:text-white m-4" />
						<AiOutlineTwitter className="hover:bg-blue-950/90 transition-all duration-300 hover:text-white m-4" />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
