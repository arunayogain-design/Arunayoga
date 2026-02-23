"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        children: [
            { name: "Founder", href: "/about/founder" },
            { name: "Institute", href: "/about/institute" },
            { name: "Team", href: "/about/team" },
        ],
    },
    { name: "Classes", href: "/classes" },
    {
        name: "Yoga Teacher Training",
        href: "/teacher-training",
        children: [
            { name: "Courses Overview", href: "/teacher-training" },
            { name: "Diploma in Yoga (200 Hours)", href: "/teacher-training/diploma-200" },
            { name: "Advanced Diploma in Yoga (300 Hours)", href: "/teacher-training/advanced-300" },
            { name: "PG Diploma in Yoga (500 Hours)", href: "/teacher-training/pg-diploma-500" },
        ],
    },
    {
        name: "Wellness",
        href: "/wellness",
        children: [
            { name: "Ayurvedic Therapy", href: "/wellness/treatments" },
            { name: "Ayurvedic Detox", href: "/wellness/detox" },
            { name: "Stress Relief", href: "/wellness/stress-relief" },
        ],
    },
    { name: "Events", href: "/events" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4">
            <div className="max-w-7xl mx-auto px-8">
                <div className={`bg-white rounded-3xl shadow-lg border-2 border-gray-100 transition-all duration-300 ${isScrolled ? "py-2 px-6" : "py-3 px-8"} flex items-center justify-between`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/logo.png"
                            alt="Arunayoga"
                            width={52}
                            height={52}
                            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                        />
                        <div className="hidden sm:block">
                            <p className="text-xl sm:text-2xl leading-tight font-bold font-primary text-primary">ATRI</p>
                            <p className="text-[10px] sm:text-[13px] text-gray-500 font-medium whitespace-nowrap">
                                Arunayoga Training & Research Institute
                            </p>
                        </div>
                    </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-5 xl:gap-8 flex-1 justify-end">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary inline-flex items-center py-2"
                            >
                                {item.name}
                                {item.children ? <ChevronDown className="w-4 h-4 ml-1 opacity-60 mt-0.5" /> : null}
                            </Link>
                            {item.children ? (
                                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-full min-w-[260px] rounded-xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </nav>

                {/* Utilities & CTA */}
                <div className="hidden lg:flex items-center ml-4">
                    <Link href="/contact">
                        <Button className="bg-primary hover:bg-[#e00000] text-white font-semibold rounded-lg px-7 h-[46px] text-[15px] shadow-sm tracking-wide">
                            Book to Heal
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-text"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-100 pb-3">
                                    <Link
                                        href={item.href}
                                        className="text-base font-semibold text-text hover:text-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children ? (
                                        <div className="mt-2 ml-3 space-y-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block text-sm text-gray-600 hover:text-primary"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <div className="flex flex-col gap-3 mt-2 pt-2">
                                <div className="flex items-center gap-2 font-medium text-text">
                                    <Phone className="w-4 h-4" />
                                    <span>+91 9440698003</span>
                                </div>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full bg-primary hover:bg-primary/90">Book to Heal</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
