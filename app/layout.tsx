import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";
import { Providers } from "./providers";

export const metadata = {
	title: "Muthaiga Mini Market",
	description:
		"Shop at Muthaiga mini Market in person and Online! Super Convinient, fully stocked and Wide range and variety!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
