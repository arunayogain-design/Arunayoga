"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Vision() {
    return (
        <section className="relative py-24 bg-brand-dark-grey text-white overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.png')] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Vision
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-primary mb-8 max-w-4xl mx-auto leading-tight">
                        To establish an International Yoga and Naturopathy University, offering world-class education in India&apos;s traditional Guru Parampara style.
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        We are committed to spreading the authentic knowledge of Yoga to every corner of the globe, creating a healthier and more peaceful world.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            Join Our Journey
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                            Support Our Mission
                        </Button>
                    </div>
                </motion.div>

                {/* Impact Stats */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { label: "Teachers Trained", value: "2000+" },
                        { label: "Countries Reached", value: "13+" },
                        { label: "Years of Service", value: "30+" },
                        { label: "Lives Transformed", value: "1000s" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                        >
                            <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
