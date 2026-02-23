"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import CollageBackground from "./CollageBackground";

export default function TrainingHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
            {/* Background with overlay */}
            <CollageBackground 
                images={[
                    "/Classes/Asana Practice - 3.png",
                    "/Classes/Pranayama - 3.png",
                    "/Classes/dhyan.png"
                ]}
                opacity={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Yoga Alliance Certified
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold font-primary mb-6 leading-tight">
                            Become a <br />
                            <span className="text-primary">Yoga Teacher</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Embark on a life-changing journey with our comprehensive teacher training programs. Deepen your practice, master the art of teaching, and transform lives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/contact?subject=teacher-training">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8">
                                    Apply Now
                                </Button>
                            </a>
                            <a href="#courses">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8">
                                    View Courses
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
