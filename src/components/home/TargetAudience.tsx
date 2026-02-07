"use client";

import { User, Activity, GraduationCap, Globe, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const audiences = [
    {
        icon: User,
        title: "New to Yoga",
        text: "Personalized assessment and individual path creation",
        cta: "Book Demo Class",
    },
    {
        icon: Activity,
        title: "Advanced Practitioners",
        text: "Master Hatha, Ashtanga, Vinyasa, Kriya, and more",
        cta: "View Classes",
    },
    {
        icon: GraduationCap,
        title: "Aspiring Teachers",
        text: "Internationally recognized 200/300/500-hour programs",
        cta: "Teacher Training",
    },
    {
        icon: Globe,
        title: "International Students",
        text: "One-month intensive programs with global recognition",
        cta: "Learn More",
    },
    {
        icon: Heart,
        title: "Health Seekers",
        text: "Ayurvedic treatments for stress, pain, and chronic conditions",
        cta: "View Treatments",
    },
];

export default function TargetAudience() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-4">
                        Who We Serve
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Whether you are beginning your journey or seeking mastery, we have a path for you.
                    </p>
                </div>

                {/* Responsive Grid/Scroll */}
                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 lg:grid lg:grid-cols-5 lg:gap-6 lg:space-x-0 font-sans scrollbar-hide">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-80 lg:w-auto bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-primary">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                                {item.text}
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                                {item.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
