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
			className="scroll-to-top-button p-2 bg-[#ff2800]/90 hover:rounded-md hover:shadow-md hover:scale-105 text-white sticky top-[75%]"
			onClick={handleScrollToTop}
		>
			Top
		</button>
	);
};
export default TopButton;
