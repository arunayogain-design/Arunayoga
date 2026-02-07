"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function ClassesHero() {
    const [level, setLevel] = useState("");
    const [goal, setGoal] = useState("");

    const handleSearch = () => {
        const element = document.getElementById("daily-classes");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative py-24 bg-brand-light-blue/10 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/classes-preview.png')] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold font-primary text-primary mb-6"
                    >
                        Discover Your Perfect Practice
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-text max-w-2xl mx-auto"
                    >
                        From beginner to advanced, prenatal to therapeutic — find the path that aligns with your journey.
                    </motion.p>
                </div>

                {/* Class Finder Tool */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
                >
                    <h3 className="text-secondary font-bold mb-4 text-center uppercase tracking-wide text-sm">Find Your Class</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative">
                            <select
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary appearance-none text-gray-700"
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="">I am...</option>
                                <option value="beginner">A Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="prenatal">Expecting Mother</option>
                                <option value="senior">A Senior</option>
                            </select>
                        </div>

                        <div className="relative">
                            <select
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary appearance-none text-gray-700"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                            >
                                <option value="">I want to...</option>
                                <option value="strength">Build Strength</option>
                                <option value="stress">Reduce Stress</option>
                                <option value="heal">Heal Body/Mind</option>
                                <option value="learn">Learn Basics</option>
                                <option value="teach">Become a Teacher</option>
                            </select>
                        </div>

                        <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary/90">
                            <Search className="w-4 h-4 mr-2" />
                            Find My Class
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
            <div className="absolute -left-20 top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </section>
    );
}
