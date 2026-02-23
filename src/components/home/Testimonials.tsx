"use client";

import { motion } from "framer-motion";
import { PlayCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

const testimonialVideos = [
    {
        id: "CWdc-P2AcRU",
        title: "Paralysis Treatment Testimonial - 1",
        href: "https://www.youtube.com/watch?v=CWdc-P2AcRU",
        thumbnail: "/assets/community-1.jpeg",
        summary: "A recovery journey highlighting the impact of consistent therapeutic yoga and guided treatment support.",
    },
    {
        id: "_LRu5KXZ6Sc",
        title: "Paralysis Treatment Testimonial - 2",
        href: "https://www.youtube.com/watch?v=_LRu5KXZ6Sc",
        thumbnail: "/assets/community-2.jpg",
        summary: "A patient experience focused on improved mobility, confidence and quality of life after structured sessions.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-brand-dark-grey text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary mb-3">
                        Testimonials
                    </h2>
                    <p className="text-white/90 text-lg">Paralysis Treatment</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonialVideos.map((video, index) => (
                        <motion.a
                            key={video.id}
                            href={video.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block rounded-2xl overflow-hidden border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                                <p className="text-sm text-white/80 mb-3">{video.summary}</p>
                                <span className="inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white">
                                    Watch on YouTube <ExternalLink className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://www.youtube.com/results?search_query=arunayoga+testimonials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                    >
                        View More Testimonials <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
