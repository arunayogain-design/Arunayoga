"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { X, ArrowLeft, Check } from "lucide-react";
import Image from "next/image";

const classes = [
    {
        title: "Shat Karma",
        level: "All Levels",
        description: "Practice and techniques of cleansing techniques (Shat karma) to purify the body and prepare for deeper yoga practices.",
        benefits: ["Body purification", "Toxin removal", "Prepares for asana"],
        detailedDescription: "Shat Karma are six powerful cleansing techniques that purify the body's internal systems. These practices remove toxins, balance the doshas, and prepare the body for advanced yoga practices. Regular practice enhances vitality, improves digestion, and creates mental clarity.",
        techniques: ["Neti (Nasal cleansing)", "Dhauti (Digestive tract cleansing)", "Nauli (Abdominal massage)", "Basti (Colon cleansing)", "Kapalabhati (Skull shining breath)", "Trataka (Concentrated gazing)"],
        color: "bg-brand-green",
        imagePrefix: "Shat Karma",
    },
    {
        title: "Asana Practice",
        level: "All Levels",
        description: "Practice and techniques of physical postures (Asana) to build strength, flexibility, and balance in body and mind.",
        benefits: ["Physical strength", "Flexibility", "Body alignment"],
        detailedDescription: "Asana practice is the foundation of physical yoga. Through systematic practice of postures, we develop strength, flexibility, and body awareness. Each asana works on specific muscle groups, organs, and energy channels, creating harmony between body and mind.",
        techniques: ["Standing postures for strength", "Forward bends for flexibility", "Backbends for vitality", "Twists for detoxification", "Inversions for rejuvenation", "Balancing poses for focus"],
        color: "bg-brand-blue",
        imagePrefix: "Asana Practice",
    },
    {
        title: "Pranayama",
        level: "All Levels",
        description: "Practice and techniques of breathing practices (Pranayama) to control life force energy and calm the mind.",
        benefits: ["Breath control", "Energy balance", "Mental clarity"],
        detailedDescription: "Pranayama is the science of breath control that regulates prana (life force energy). Through various breathing techniques, we purify the nadis (energy channels), balance the nervous system, and prepare the mind for meditation. Regular practice enhances lung capacity and mental focus.",
        techniques: ["Nadi Shodhana (Alternate nostril)", "Bhastrika (Bellows breath)", "Ujjayi (Victorious breath)", "Bhramari (Bee breath)", "Sheetali (Cooling breath)", "Surya Bhedana (Sun piercing)"],
        color: "bg-accent",
        imagePrefix: "Pranayama",
    },
    {
        title: "Yoga Nidra",
        level: "All Levels",
        description: "Practice of deep relaxation (Yoga Nidra) - a powerful technique for complete physical, mental and emotional relaxation.",
        benefits: ["Deep relaxation", "Stress relief", "Better sleep"],
        detailedDescription: "Yoga Nidra is a systematic method of inducing complete physical, mental, and emotional relaxation. Often called 'yogic sleep', it's a state between waking and sleeping where deep healing occurs. One hour of Yoga Nidra is equivalent to four hours of regular sleep.",
        techniques: ["Body scan relaxation", "Breath awareness", "Sankalpa (Resolution)", "Visualization practices", "Chakra awareness", "Integration and awakening"],
        color: "bg-primary",
        imagePrefix: "Yoga Nidra",
    },
    {
        title: "Dhyan (Meditation)",
        level: "All Levels",
        description: "Practice of meditation (Dhyan) to develop concentration, awareness and inner peace through traditional techniques.",
        benefits: ["Mental focus", "Inner peace", "Self-awareness"],
        detailedDescription: "Dhyan (Meditation) is the practice of training the mind to achieve a state of consciousness that brings clarity, peace, and self-realization. Through various meditation techniques, we develop concentration, witness awareness, and ultimately experience our true nature.",
        techniques: ["Breath meditation", "Mantra meditation", "Trataka (Candle gazing)", "Chakra meditation", "Vipassana (Insight meditation)", "Loving-kindness meditation"],
        color: "bg-brand-dark-grey",
        imagePrefix: "Dhyan",
    },
    {
        title: "Mantra Chanting",
        level: "All Levels",
        description: "Traditional mantra chanting practices to create positive vibrations, enhance concentration and spiritual connection.",
        benefits: ["Spiritual growth", "Positive energy", "Mind purification"],
        detailedDescription: "Mantra chanting is the repetition of sacred sounds that create powerful vibrations in the body and mind. These ancient syllables purify consciousness, enhance concentration, and connect us to higher states of awareness. Regular practice brings peace, clarity, and spiritual awakening.",
        techniques: ["Japa (Repetitive chanting)", "Ajapa Japa (Spontaneous repetition)", "Bala Japa (Loud chanting)", "Likitha Japa (Written mantra)", "Akshara Sudhi (Letter purification)", "Group chanting"],
        color: "bg-secondary",
        imagePrefix: "Japa",
    }
];

export default function ClassesGrid() {
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [expandedClass, setExpandedClass] = useState<typeof classes[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [classImages, setClassImages] = useState<string[]>([]);

    // Check for recommended class from Find Your Class search
    useEffect(() => {
        const recommendedClass = sessionStorage.getItem("recommendedClass");
        if (recommendedClass) {
            const classToExpand = classes.find(c => c.title === recommendedClass);
            if (classToExpand) {
                setExpandedClass(classToExpand);
                // Clear the recommendation after using it
                sessionStorage.removeItem("recommendedClass");
            }
        }
    }, []);

    // Get images for the expanded class
    useEffect(() => {
        if (expandedClass) {
            const images: string[] = [];
            // Map class to image patterns based on public/Classes folder
            if (expandedClass.imagePrefix === "Shat Karma") {
                images.push(
                    "/Classes/Neti-shat Karma.png",
                    "/Classes/Dhanti - Shat Karma.png",
                    "/Classes/Nauli - Shat Karma.png",
                    "/Classes/Basti - Shat Karma.png",
                    "/Classes/Kapalabhati - Shat Karma.png",
                    "/Classes/Trataka - Shat Karma.png"
                );
            } else if (expandedClass.imagePrefix === "Asana Practice") {
                for (let i = 1; i <= 6; i++) {
                    images.push(`/Classes/Asana Practice - ${i}.png`);
                }
            } else if (expandedClass.imagePrefix === "Pranayama") {
                [1, 2, 3, 4, 5, 6, 8, 9, 10].forEach(i => {
                    images.push(`/Classes/Pranayama - ${i}.png`);
                });
            } else if (expandedClass.imagePrefix === "Yoga Nidra") {
                for (let i = 1; i <= 4; i++) {
                    images.push(`/Classes/Yoga Nidra - ${i}.png`);
                }
            } else if (expandedClass.imagePrefix === "Dhyan") {
                images.push("/Classes/dhyan.png", "/Classes/Dhyan-1.png");
            } else if (expandedClass.imagePrefix === "Japa") {
                images.push(
                    "/Classes/Japa.png",
                    "/Classes/Ajapa Japa.png",
                    "/Classes/Bala Japa.png",
                    "/Classes/Likitha Japa.png",
                    "/Classes/Akshara Sudhi.png"
                );
            }
            setClassImages(images);
            setCurrentImageIndex(0);
        }
    }, [expandedClass]);

    // Auto-rotate images
    useEffect(() => {
        if (expandedClass && classImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % classImages.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [expandedClass, classImages]);

    const morningSchedule = [
        "6:00 AM - 7:00 AM",
        "7:00 AM - 8:00 AM",
        "8:00 AM - 9:00 AM",
        "9:00 AM - 10:00 AM",
        "10:00 AM - 11:00 AM",
    ];

    const eveningSchedule = [
        "4:00 PM - 5:00 PM",
        "5:00 PM - 6:00 PM",
        "6:00 PM - 7:00 PM",
        "7:00 PM - 8:00 PM",
    ];

    return (
        <>
            <section id="daily-classes" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-12 text-center">
                        Our Daily Classes
                    </h2>

                    <AnimatePresence mode="wait">
                        {expandedClass ? (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid lg:grid-cols-12 gap-8"
                            >
                                {/* Left side - Class list */}
                                <div className="lg:col-span-4 space-y-4">
                                    <Button
                                        onClick={() => setExpandedClass(null)}
                                        variant="outline"
                                        className="mb-4 w-full"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to All Classes
                                    </Button>
                                    {classes.map((cls) => (
                                        <motion.div
                                            key={cls.title}
                                            onClick={() => setExpandedClass(cls)}
                                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                expandedClass.title === cls.title
                                                    ? `${cls.color} border-transparent text-white`
                                                    : "border-gray-200 hover:border-gray-300 bg-white"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-bold text-lg">{cls.title}</h3>
                                                    <p className={`text-sm ${
                                                        expandedClass.title === cls.title ? "text-white/80" : "text-gray-500"
                                                    }`}>{cls.level}</p>
                                                </div>
                                                {expandedClass.title === cls.title && (
                                                    <Check className="w-5 h-5" />
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right side - Class details with rotating images */}
                                <div className="lg:col-span-8">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                        <div className={`h-2 ${expandedClass.color}`} />
                                        
                                        {/* Rotating Images */}
                                        {classImages.length > 0 && (
                                            <div className="relative h-80 bg-gray-100 overflow-hidden">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentImageIndex}
                                                        initial={{ opacity: 0, scale: 1.1 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.9 }}
                                                        transition={{ duration: 0.7 }}
                                                        className="absolute inset-0"
                                                    >
                                                        <Image
                                                            src={classImages[currentImageIndex]}
                                                            alt={`${expandedClass.title} - ${currentImageIndex + 1}`}
                                                            fill
                                                            className="object-contain"
                                                            unoptimized
                                                        />
                                                    </motion.div>
                                                </AnimatePresence>
                                                
                                                {/* Image indicators */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                    {classImages.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentImageIndex(idx)}
                                                            className={`w-2 h-2 rounded-full transition-all ${
                                                                idx === currentImageIndex
                                                                    ? "bg-white w-8"
                                                                    : "bg-white/50 hover:bg-white/75"
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Class Details */}
                                        <div className="p-8">
                                            <div className="flex items-start justify-between mb-6">
                                                <div>
                                                    <h2 className="text-3xl font-bold font-primary text-gray-900 mb-2">
                                                        {expandedClass.title}
                                                    </h2>
                                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                                        {expandedClass.level}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3">About This Practice</h3>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {expandedClass.detailedDescription}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Benefits</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {expandedClass.benefits.map((benefit, i) => (
                                                            <span
                                                                key={i}
                                                                className={`px-4 py-2 ${expandedClass.color} text-white rounded-full text-sm font-medium`}
                                                            >
                                                                {benefit}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Techniques Covered</h3>
                                                    <div className="grid md:grid-cols-2 gap-3">
                                                        {expandedClass.techniques.map((technique, i) => (
                                                            <div key={i} className="flex items-start gap-3">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${expandedClass.color} mt-2`} />
                                                                <span className="text-gray-700 text-sm">{technique}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 pt-4">
                                                    <Button
                                                        onClick={() => setSelectedClass(expandedClass.title)}
                                                        variant="outline"
                                                        className="flex-1"
                                                    >
                                                        View Schedule
                                                    </Button>
                                                    <Link href="/contact?subject=demo" className="flex-1">
                                                        <Button className="w-full bg-primary hover:bg-primary/90">
                                                            Book Demo Class
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
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

                                    <div className="flex flex-col gap-2 mt-auto">
                                        <Button
                                            size="sm"
                                            className={`w-full ${cls.color} hover:opacity-90`}
                                            onClick={() => setExpandedClass(cls)}
                                        >
                                            View Details
                                        </Button>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1"
                                                onClick={() => setSelectedClass(cls.title)}
                                            >
                                                Schedule
                                            </Button>
                                            <Link href="/contact?subject=demo" className="flex-1">
                                                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                                                    Book Demo
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {selectedClass ? (
                <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <div>
                                <h3 className="text-xl font-bold font-primary text-primary">{selectedClass} - Class Schedule</h3>
                                <p className="text-sm text-gray-500">Monday to Saturday | Sunday off</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setSelectedClass(null)}
                                className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                                aria-label="Close schedule popup"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">
                            <div className="rounded-xl border border-gray-200 overflow-hidden">
                                <div className="bg-primary text-white px-4 py-3 text-sm font-semibold">Morning Batches</div>
                                <ul className="divide-y divide-gray-100">
                                    {morningSchedule.map((slot) => (
                                        <li key={slot} className="px-4 py-2.5 text-sm text-gray-700">{slot}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-xl border border-gray-200 overflow-hidden">
                                <div className="bg-secondary text-white px-4 py-3 text-sm font-semibold">Evening Batches</div>
                                <ul className="divide-y divide-gray-100">
                                    {eveningSchedule.map((slot) => (
                                        <li key={slot} className="px-4 py-2.5 text-sm text-gray-700">{slot}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="px-6 pb-6 text-sm text-gray-600">
                            For consultation, trial class, or updated slot availability, call +91 9440698003 or contact us.
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
