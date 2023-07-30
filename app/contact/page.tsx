"use client";
import ContactDetails from "@/src/components/ContactDetails";

const Contact = () => {
	return (
		<div className="h-[85vh] flex flex-col">
			<div className="hero flex justify-center items-center relative">
				<h1 className="flex justify-center absolute top-[50%] items-center py-4 px-6 rounded-md shadow-md shadow-orange-500/90 text-4xl md:text-6xl lg:text-8xl text-orange-500/90 bg-blue-950/80 mx-auto transition-all duration-300">
					Contact
				</h1>
			</div>
			<div className="flex justify-center items-center m-10 bg-blue-200/40">
				<ContactDetails />
			</div>
		</div>
	);
};

export default Contact;
