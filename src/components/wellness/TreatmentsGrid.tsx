"use client";

import { motion } from "framer-motion";
import { Droplets, Flame, Sparkles, Wind, Leaf } from "lucide-react";

const treatments = [
    {
        title: "Panchakarma",
        desc: "A comprehensive detoxification program to release deep-rooted toxins and restore constitutional balance.",
        icon: Droplets,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Abhyanga",
        desc: "Traditional full-body warm oil massage that nourishes the skin, lubricates joints, and calms the nervous system.",
        icon: Sparkles,
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        title: "Shirodhara",
        desc: "A deeply relaxing therapy where warm herbal oil is poured in a continuous stream over the forehead.",
        icon: Wind,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Udvartana",
        desc: "Herbal powder massage that stimulates metabolism, improves circulation, and helps in weight management.",
        icon: Leaf,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Nasya",
        desc: "Nasal administration of herbal oils to clear sinuses and improve head and neck health.",
        icon: Flame,
        color: "bg-red-100 text-red-600"
    },
    {
        title: "Kati Basti",
        desc: "Localized oil treatment for relieving chronic lower back pain and strengthening the spine.",
        icon: Droplets,
        color: "bg-orange-100 text-orange-600" // Reusing icon for simplicity or suggest unique one
    }
];

export default function TreatmentsGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-4">
                        Our Therapies
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Experience healing therapies tailored to your unique body type (Dosha).
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-gray-50/50"
                        >
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.color}`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold font-primary text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
