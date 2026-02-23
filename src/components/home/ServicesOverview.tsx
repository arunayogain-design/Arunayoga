"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const services = [
    {
        id: "classes",
        title: "Daily Yoga Classes",
        description: "Our daily classes include Shat karma (cleansing techniques), Asana (physical postures), Pranayama (breathing practices), Yoga Nidra (deep relaxation), Dhyan (meditation) and Mantra chanting.",
        benefits: ["Morning sessions: 6 AM - 11 AM", "Evening sessions: 4 PM - 8 PM", "All levels welcome", "Traditional yoga techniques"],
        image: "/assets/classes-1.jpg",
        link: "/classes",
        cta: "Explore Classes",
    },
    {
        id: "training",
        title: "Yoga Teacher Training",
        description: "Become a <strong>certified yoga teacher</strong> with our <strong>internationally recognized programs</strong>. Learn Asanas, Mudras, Bandhas, Pranayamas, Shatkriyas, Chanting, Mantras, and <strong>traditional yoga techniques</strong>.",
        benefits: ["Diploma in Yoga (200 Hours)", "Advanced Diploma (300 Hours)", "PG Diploma in Yoga (500 Hours)", "Yoga Alliance & University Certified"],
        image: "/assets/community-1.jpeg",
        link: "/teacher-training",
        cta: "View Programs",
    },
    {
        id: "wellness",
        title: "Ayurvedic Therapy",
        description: "Experience <strong>authentic Ayurvedic therapies</strong> including Shirodhara, Kati Vasti, Navarakidi, and various healing massages for <strong>complete body-mind rejuvenation</strong>.",
        benefits: ["Ayurvedic Detox programs", "Stress-relief therapies", "Pain management therapies", "Personalized wellness plans"],
        image: "/assets/ayurvedic-treatment-1.jpg",
        link: "/wellness",
        cta: "Discover Therapy",
    },
];

export default function ServicesOverview() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-primary mb-4">
                        Our Offerings
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Comprehensive programs designed to support your journey towards holistic health and spiritual growth.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === service.id
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-white text-text hover:bg-gray-100"
                                }`}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {services.map((service) => (
                            activeTab === service.id && (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
                                >
                                    <div className="md:w-1/2 relative h-64 md:h-auto">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold font-primary text-primary mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-text mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
                                        <ul className="space-y-3 mb-8">
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <div className="p-1 bg-brand-light-blue/20 rounded-full">
                                                        <Check className="w-4 h-4 text-brand-blue" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={service.link}>
                                            <Button className="group">
                                                {service.cta}
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
