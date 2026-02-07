"use client";

import { motion } from "framer-motion";
import { Heart, Sun, Users, BookOpen } from "lucide-react";

const values = [
    {
        title: "Authenticity",
        desc: "We stay true to the traditional teachings of Hatha and Ashtanga Yoga.",
        icon: BookOpen,
    },
    {
        title: "Compassion",
        desc: "Every student is guided with kindness, patience, and personalized care.",
        icon: Heart,
    },
    {
        title: "Community",
        desc: "We foster a supportive family of practitioners who uplift each other.",
        icon: Users,
    },
    {
        title: "Holistic Health",
        desc: "Integrating physical practice with mental clarity and spiritual growth.",
        icon: Sun,
    },
];

export default function MissionValues() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold font-primary text-secondary mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            To empower individuals to achieve physical, mental, and spiritual well-being through the scientific art of Yoga. We strive to create a world where health is natural, happiness is effortless, and peace is permanent.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded by Yogini Arunadevi, our institute is dedicated to research, training, and therapy, making the profound wisdom of yoga accessible to all.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-gray-50 rounded-xl hover:bg-brand-light-blue/10 transition-colors"
                            >
                                <value.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-xl font-bold font-primary text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
