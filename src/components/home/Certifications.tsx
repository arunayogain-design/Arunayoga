"use client";

import { motion } from "framer-motion";

const logos = [
    "/logo-annamalai.png",
    "/logo-yoga-alliance.png",
    "/logo-ministry.png",
    "/logo-award.png",
    "/logo-annamalai.png", // Duplicate for infinite scroll
    "/logo-yoga-alliance.png",
    "/logo-ministry.png",
    "/logo-award.png",
];

export default function Certifications() {
    return (
        <section className="py-12 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
                    Internationally Recognized & University Affiliated
                </p>
            </div>

            <div className="flex relative w-full">
                <motion.div
                    className="flex gap-16 items-center min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="relative w-32 h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                            {/* Using a placeholder div if image missing, or Image component */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-xs rounded">
                                Logo {index % 4 + 1}
                            </div>
                            {/* 
               <Image
                 src={logo}
                 alt="Certification Logo"
                 fill
                 className="object-contain"
               /> 
               */}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
