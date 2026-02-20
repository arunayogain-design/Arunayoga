"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Heart, Globe } from "lucide-react";
import { Button } from "../ui/button";
import classesImage from "@/assets/classes-1.jpg";
import campusImage from "@/assets/IMG_0872.jpg";
import trainingImage from "@/assets/community-1.jpeg";

export default function CommunityShowcase() {
    return (
        <section className="relative pt-24 pb-32 bg-[#FAFAFA] overflow-hidden">

            {/* Subtle Decorative Gradient */}
            <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Image Grid */}
                <div className="grid md:grid-cols-3 gap-6 xl:gap-8 mb-24 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group isolate hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500"
                    >
                        <Image
                            src={classesImage}
                            alt="Yoga class in session"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Daily Classes</h3>
                            <p className="text-gray-200 text-[15px] mb-6 font-light">Expert-led sessions for all levels</p>
                            <Button className="w-full bg-white text-primary border border-transparent hover:border-red-100 hover:bg-[#FFF5F5] hover:text-[#E74C3C] rounded-xl h-[50px] font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.15)] transition-all duration-300 text-[15px] hover:-translate-y-[1px]">
                                View Schedule
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative h-[400px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group isolate hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500"
                    >
                        <Image
                            src={campusImage}
                            alt="Outdoor yoga session"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Outdoor Sessions</h3>
                            <p className="text-gray-200 text-[15px] mb-6 font-light">Connect with nature through yoga</p>
                            <Button className="w-full bg-white text-primary border border-transparent hover:border-red-100 hover:bg-[#FFF5F5] hover:text-[#E74C3C] rounded-xl h-[50px] font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.15)] transition-all duration-300 text-[15px] hover:-translate-y-[1px]">
                                Join Session
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group isolate hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500"
                    >
                        <Image
                            src={trainingImage}
                            alt="Teacher training program"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Teacher Training</h3>
                            <p className="text-gray-200 text-[15px] mb-6 font-light">Internationally certified programs</p>
                            <Button className="w-full bg-white text-primary border border-transparent hover:border-red-100 hover:bg-[#FFF5F5] hover:text-[#E74C3C] rounded-xl h-[50px] font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,0,0,0.15)] transition-all duration-300 text-[15px] hover:-translate-y-[1px]">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats / Impact Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold font-primary text-gray-700 mb-5 tracking-tight"
                    >
                        Our Impact
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 max-w-2xl mx-auto text-[17px] font-light leading-relaxed"
                    >
                        Empowering lives through yoga and wellness.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    <div className="group bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-red-50/40 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(255,0,0,0.06)] text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-[#FFF5F5] group-hover:bg-[#FFEBEB] rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300">
                            <Users className="w-9 h-9 stroke-[1.5]" />
                        </div>
                        <div className="text-[42px] font-bold text-primary mb-2 font-primary">2000+</div>
                        <div className="text-gray-500 font-medium text-[16px] tracking-wide">Certified Teachers</div>
                    </div>

                    <div className="group bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-red-50/40 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(255,0,0,0.06)] text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-[#FFF5F5] group-hover:bg-[#FFEBEB] rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300">
                            <Globe className="w-9 h-9 stroke-[1.5]" />
                        </div>
                        <div className="text-[42px] font-bold text-primary mb-2 font-primary">13+</div>
                        <div className="text-gray-500 font-medium text-[16px] tracking-wide">Countries Reached</div>
                    </div>

                    <div className="group bg-white rounded-[24px] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-red-50/40 hover:border-red-100 hover:shadow-[0_20px_40px_rgba(255,0,0,0.06)] text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-[#FFF5F5] group-hover:bg-[#FFEBEB] rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm transition-all duration-300">
                            <Heart className="w-9 h-9 stroke-[1.5]" />
                        </div>
                        <div className="text-[42px] font-bold text-primary mb-2 font-primary">10,000+</div>
                        <div className="text-gray-500 font-medium text-[16px] tracking-wide">Lives Transformed</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
