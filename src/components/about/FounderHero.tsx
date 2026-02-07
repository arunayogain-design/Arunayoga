"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderHero() {
    return (
        <section className="relative h-[90vh] flex flex-collg:flex-row overflow-hidden bg-primary text-white">
            {/* Left: Image */}
            <div className="lg:w-1/2 relative h-1/2 lg:h-full">
                <Image
                    src="/about-founder.png"
                    alt="Yogini Arunadevi in meditation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent lg:hidden" />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <span className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4 block">
                        Founder & Director
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-bold font-primary mb-6">
                        Yogini
                        <br />
                        Arunadevi
                    </h1>
                    <div className="w-20 h-1 bg-accent mb-8" />
                    <p className="text-xl lg:text-2xl font-light leading-relaxed text-gray-200">
                        World-Renowned Yoga Expert | Author | Award Winner
                    </p>
                    <div className="mt-8 text-gray-300 space-y-4">
                        <p>
                            Dedicating her life to the ancient science of Yoga, Yogini Arunadevi has transformed thousands of lives through her unique approach that blends traditional wisdom with modern understanding.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
