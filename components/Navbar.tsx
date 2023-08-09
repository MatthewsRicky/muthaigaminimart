"use client";

import { BiMenu, BiXCircle } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/images/Logo 2_1.svg";
import { useState } from "react";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="relative w-full font top-0 left-0 right-0 text-blue-950 text-md font-semibold">
			<div className="absolute z-10 left-0 right-0 top-0">
				<ul className="absolute flex w-full py-6 px-4 bg-white items-center justify-between md:hidden cursor-pointer p-4 font-semibold">
					<Link href="/">
						<li>
							<Image
								className="text-md w-[10rem] flex justify-center hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-[#000080]"
								src={Logo}
								alt="logo icon"
								width={50}
							/>
						</li>
					</Link>
					<li>
						<button
							className=" rounded-full flex justify-center p-2 items-center hover:text-neutral-100 hover:bg-[#000080]/90 text-[000080]/90 w-12 text-center transition-all duration-300"
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? <BiXCircle size={26} /> : <BiMenu size={26} />}
						</button>
					</li>
				</ul>
			</div>

			<div
				className={` md:flex md:flex-row py-6 justify-center items-end top-0 right-0 left-0 shadow-b-lg text-neutral-100 ${
					navbar ? "block" : "hidden"
				}`}
			>
				<div className="flex flex-col md:flex-row justify-center w-full mx-0 md:mx-10 lg:mx-32 items-center gap-10 md:gap-20 lg:gap-64">
					<Link href="/">
						<Image
							className="hidden text-xl w-[10rem] md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-[#000080]"
							src={Logo}
							alt="logo icon"
							width={100}
						/>
					</Link>

					<ul className="w-full flex mt-[6.5rem] text-sm md:mt-0 flex-col md:flex-row justify-center  mx-0 items-center transition-all duration-300 gap-4 bg-opacity-60 ">
						<li onClick={() => setNavbar(!navbar)}>
							<Link
								className="flex w-[90vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition md:border-0 text-blue-950"
								href="/about"
							>
								ABOUT{" "}
							</Link>
						</li>
						<li onClick={() => setNavbar(!navbar)}>
							<Link
								className="flex w-[90vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition md:border-0 text-blue-950"
								href="/whatsapporders"
							>
								WHATSAPP ORDERS
							</Link>
						</li>
						<li onClick={() => setNavbar(!navbar)}>
							<Link
								className="flex w-[90vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition md:border-0 text-blue-950"
								href="/contact"
							>
								CONTACT
							</Link>
						</li>
						<li onClick={() => setNavbar(!navbar)}>
							<Link
								className="flex w-[90vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition  md:border-0 text-blue-950"
								href="/location"
							>
								LOCATION
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
