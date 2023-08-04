"use client";

import ImageCard from "../components/ImageCards";

const StoreFeatureCard = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-8 md:w-[80%] md:my-20 mx-auto px-10 h-[40vh] overflow-hidden text-blue-900">
				<h1 className="my-10 text-2xl md:text-3xl lg:6xl font-semibold">
					WELCOME TO MUTHAIGA MINI MARKET
				</h1>
				<p className="bg-blue-200/20 md:text-xl lg:4xl p-4 shadow-xl">
					Muthatiga Mini Mart is a beloved destination in the heart of Diani
					Beach, a stunning coastal paradise. Our mini super market caters to
					the diverse needs of residents and visitors alike. Offering an
					extensive range of products and services, from locally sourced fresh
					produce to gourmet snacks and beach essentials, we strive to meet
					every customer's needs. With a friendly and inviting atmosphere,
					Muthatiga Mini Mart is dedicated to providing exceptional customer
					service, ensuring a convenient and enjoyable shopping experience in
					the vibrant Diani Beach community.
				</p>
			</div>
			<div className="flex mx-12 md:min-w-[350px] justify-center items-center flex-col md:flex-row md:row-span-2 gap-8 md:gap-10 flex-wrap">
				<ImageCard
					imageSrc="/images/cheese.jpeg"
					title="Cheese"
					description="Wide selection of Cheese"
				/>
				<ImageCard
					imageSrc="/images/beverages.jpeg"
					title="Beverages"
					description="All Your Favorite Beverages in one spot"
				/>
				<ImageCard
					imageSrc="/images/bananas.jpeg"
					title="Fruits and Vegetables"
					description="Variety of Fresh Groceries"
				/>
				<ImageCard
					imageSrc="/images/mmm7.jpeg"
					title="Household Goods"
					description="Fully Stocked Super Market"
				/>
			</div>
		</div>
	);
};

export default StoreFeatureCard;
