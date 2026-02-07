"use client";

import { motion } from "framer-motion";
import { Check, Star, Shield, Award } from "lucide-react";
import { Button } from "../ui/button";

const courses = [
    {
        title: "200 Hour TTC",
        subtitle: "Foundation Course",
        desc: "Perfect for beginners and those looking to deepen their personal practice. Learn the fundamentals of Hatha & Ashtanga Yoga.",
        duration: "4 Weeks / 1 Month",
        features: ["Yoga Philosophy & History", "Asana Alignment & Adjustment", "Pranayama & Meditation", "Teaching Methodology"],
        icon: Star,
        color: "bg-brand-green",
        button: "brand-green"
    },
    {
        title: "300 Hour TTC",
        subtitle: "Advanced Course",
        desc: "For certified 200-hour teachers ready to take their skills to the next level. Dive deeper into therapy, advanced asanas, and anatomy.",
        duration: "6 Weeks / 1.5 Months",
        features: ["Advanced Anatomy & Physiology", "Yoga Therapy Techniques", "Ayurveda Fundamentals", "Advanced Kriyas"],
        icon: Shield,
        color: "bg-brand-blue",
        button: "brand-blue"
    },
    {
        title: "500 Hour TTC",
        subtitle: "Master Level",
        desc: "The ultimate certification combining 200 and 300-hour curriculums. Become a master teacher with comprehensive knowledge.",
        duration: "10 Weeks / 2.5 Months",
        features: ["Complete Mastery of Yoga", "Research & Thesis", "Internship Opportunities", "Lifestyle Management"],
        icon: Award,
        color: "bg-primary",
        button: "primary"
    }
];

export default function CourseLevels() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-4">
                        Our Certification Levels
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Internationally recognized by Yoga Alliance USA and affiliated with Annamalai University.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-all flex flex-col"
                        >
                            <div className={`p-6 ${course.color} text-white text-center`}>
                                <course.icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                                <h3 className="text-2xl font-bold mb-1">{course.title}</h3>
                                <span className="text-white/80 font-medium text-sm tracking-widest uppercase">{course.subtitle}</span>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-6 text-center">
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.desc}</p>
                                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-700">
                                        Duration: {course.duration}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {course.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check className={`w-5 h-5 ${course.color.replace('bg-', 'text-')} flex-shrink-0`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button className={`w-full ${course.color} hover:opacity-90 border-0`}>
                                    Course Details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
