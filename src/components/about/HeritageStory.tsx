"use client";

import { motion } from "framer-motion";

export default function HeritageStory() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Heritage Section */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-6">
                            A Legacy of Healing
                        </h2>
                        <p className="text-text leading-relaxed text-lg mb-6">
                            The journey began generations ago. Yogini Arunadevi descends from a lineage of spiritual healers. Her great-grandmother, Siddhayogini Sadamma, was a renowned healer who had the privilege of teaching yoga to distinguished figures including PM Jawaharlal Nehru and Indira Gandhi.
                        </p>
                        <p className="text-text leading-relaxed text-lg">
                            Inheriting this profound wisdom, Arunadevi established Arunayoga with a vision to preserve the authenticity of traditional Yoga while making it accessible to the modern world.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
                    >
                        {/* Placeholder for historical image */}
                        <div className="absolute inset-0 bg-sepia-0 bg-brand-medium-grey flex items-center justify-center">
                            <span className="text-white/50">Historical Image Placeholder</span>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Training Journey", text: "Trained by legendary gurus across India, absorbing the essence of Hatha, Ashtanga, and Kriya Yoga traditions." },
                        { title: "Philosophy", text: "\"Yoga is not just exercise; it is a way of life. It is the science of integrating body, mind, and soul for ultimate wellness.\"" },
                        { title: "Transformation", text: "Believing in the body's innate ability to heal, she has successfully treated chronic conditions through Yoga Therapy." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold font-primary text-primary mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
