"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-white">
            {/* Background YOGA Text */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none">
                <div className="text-[120px] sm:text-[170px] md:text-[230px] lg:text-[280px] xl:text-[350px] font-extrabold tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-primary/15 via-secondary/12 to-accent/15">
                    YOGA
                </div>
            </div>

            {/* Top Left - Quote and ATRI */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-8 left-8 md:top-12 md:left-12 z-20 max-w-md"
            >
                <p className="text-text/70 text-sm md:text-base mb-3 font-medium italic">
                    &quot;Yoga is not a religion. It is a science.&quot;
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-primary leading-[1] text-primary">
                    ATRI
                </h1>
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500">
                    Arunayoga Training & Research Institute
                </p>
            </motion.div>

            {/* Center - Founder Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 flex items-center justify-center h-full"
            >
                <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px]">
                    {/* Foggy/Snowy overlay effect */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20" />
                        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
                    </div>
                    <Image
                        src="/Classes/founder-removebg-preview.png"
                        alt="Founder"
                        fill
                        priority
                        className="object-contain drop-shadow-2xl"
                        style={{ filter: 'brightness(1.05) contrast(0.95)' }}
                        unoptimized
                    />
                </div>
            </motion.div>

            {/* Bottom Right - Journey Text and Button */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 max-w-md text-right"
            >
                <p className="text-lg md:text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
                    Start your journey to a healthier and more balanced life.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-[#e00000] text-white text-lg h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Book to Heal
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
