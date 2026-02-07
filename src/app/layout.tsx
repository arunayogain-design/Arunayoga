import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Arunayoga Training and Research Institute",
    description: "Transforming lives through authentic yoga since 1990.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${quicksand.variable} font-sans antialiased text-text bg-white`}>
                <Header />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
