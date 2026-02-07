"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about-founder.png" // Placeholder
                                alt="Yogini Arunadevi"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <blockquote className="text-white italic text-lg font-light">
                                    &quot;Yoga is not a religion. It is a science. Science of well-being, science of youthfulness, science of integrating body, mind and soul.&quot;
                                </blockquote>
                                <p className="text-accent mt-4 font-semibold">— Yoga Guru Arunadevi</p>
                            </div>
                        </div>
                        {/* Decorative Element behind */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-2xl" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Meet Our Founder
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-primary text-text">
                            Yogini Arunadevi
                            <span className="block text-2xl font-light text-gray-500 mt-2">
                                World-Renowned Yoga Expert
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Led by veteran Yoga Guru Arunadevi with over three decades of experience, wealth of knowledge and wisdom. Rated as one of the top female yoga teachers in the world, she specializes in ancient Vedic yoga techniques to heal and transform lives.
                        </p>

                        <ul className="mb-8 space-y-3">
                            {[
                                "Yoga Ratna Award Winner",
                                "Author of \"Arogyaniki Arunayoga\"",
                                "Wonder Book of Records Holder",
                                "Trained by Legendary Gurus",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                    <span className="font-medium text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/about/founder">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                Learn More About Our Founder
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
