"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Wind, Brain, Moon, Hand, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

const components = [
    { 
        icon: Activity, 
        title: "Asana", 
        desc: "Physical postures to build strength, flexibility, and balance.", 
        subtitle: "Physical Practice",
        detailedDesc: "Asana practice forms the foundation of physical yoga, systematically developing strength, flexibility, and body awareness through various postures that work on specific muscle groups and energy channels.",
        images: ["/Classes/Asana Practice - 1.png", "/Classes/Asana Practice - 2.png", "/Classes/Asana Practice - 3.png", "/Classes/Asana Practice - 4.png", "/Classes/Asana Practice - 5.png", "/Classes/Asana Practice - 6.png"]
    },
    { 
        icon: Wind, 
        title: "Pranayama", 
        desc: "Breathing techniques to control energy and calm the mind.", 
        subtitle: "Breath Control",
        detailedDesc: "Pranayama is the science of breath control that regulates prana (life force). Through various breathing techniques, we purify energy channels, balance the nervous system, and prepare for meditation.",
        images: ["/Classes/Pranayama - 1.png", "/Classes/Pranayama - 2.png", "/Classes/Pranayama - 3.png", "/Classes/Pranayama - 4.png", "/Classes/Pranayama - 5.png", "/Classes/Pranayama - 6.png"]
    },
    { 
        icon: Brain, 
        title: "Dhyan", 
        desc: "Meditation practices to cultivate mindfulness and inner peace.", 
        subtitle: "Meditation",
        detailedDesc: "Dhyan (Meditation) trains the mind to achieve clarity, peace, and self-realization. Through concentration and witness awareness, we experience our true nature beyond thoughts and emotions.",
        images: ["/Classes/dhyan.png", "/Classes/Dhyan-1.png"]
    },
    { 
        icon: Moon, 
        title: "Yoga Nidra", 
        desc: "Deep relaxation technique for complete physical and mental rest.", 
        subtitle: "Deep Relaxation",
        detailedDesc: "Yoga Nidra induces complete physical, mental, and emotional relaxation. This 'yogic sleep' state between waking and sleeping allows deep healing - one hour equals four hours of regular sleep.",
        images: ["/Classes/Yoga Nidra - 1.png", "/Classes/Yoga Nidra - 2.png", "/Classes/Yoga Nidra - 3.png", "/Classes/Yoga Nidra - 4.png"]
    },
    { 
        icon: Hand, 
        title: "Mudra", 
        desc: "Hand gestures that channel energy flow in the body.", 
        subtitle: "Energy Seals",
        detailedDesc: "Mudras are sacred hand gestures that direct energy flow within the body. These subtle practices activate specific energy channels and enhance the effects of meditation and pranayama.",
        images: ["/Classes/Asana Practice - 3.png", "/Classes/Pranayama - 8.png"]
    },
    { 
        icon: Sparkles, 
        title: "Mantra", 
        desc: "Sacred sound vibrations to focus the mind and uplift the spirit.", 
        subtitle: "Chanting",
        detailedDesc: "Mantra chanting creates powerful vibrations that purify consciousness and enhance concentration. These ancient sacred sounds connect us to higher states of awareness and spiritual awakening.",
        images: ["/Classes/Japa.png", "/Classes/Ajapa Japa.png", "/Classes/Bala Japa.png", "/Classes/Likitha Japa.png", "/Classes/Akshara Sudhi.png"]
    },
    { 
        icon: Zap, 
        title: "Shat Karma", 
        desc: "Yogic cleansing techniques to purify the body.", 
        subtitle: "Cleansing",
        detailedDesc: "Shat Karma are six powerful cleansing techniques that purify the body's internal systems, remove toxins, balance doshas, and prepare for advanced practices. Regular practice enhances vitality and mental clarity.",
        images: ["/Classes/Neti-shat Karma.png", "/Classes/Dhanti - Shat Karma.png", "/Classes/Nauli - Shat Karma.png", "/Classes/Basti - Shat Karma.png", "/Classes/Kapalabhati - Shat Karma.png", "/Classes/Trataka - Shat Karma.png"]
    },
];

export default function ClassComponents() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageIndices, setImageIndices] = useState<number[]>(components.map(() => 0));

    // Cycle through components every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % components.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Rotate images for active component every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndices((prev) => {
                const newIndices = [...prev];
                newIndices[activeIndex] = (newIndices[activeIndex] + 1) % components[activeIndex].images.length;
                return newIndices;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="py-20 bg-brand-dark-grey text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-primary mb-4">What You Will Learn</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Our holistic curriculum covers all aspects of traditional yoga, ensuring a complete transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {components.map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-xl overflow-hidden cursor-pointer transition-all border-2 ${
                                index === activeIndex
                                    ? "bg-primary border-primary shadow-2xl"
                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                            }`}
                        >
                            {/* Image Section */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${index}-${imageIndices[index]}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={item.images[imageIndices[index]]}
                                            alt={`${item.title} - ${imageIndices[index] + 1}`}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Content Section */}
                            <div className="p-5">
                                <item.icon className={`w-10 h-10 mb-3 ${
                                    index === activeIndex ? "text-white" : "text-primary"
                                }`} />
                                <div className={`text-xs uppercase tracking-wider mb-1 ${
                                    index === activeIndex ? "text-white/80" : "text-gray-400"
                                }`}>{item.subtitle}</div>
                                <h3 className={`text-xl font-bold mb-2 ${
                                    index === activeIndex ? "text-white" : "text-white"
                                }`}>{item.title}</h3>
                                <p className={`text-sm leading-relaxed mb-3 ${
                                    index === activeIndex ? "text-white/90" : "text-gray-300"
                                }`}>{item.desc}</p>
                                
                                {/* Expanded details for active card */}
                                <AnimatePresence>
                                    {index === activeIndex && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/20 pt-3 mt-3">
                                                <p className="text-sm text-white/90 leading-relaxed">
                                                    {item.detailedDesc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-12 flex gap-2 justify-center">
                    {components.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2 rounded-full transition-all ${
                                idx === activeIndex ? "bg-primary w-12" : "bg-white/30 w-2 hover:bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
