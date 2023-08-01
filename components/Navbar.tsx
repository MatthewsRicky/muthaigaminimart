"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu, BiXCircle } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/vercel.svg";
import { useState } from "react";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<nav className="relative top-0 left-0 right-0 text-blue-950 text-md font-semibold md:mx-10">
			<div className="absolute z-10 left-0 right-0 top-0">
				<ul className="absolute flex w-full py-6 px-4 bg-white justify-between md:hidden cursor-pointer p-4 font-semibold">
					<li>
						<Image
							src={Logo}
							alt="logo icon"
							width={100}
						/>
					</li>
					<li>
						<button
							className=" rounded-full flex justify-center p-4 items-center hover:text-neutral-100 hover:bg-orange-500/90 text-orange-500/90 w-20 text-center transition-all duration-300"
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? <BiXCircle size={26} /> : <BiMenu size={26} />}
						</button>
					</li>
				</ul>
			</div>

			<div
				className={` md:flex justify-between py-6 px-4 top-0 right-0 left-0 shadow-b-lg text-neutral-100 ${
					navbar ? "block" : "hidden"
				}`}
			>
				<ul className="w-full flex  mt-[4.5rem] md:mt-0 flex-col md:flex-row justify-between items-center transition-all duration-300 gap-4 bg-opacity-60 ">
					<li onClick={() => setNavbar(!navbar)}>
						<Link
							className="flex w-[100vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-blue-950"
							href="/"
						>
							Home
						</Link>
					</li>
					<li onClick={() => setNavbar(!navbar)}>
						<Link
							className="flex w-[100vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-blue-950"
							href="/about"
						>
							About{" "}
						</Link>
					</li>
					<li onClick={() => setNavbar(!navbar)}>
						<Link
							className="flex w-[100vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-blue-950"
							href="/whatsapporders"
						>
							WhatsApp Orders
						</Link>
					</li>
					<li onClick={() => setNavbar(!navbar)}>
						<Link
							className="flex w-[100vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-blue-950"
							href="/contact"
						>
							Contact
						</Link>
					</li>
					<li onClick={() => setNavbar(!navbar)}>
						<Link
							className="flex w-[100vw] md:w-auto md:flex justify-center md:px-4 py-4 hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-blue-950"
							href="/location"
						>
							Location
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
