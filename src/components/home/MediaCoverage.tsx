"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tv, Radio, Users } from "lucide-react";

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
        title: "Newspaper Features",
        description: "Highlighting our wellness initiatives and community outreach",
        image: "/assets/newspaper-yoga.png",
        icon: Users,
        category: "Print Media",
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
    const stripItems = [...mediaItems, ...mediaItems];

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

                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />
                    <motion.div
                        className="flex gap-8 py-10 px-6"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    >
                        {stripItems.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="flex-shrink-0 w-[240px] sm:w-[280px]"
                            >
                                <div className="relative h-[160px] rounded-xl overflow-hidden shadow-sm bg-white">
                                    <Image
                                        key={item.image}
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="text-sm font-semibold text-gray-900 truncate">{item.title}</div>
                                        <div className="text-xs text-gray-500 truncate">{item.category}</div>
                                    </div>
                                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-3">
                        <Tv className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">300+ Media coverages and TV Features</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
