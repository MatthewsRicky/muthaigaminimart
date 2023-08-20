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
								className="text-md w-24 flex justify-center hover:border-b-2 border-[#000080] border-opacity-50 p-4 rounded-md hover:shadow-md hover:shadow-[#000080] transition border-b-2 md:border-0 text-[#000080]"
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
							{navbar ? <BiXCircle size={32} /> : <BiMenu size={32} />}
						</button>
					</li>
				</ul>
			</div>

			<div
				className={` md:flex md:flex-row md:py-0 pt-6 pb-2 justify-between items-end top-0 right-0 left-0 shadow-b-lg text-neutral-100 ${
					navbar ? "block" : "hidden"
				}`}
			>
				<div className="flex justify-between items-center w-full m-4">
					<Link
						href="/"
						onClick={() => setNavbar(!navbar)}
					>
						<Image
							className=""
							src={Logo}
							alt="logo icon"
							width={80}
						/>
					</Link>

					<div className="">
						<Link
							className="text-[#000080]"
							href="/about"
							onClick={() => setNavbar(!navbar)}
						>
							ABOUT{" "}
						</Link>

						<Link
							className="text-[#000080]"
							href="/about"
							onClick={() => setNavbar(!navbar)}
						>
							WHATSAPP ORDERS
						</Link>

						<Link
							className="text-[#000080]"
							href="/contact"
							onClick={() => setNavbar(!navbar)}
						>
							CONTACT
						</Link>

						<Link
							className="text-[#000080]"
							href="/location"
							onClick={() => setNavbar(!navbar)}
						>
							LOCATION
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
