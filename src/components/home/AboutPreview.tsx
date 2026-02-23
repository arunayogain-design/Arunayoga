"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="py-20 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <div className="mb-3">
                        <h2 className="text-3xl md:text-4xl font-bold font-primary text-primary">ATRI</h2>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">
                            Arunayoga Training & Research Institute
                        </p>
                    </div>
                    <p className="text-2xl md:text-3xl font-primary text-primary">Build. Achieve.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        <h3 className="text-2xl lg:text-3xl font-primary font-bold text-text mb-5 leading-snug">
                            Arunayoga Foundation led by Yoga Guru Arunadevi has trained over <span className="text-primary font-bold">35000 teachers</span> since 1990.
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            A veteran with over <span className="font-bold text-gray-800">35 years of experience</span>, wealth of knowledge and wisdom, she continues to guide students from India and around the world through <span className="font-bold text-gray-800">authentic yoga practice</span>.
                        </p>

                        <ul className="mb-8 space-y-3">
                            {[
                                "35+ years of dedicated yoga teaching",
                                "35000+ yoga teachers trained",
                                "Traditional Guru Parampara lineage",
                                "Specialized therapeutic yoga guidance",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/about/founder">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                Learn More About Founder
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/Yoga-Guru-Arunadevi_1.jpg"
                                alt="Yoga Guru Arunadevi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/IMG_0872.jpg"
                                alt="Arunayoga campus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h3 className="text-2xl lg:text-3xl font-primary font-bold text-text mb-4 leading-snug">
                            Surrounded by lush greenery - a unique and serene place to practice yoga and meditation.
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our institute environment supports focused learning, mindful practice, and <span className="font-bold text-gray-800">complete physical-mental rejuvenation</span> through <span className="font-bold text-gray-800">traditional yoga</span> and wellness disciplines.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
