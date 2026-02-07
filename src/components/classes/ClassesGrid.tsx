"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const classes = [
    {
        title: "Hatha Yoga",
        level: "Beginner / All Levels",
        description: "Traditional practice focusing on physical postures and breath control to align body and mind. Perfect for building a strong foundation.",
        benefits: ["Improves flexibility", "Builds core strength", "Enhances balance"],
        color: "bg-brand-green",
    },
    {
        title: "Ashtanga Yoga",
        level: "Intermediate / Advanced",
        description: "Dynamic, synchronised flow of breath and movement. A rigorous practice that builds intense heat and detoxifies the body.",
        benefits: ["Cardiovascular health", "Muscle endurance", "Mental focus"],
        color: "bg-brand-blue",
    },
    {
        title: "Vinyasa Flow",
        level: "All Levels",
        description: "Fluid, creative sequences where poses run together smoothly like a dance. Focuses on breath-synchronized movement.",
        benefits: ["Fluid mobility", "Creativity", "Stress release"],
        color: "bg-accent",
    },
    {
        title: "Therapeutic Yoga",
        level: "All Levels (Gentle)",
        description: "Specialized practice adapted for individuals with specific health conditions or injuries. Focuses on healing and rehabilitation.",
        benefits: ["Pain relief", "Injury recovery", "Joint health"],
        color: "bg-primary",
    },
    {
        title: "Prenatal Yoga",
        level: "Expecting Mothers",
        description: "Gentle yoga designed to support women through pregnancy. Prepares the body for labor and promotes relaxation.",
        benefits: ["Reduces back pain", "Prepares for labor", "Connects with baby"],
        color: "bg-brand-dark-grey",
    },
    {
        title: "Kriya Yoga",
        level: "Intermediate",
        description: "Ancient technique of energy control (pranayama) and meditation to accelerate spiritual evolution.",
        benefits: ["Deep meditation", "Energy balance", "Spiritual growth"],
        color: "bg-secondary",
    }
];

export default function ClassesGrid() {
    return (
        <section id="daily-classes" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-secondary mb-12 text-center">
                    Our Daily Classes
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map((cls, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 bg-white flex flex-col h-full"
                        >
                            <div className={`h-2 ${cls.color}`} />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold font-primary text-gray-800 group-hover:text-primary transition-colors">
                                        {cls.title}
                                    </h3>
                                    <span className={`text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium`}>
                                        {cls.level}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                    {cls.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-sm font-semibold text-gray-700 block mb-2">Key Benefits:</span>
                                    <ul className="space-y-1">
                                        {cls.benefits.map((benefit, i) => (
                                            <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${cls.color}`} />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <Button size="sm" variant="outline" className="w-full">
                                        View Schedule
                                    </Button>
                                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                                        Book Demo
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
