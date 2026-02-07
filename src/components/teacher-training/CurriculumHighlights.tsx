"use client";

import { motion } from "framer-motion";
import { Book, Heart, Zap, User } from "lucide-react";

const subjects = [
    {
        category: "Techniques, Training & Practice",
        icon: Zap,
        topics: ["Asanas (Postures)", "Pranayama (Breath Control)", "Kriyas (Cleansing)", "Chanting & Mantra"]
    },
    {
        category: "Anatomy & Physiology",
        icon: Heart,
        topics: ["Physical Anatomy", "Energy Anatomy (Chakras/Nadis)", "Biomechanics", "Contraindications"]
    },
    {
        category: "Yoga Humanities",
        icon: Book,
        topics: ["History of Yoga", "Yoga Sutras of Patanjali", "Hatha Yoga Pradipika", "Ethics for Yoga Teachers"]
    },
    {
        category: "Professional Essentials",
        icon: User,
        topics: ["Teaching Methodology", "Class Sequencing", "Business of Yoga", "Practicum (Practice Teaching)"]
    }
];

export default function CurriculumHighlights() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-center text-primary mb-12">
                    Comprehensive Curriculum
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {subjects.map((subject, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                                <subject.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">{subject.category}</h3>
                            <ul className="space-y-2">
                                {subject.topics.map((topic, i) => (
                                    <li key={i} className="text-gray-600 text-sm list-disc list-inside">
                                        {topic}
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
