"use client";

import { motion } from "framer-motion";
import { Activity, Wind, Brain, Moon, Hand, Zap, Sparkles } from "lucide-react";

const components = [
    { icon: Activity, title: "Asana", desc: "Physical postures to build strength, flexibility, and balance.", subtitle: "Physical Practice" },
    { icon: Wind, title: "Pranayama", desc: "Breathing techniques to control energy and calm the mind.", subtitle: "Breath Control" },
    { icon: Brain, title: "Dhyan", desc: "Meditation practices to cultivate mindfulness and inner peace.", subtitle: "Meditation" },
    { icon: Moon, title: "Yoga Nidra", desc: "Deep relaxation technique for complete physical and mental rest.", subtitle: "Deep Relaxation" },
    { icon: Hand, title: "Mudra", desc: "Hand gestures that channel energy flow in the body.", subtitle: "Energy Seals" },
    { icon: Sparkles, title: "Mantra", desc: "Sacred sound vibrations to focus the mind and uplift the spirit.", subtitle: "Chanting" },
    { icon: Zap, title: "Shat Karma", desc: "Yogic cleansing techniques to purify the body.", subtitle: "Cleansing" },
];

export default function ClassComponents() {
    return (
        <section className="py-20 bg-brand-dark-grey text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-primary mb-4">What You Will Learn</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Our holistic curriculum covers all aspects of traditional yoga, ensuring a complete transformation.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {components.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <item.icon className="w-10 h-10 text-primary mb-4" />
                            <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{item.subtitle}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
