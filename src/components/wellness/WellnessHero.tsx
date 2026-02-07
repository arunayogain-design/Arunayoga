"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function WellnessHero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center bg-brand-green overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 opacity-40 bg-[url('/classes-preview.png')] bg-cover bg-center" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/80 to-brand-green/60" />

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-bold font-primary mb-6">
                        Ayurveda:<br />The Science of Life
                    </h1>
                    <p className="text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto">
                        Restore your natural balance through ancient Vedic wisdom, personalized detox therapies, and holistic healing.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 px-8 text-lg font-semibold">
                            Book Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 text-lg">
                            View Treatments
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Leaf Decoration */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full" />
        </section>
    );
}
