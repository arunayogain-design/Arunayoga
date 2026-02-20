"use client";

import { User, Activity, GraduationCap, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const audiences = [
    {
        icon: User,
        title: "New to Yoga",
        text: "Personalized guidance to help you start your yoga journey confidently.",
        cta: "Get Started",
        href: "/contact?subject=demo",
    },
    {
        icon: Activity,
        title: "Advanced Yoga",
        text: "Enhance your practice with advanced techniques including Mudra and Pranayama.",
        cta: "View Programs",
        href: "/classes",
    },
    {
        icon: GraduationCap,
        title: "Yoga Teacher Training",
        text: "Diploma & certification courses to become a skilled and certified yoga instructor.",
        cta: "Explore Courses",
        href: "/teacher-training",
    },
    {
        icon: Globe,
        title: "International Students",
        text: "In-depth intensive programs tailored for overseas students aiming for certification.",
        cta: "Learn More",
        href: "/teacher-training",
    },
    {
        icon: Heart,
        title: "Holistic Treatments",
        text: "Ayurvedic & natural therapies for stress detoxification, and healing.",
        cta: "View Treatments",
        href: "/wellness",
    },
];

export default function TargetAudience() {
    return (
        <section className="relative pt-24 pb-32 bg-[#FAFAFA] overflow-hidden">

            {/* Subtle Decorative Leaf/Blob */}
            <div className="absolute -left-32 top-32 w-96 h-96 bg-red-100/40 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute -right-32 bottom-20 w-80 h-80 bg-orange-100/40 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-primary text-gray-600 mb-5 tracking-tight"
                    >
                        Who We Serve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-3xl mx-auto text-[17px] font-light leading-relaxed"
                    >
                        Tailored programs for beginners, advanced yogis, aspiring teachers, international students and those seeking holistic wellness.
                    </motion.p>
                </div>

                {/* Responsive Grid/Scroll */}
                <div className="flex overflow-x-auto pb-12 -mx-4 px-4 space-x-6 lg:grid lg:grid-cols-5 lg:gap-6 lg:space-x-0 font-sans scrollbar-hide">
                    {audiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex-shrink-0 w-[280px] lg:w-auto bg-white rounded-[24px] p-7 border border-red-50/30 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,0,0,0.06)] hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-[#FFF5F5] group-hover:bg-[#FFEBEB] transition-colors flex items-center justify-center mb-6 text-primary shadow-sm duration-300">
                                <item.icon className="w-9 h-9 stroke-[1.5]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">{item.title}</h3>
                            <p className="text-gray-500 mb-8 flex-grow text-[14px] leading-relaxed px-1 font-light">
                                {item.text}
                            </p>
                            <Link href={item.href} className="w-full mt-auto">
                                <Button size="sm" className="w-full bg-primary hover:bg-[#E74C3C] text-white rounded-xl py-[22px] shadow-[0_4px_14px_rgba(255,0,0,0.2)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.3)] hover:-translate-y-[1px] text-[15px] font-semibold transition-all duration-300">
                                    {item.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
