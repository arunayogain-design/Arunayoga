"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const founderImages = [
    {
        image: "/assets/arunadevi-1.jpg",
        caption: "Yogini Arunadevi - Founder"
    },
    {
        image: "/assets/Yoga-Guru-Arunadevi_1.jpg",
        caption: "Teaching Yoga"
    },
    {
        image: "/assets/arunadevi-2.png",
        caption: "With Students"
    },
    {
        image: "/assets/community-1.jpeg",
        caption: "Community Events"
    }
];

export default function TeamGrid() {
    return (
        <section className="py-20 bg-brand-light-blue/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-4">
                        Meet Yogini Arunadevi
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Founder & Lead Director with over 35 years of experience in therapeutic yoga,
                        descending from a lineage of spiritual healers including Siddhayogini Sadamma.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {founderImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.caption}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-gray-700 font-medium text-sm">{item.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Contact Yogini Arunadevi
                    </a>
                </div>
            </div>
        </section>
    );
}
