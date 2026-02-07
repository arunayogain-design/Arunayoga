"use client";

import { motion } from "framer-motion";

const pastEvents = [
    { title: "Yoga for Stress", year: "2025", color: "bg-blue-200" },
    { title: "Suryanamaskar Marathon", year: "2024", color: "bg-orange-200" },
    { title: "Women's Wellness Day", year: "2024", color: "bg-pink-200" },
    { title: "Advanced Asana Workshop", year: "2023", color: "bg-purple-200" },
];

export default function PastEvents() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-secondary mb-12 text-center">
                    Past Events Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-xl overflow-hidden ${event.color} group cursor-pointer`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                                <h3 className="font-bold text-lg">{event.title}</h3>
                                <span className="text-sm">{event.year}</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold opacity-30">
                                [Image: {event.title}]
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
