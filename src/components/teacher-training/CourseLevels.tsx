"use client";

import { motion } from "framer-motion";
import { Check, Star, Shield, Award } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const courses = [
    {
        title: "Diploma in Yoga",
        subtitle: "200 Hours",
        desc: "Learn Asanas, Mudras, Bandhas, Pranayamas, Shatkriyas, Chanting, Mantras, relaxation techniques, Yoga Nidra, Meditation and traditional yoga techniques.",
        duration: "4 Weeks",
        features: [
            "Teaching Methodology & Alignment",
            "Patanjali Yoga Sutras",
            "Anatomy & Physiology",
            "Teaching Practicum with Feedback"
        ],
        certification: "Arunayoga + RYT200 (Yoga Alliance) + Annamalai University*",
        icon: Star,
        color: "bg-brand-green",
        link: "/teacher-training/diploma-200",
    },
    {
        title: "Advanced Diploma",
        subtitle: "300 Hours",
        desc: "For certified 200-hour teachers ready to deepen their practice. Advanced therapy techniques, anatomy, and Ayurveda fundamentals.",
        duration: "6 Weeks",
        features: [
            "Advanced Anatomy & Physiology",
            "Yoga Therapy Techniques",
            "Ayurveda Fundamentals",
            "Advanced Kriyas & Pranayama"
        ],
        certification: "Arunayoga + RYT300 (Yoga Alliance) + Annamalai University*",
        icon: Shield,
        color: "bg-brand-blue",
        link: "/teacher-training/advanced-300",
    },
    {
        title: "PG Diploma in Yoga",
        subtitle: "500 Hours",
        desc: "The ultimate certification combining 200 and 300-hour curriculums. Become a master teacher with comprehensive knowledge and expertise.",
        duration: "10 Weeks",
        features: [
            "Complete Mastery of Yoga",
            "Research & Thesis Work",
            "Internship Opportunities",
            "Lifestyle & Ethics Management"
        ],
        certification: "Arunayoga + RYT500 (Yoga Alliance) + Annamalai University*",
        icon: Award,
        color: "bg-primary",
        link: "/teacher-training/pg-diploma-500",
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
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-700">
                                            Duration: {course.duration}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6 flex-grow">
                                    {course.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <Check className={`w-5 h-5 ${course.color.replace('bg-', 'text-')} flex-shrink-0`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-xs text-gray-500 mb-4 text-center">
                                    <strong>Certification:</strong> {course.certification}
                                </p>

                                <Link href={course.link} className="w-full">
                                    <Button className={`w-full ${course.color} hover:opacity-90 border-0`}>
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
