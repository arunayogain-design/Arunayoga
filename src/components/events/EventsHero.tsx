"use client";

import { motion } from "framer-motion";

export default function EventsHero() {
    return (
        <section className="relative py-24 bg-brand-dark-grey text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Workshops & Retreats
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6">
                        Deepen Your Practice
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Join us for immersive experiences, specialized workshops, and transformative retreats designed to elevate your journey.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
