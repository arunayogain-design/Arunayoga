"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Shield, Star } from "lucide-react";

const certifications = [
    {
        icon: GraduationCap,
        title: "University Affiliated",
        description: "Annamalai University certified programs",
    },
    {
        icon: Shield,
        title: "Government Recognized",
        description: "Ministry of AYUSH approved",
    },
    {
        icon: Award,
        title: "International Standards",
        description: "Yoga Alliance certified courses",
    },
    {
        icon: Star,
        title: "Award Winning",
        description: "Multiple national & state awards",
    },
];

export default function Certifications() {
    return (
        <section className="relative pt-24 pb-32 bg-white overflow-hidden">
            {/* Subtle Decorative Elements */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-[#FFF5F5] rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block opacity-80"
                    >
                        Trusted & Certified
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold font-primary text-gray-700 mb-4 tracking-tight"
                    >
                        Internationally Recognized
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-20">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-red-50/40 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(255,0,0,0.06)] hover:-translate-y-2 text-center transition-all duration-300 flex flex-col items-center min-h-[240px]"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#FFF5F5] group-hover:bg-[#FFEBEB] rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300">
                                <cert.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="font-bold text-[18px] text-gray-800 mb-3 tracking-wide">{cert.title}</h3>
                            <p className="text-[14px] text-gray-500 px-2 leading-relaxed font-light">{cert.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* University Affiliation Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FAFAFA] rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 md:p-14 border border-gray-100/50 flex flex-col md:flex-row items-center gap-10 lg:gap-16 max-w-5xl mx-auto hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500"
                >
                    <div className="relative w-56 h-56 flex-shrink-0 drop-shadow-sm bg-white rounded-full p-4 border border-gray-50">
                        <Image
                            src="/assets/affiliation.jpg"
                            alt="Annamalai University"
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl font-bold font-primary text-gray-800 mb-5 tracking-tight">
                            Annamalai University Affiliation
                        </h3>
                        <p className="text-gray-500 text-[16px] leading-relaxed mb-8 font-light max-w-xl mx-auto md:mx-0">
                            Our yoga teacher training programs are affiliated with Annamalai University, one of India&apos;s premier educational institutions. This ensures our certifications meet the highest academic and professional standards.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <span className="px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-semibold border border-red-50 shadow-sm">
                                200 Hour YTT
                            </span>
                            <span className="px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-semibold border border-red-50 shadow-sm">
                                500 Hour YTT
                            </span>
                            <span className="px-5 py-2.5 bg-white text-primary rounded-xl text-sm font-semibold border border-red-50 shadow-sm">
                                Yoga Therapy
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
