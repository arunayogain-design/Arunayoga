"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tv, Radio, Newspaper, Users } from "lucide-react";

const mediaItems = [
    {
        title: "ETV News Coverage",
        description: "Featured on ETV for yoga demonstrations and health programs",
        image: "/assets/etv-news-yoga.png",
        icon: Tv,
        category: "Television",
    },
    {
        title: "Celebrity Yoga Sessions",
        description: "Training celebrities and public figures in authentic yoga practices",
        image: "/assets/celeb-yoga.png",
        icon: Users,
        category: "Special Programs",
    },
    {
        title: "Kids Yoga Programs",
        description: "Specialized yoga programs for children's health and development",
        image: "/assets/kids-yoga.png",
        icon: Users,
        category: "Youth Programs",
    },
    {
        title: "Radio & Print Media",
        description: "Regular features in newspapers and radio health segments",
        image: "/assets/radio-yoga.png",
        icon: Radio,
        category: "Media",
    },
];

export default function MediaCoverage() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        In The Spotlight
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold font-primary text-text mb-4"
                    >
                        Media Coverage & Recognition
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Featured across television, radio, and print media for promoting authentic yoga practices
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <item.icon className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">{item.category}</span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold font-primary mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white"
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-white/90">TV Appearances</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <div className="text-white/90">Media Features</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
                            <div className="text-white/90">Years in Media</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
