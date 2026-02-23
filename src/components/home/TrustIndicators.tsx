"use client";

import { Trophy, Users, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        icon: Trophy,
        value: "35+",
        label: "Years of Excellence",
    },
    {
        icon: Users,
        value: "35000+",
        label: "Teachers Certified",
    },
    {
        icon: Globe,
        value: "13+",
        label: "Countries Represented",
    },
    {
        icon: Heart,
        value: "15,000+",
        label: "Lives Transformed",
    },
];

export default function TrustIndicators() {
    return (
        <section className="py-16 bg-brand-light-blue/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-primary text-text">Our Impact</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <stat.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2 font-primary">{stat.value}</h3>
                            <p className="text-text font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
