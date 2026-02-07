"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "The teacher training program at Arunayoga was transformative. Yogini Arunadevi's wisdom and motherly care guided me to a depth of practice I never imagined possible.",
        name: "Sarah Jenkins",
        location: "Yoga Teacher, Australia",
        image: "/student-1.svg",
        rating: 5,
    },
    {
        id: 2,
        text: "I came to Arunayoga with chronic back pain. After 3 weeks of therapeutic yoga and Ayurvedic treatments, I feel like a new person. Forever grateful.",
        name: "Rajesh Kumar",
        location: "IT Professional, Hyderabad",
        image: "/student-2.svg",
        rating: 5,
    },
    {
        id: 3,
        text: "Studying here felt like coming home. The authentic teachings, the beautiful environment, and the supportive community made my 300-hour training unforgettable.",
        name: "Elena Rossi",
        location: "Studio Owner, Italy",
        image: "/student-3.svg",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Quote className="w-12 h-12 mx-auto text-accent mb-6 opacity-80" />
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary mb-2">
                        Stories of Transformation
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 italic">
                                &quot;{testimonials[currentIndex].text}&quot;
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-accent mb-4">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-bold font-primary">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-300 text-sm">{testimonials[currentIndex].location}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-accent" : "bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
