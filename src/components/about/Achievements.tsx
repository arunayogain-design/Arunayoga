"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const achievements = [
    {
        title: "Recognition & Honors",
        category: "Awards",
        image: "/assets/Achievements-1.jpg",
    },
    {
        title: "Achievements",
        category: "Recognition",
        image: "/assets/Achievements-2.jpg",
    },
    {
        title: "Awards & Milestones",
        category: "Honors",
        image: "/assets/Achievements-3.jpg",
    },
    {
        title: "Recognition Events",
        category: "Events",
        image: "/assets/Achievements-4.jpg",
    },
    {
        title: "Celebrations",
        category: "Community",
        image: "/assets/Achievements-5.jpg",
    },
];

export default function Achievements() {
    const stripItems = [...achievements, ...achievements];

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
                        Recognition & Honors
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold font-primary text-text mb-4"
                    >
                        Achievements & Recognition
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Honored by government officials, celebrities, and yoga organizations worldwide
                    </motion.p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />
                    <motion.div
                        className="flex gap-8 py-10 px-6"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    >
                        {stripItems.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="flex-shrink-0 w-[240px] sm:w-[280px]"
                            >
                                <div className="relative h-[170px] rounded-xl overflow-hidden shadow-sm bg-white">
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
                                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
