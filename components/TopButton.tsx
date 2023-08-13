"use client";

const TopButton: React.FC = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Adds smooth scrolling animation
		});
	};

	return (
		<button
			className="scroll-to-top-button p-2 bg-[#000080] hover:rounded-md hover:shadow-md hover:scale-105 text-white"
			onClick={handleScrollToTop}
		>
			Top
		</button>
	);
};
export default TopButton;
