"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative py-24 bg-brand-dark-grey text-white overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6">
                        We&apos;d Love to Hear from You
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions about our classes, training programs, or therapies? Reach out to us and we&apos;ll be happy to assist you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
