"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 bg-[url('/assets/classes-1.jpg')] bg-cover bg-fixed z-0"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-white drop-shadow-md pt-20">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg md:text-xl lg:text-2xl mb-4 font-medium"
                    >
                        &quot;Yoga is not a religion. It is a science.&quot;
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-primary leading-[1.1] drop-shadow-lg"
                    >
                        Arunayoga <br />
                        Training & <br />
                        Research Institute
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="text-xl lg:text-2xl mb-10 max-w-2xl font-light leading-relaxed"
                    >
                        Start your journey to a healthier and <br className="hidden md:block" />
                        more balanced life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 lg:justify-start items-center"
                    >
                        <Link href="/contact?subject=demo" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-[#e00000] text-white text-lg h-14 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                Book a Demo
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black text-lg h-14 px-8 rounded-lg bg-transparent transition-all"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                </div>
            </motion.div>
        </section>
    );
}
