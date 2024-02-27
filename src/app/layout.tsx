import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import Provider from "./Provider";
const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "GoOutFilter Travel and Tour Agency - Explore the World with Us",
  description:
    "Discover unforgettable travel experiences with GoOutFilter Travel and Tour Agency. We specialize in creating memorable journeys tailored to your preferences. Explore the world hassle-free with our expertly crafted itineraries and personalized services"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
