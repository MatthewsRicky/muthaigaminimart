import Image from "next/image";
import { Inter, Roboto } from "next/font/google";

import Hero from "../components/Hero";
import StoreFeatureCard from "../components/StoreFeatureCard";
import FaqDisplay from "../components/FaqDisplay";
import NavigationCard from "../components/NavigationCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className="w-full overflow-x-hidden overflow-y-auto flex flex-col justify-around h-full">
			<Hero />
			{/*<NavigationCard />*/}
			<div className="flex flex-col lg:flex-row">
				<StoreFeatureCard />
				<FaqDisplay />
			</div>
		</div>
	);
}
