"use client";

import { Award, BookOpen, Tv, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    {
        category: "Awards",
        items: ["Yoga Ratna Award", "Best Yoga Teacher 2023", "Lifetime Achievement"],
        icon: Award,
    },
    {
        category: "Publications",
        items: ["Arogyaniki Arunayoga (Book)", "Scientific Yoga DVDs", "Research Papers"],
        icon: BookOpen,
    },
    {
        category: "Media",
        items: ["TV9 Health Show", "ETV Life Yoga Series", "Newspaper Columns"],
        icon: Tv,
    },
    {
        category: "Records",
        items: ["Wonder Book of Records", "Longest Headstand", "Mass Yoga Event"],
        icon: Star,
    },
];

export default function Achievements() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold font-primary text-center text-primary mb-12">
                    Achievements & Recognition
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 mx-auto bg-brand-light-blue/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                                <achievement.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-primary text-secondary mb-4">
                                {achievement.category}
                            </h3>
                            <ul className="space-y-2">
                                {achievement.items.map((item, i) => (
                                    <li key={i} className="text-gray-600 text-sm font-medium">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
