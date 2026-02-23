"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-brand-dark-grey text-white overflow-hidden">
            <Image
                src="/assets/arunadevi-2.png"
                alt="About Arunayoga"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-grey/90 to-transparent" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-bold font-primary mb-6">
                        Our Legacy
                    </h1>
                    <p className="text-xl lg:text-2xl font-light mb-8 max-w-3xl mx-auto text-gray-300">
                        For over 35 years, Arunayoga has been a sanctuary for authentic yoga practice, preserving ancient traditions while adapting to modern needs.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
