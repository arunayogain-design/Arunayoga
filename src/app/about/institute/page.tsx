"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Leaf, Heart, Globe, MapPin } from "lucide-react";

export default function InstitutePage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/assets/IMG_0872.jpg"
                    alt="Arunayoga Campus"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4 block">
                            Our Heritage
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-bold font-primary mb-6">
                            Arunayoga Training & Research Center
                        </h1>
                        <p className="text-xl font-light text-gray-200">
                            A sanctuary for holistic health and spiritual growth since 1992.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story & Vision */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                                Purpose & Vision
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold font-primary text-brand-dark-grey mb-6">
                                Bringing Yoga to Every Doorstep
                            </h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Established in 1992 by the veteran visionary, <strong>Yoga Guru Arunadevi</strong>,
                                    Arunayoga has been a guiding light for individuals seeking to harmonize their body, mind, and soul.
                                </p>
                                <p>
                                    We believe that yoga is more than just physical postures; it is a profound science and a vital tool for relaxation,
                                    meditation, and fostering a balanced lifestyle. Our commitment lies in applying the deep knowledge of yogic
                                    philosophy and psychology to make a lasting difference in global education and holistic health.
                                </p>
                                <p>
                                    Our doors are open to everyone, regardless of age, background, or experience level. We promote a healthy,
                                    conscious lifestyle that empowers you to thrive in today’s fast-paced world.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/assets/classes-1.jpg"
                                alt="Yoga Class in Session"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location & Atmosphere */}
            <section className="py-20 bg-white">
                <div className="container mx-auto max-w-5xl text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-6">
                            An Oasis in the Heart of Hyderabad
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                            Located in <strong>Banjara Hills, Hyderabad, Telangana</strong>, our center is surrounded by lush greenery,
                            creating a serene, away-from-the-city atmosphere while remaining conveniently accessible. It's the perfect
                            environment to retreat, heal, and connect with your inner self.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Offerings */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold font-primary text-brand-dark-grey mb-4">
                            Comprehensive Wellness Programs
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Daily Yoga Classes",
                                desc: "Dynamic and restorative sessions tailored for the community to foster daily well-being."
                            },
                            {
                                icon: BookOpen,
                                title: "Teacher Training",
                                desc: "Intensive RYS courses designed to shape passionate practitioners into inspiring yoga educators."
                            },
                            {
                                icon: Leaf,
                                title: "Ayurveda & Naturopathy",
                                desc: "Problem-specific therapies, detox, and stress-relief programs promoting holistic healing."
                            },
                            {
                                icon: Globe,
                                title: "Workshops & Seminars",
                                desc: "Specialized events for professionals, women, and students to integrate wellness into modern life."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                            >
                                <div className="w-14 h-14 bg-brand-light-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-brand-blue">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold font-primary text-brand-dark-grey mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Legacy Stats */}
            <section className="py-20 bg-brand-dark-grey text-white border-t-2 border-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-6"
                        >
                            <div className="text-5xl font-bold mb-2">3+</div>
                            <div className="text-gray-200 font-medium uppercase tracking-wider text-sm">Decades of Wisdom</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6"
                        >
                            <div className="text-5xl font-bold mb-2">1,000s</div>
                            <div className="text-gray-200 font-medium uppercase tracking-wider text-sm">Of Students Trained</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6"
                        >
                            <div className="text-5xl font-bold mb-2">13+</div>
                            <div className="text-gray-200 font-medium uppercase tracking-wider text-sm">Countries Reached Globally</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
