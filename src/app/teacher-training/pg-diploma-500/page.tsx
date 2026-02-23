"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Award, Users, Clock, MapPin, BookOpen } from "lucide-react";
import CollageBackground from "@/components/teacher-training/CollageBackground";

const curriculum = [
    "Complete Mastery of Yoga Asanas",
    "Advanced Pranayama & Kriyas",
    "Research & Thesis Work",
    "Internship Opportunities",
    "Lifestyle & Ethics Management",
    "Advanced Yoga Philosophy",
    "Yoga Therapy Specialization",
    "Ayurveda Integration",
    "Teaching Methodology Mastery",
    "Business & Studio Management",
    "Mentorship Program",
    "Continuing Education Planning"
];

const benefits = [
    "Comprehensive 200 + 300 hour curriculum combined",
    "Become a master teacher with complete knowledge",
    "Research and thesis component for academic depth",
    "Internship opportunities for practical experience",
    "Lifetime mentorship from Yogini Arunadevi",
    "International recognition and career opportunities"
];

export default function PGDiploma500Page() {
    return (
        <>
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
                    <CollageBackground 
                        images={[
                            "/Classes/Pranayama - 10.png",
                            "/Classes/Asana Practice - 2.png"
                        ]}
                        opacity={0.3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                                Master Level Certification
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6">
                                PG Diploma in Yoga
                                <span className="block text-accent">500 Hours</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                The ultimate certification combining 200 and 300-hour curriculums.
                                Become a master teacher with comprehensive knowledge and expertise.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Info */}
                <section className="py-12 bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Duration</p>
                                    <p className="font-bold text-gray-900">10 Weeks</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-bold text-gray-900">Hyderabad, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Includes</p>
                                    <p className="font-bold text-gray-900">Research & Thesis</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Certification</p>
                                    <p className="font-bold text-gray-900">RYT500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why 500 Hour */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-4">Why Choose 500 Hours?</h2>
                            <p className="text-center text-gray-600 mb-12">
                                The most comprehensive yoga teacher training available
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {benefits.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
                                    >
                                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-5 h-5 text-accent" />
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold font-primary text-center mb-4">Master Level Curriculum</h2>
                            <p className="text-center text-gray-600 mb-12">
                                Complete mastery of all yoga disciplines
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {curriculum.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                                    >
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold font-primary mb-8">Certification</h2>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <p className="text-lg text-gray-700 mb-6">
                                    Upon successful completion, you will receive certification from:
                                </p>
                                <div className="flex flex-wrap justify-center items-center gap-12">
                                    <div className="relative w-40 h-32">
                                        <Image
                                            src="/assets/logo.png"
                                            alt="Arunayoga"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="relative w-40 h-32">
                                        <Image
                                            src="/assets/download.png"
                                            alt="Yoga Alliance USA"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="relative w-40 h-32">
                                        <Image
                                            src="/assets/affiliation.jpg"
                                            alt="Annamalai University"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-brand-dark-grey text-white border-t-2 border-black">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-primary mb-4">Become a Master Yoga Teacher</h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contact us for upcoming batch dates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact?subject=pg-diploma-500">
                                <Button size="lg" className="bg-white text-accent hover:bg-gray-100">
                                    Contact for Details
                                </Button>
                            </Link>
                            <Link href="/teacher-training">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                                    View All Courses
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
