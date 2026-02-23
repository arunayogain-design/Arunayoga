"use client";

import Image from "next/image";
import Link from "next/link";

export default function FacultyPreview() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-4">
                        Learn from Yogini Arunadevi
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lead Trainer with 35+ years of experience, descending from a lineage of spiritual healers
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
                    {/* Main Image */}
                    <div className="lg:w-1/2">
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/assets/arunadevi-1.jpg"
                                alt="Yogini Arunadevi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl font-bold font-primary text-primary mb-4">Yogini Arunadevi</h3>
                        <p className="text-accent font-semibold text-lg mb-4">Founder & Lead Trainer</p>
                        <ul className="space-y-3 text-gray-600 mb-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                35+ years of teaching experience
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Descendant of Siddhayogini Sadamma, legendary yoga guru
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Master of Hatha, Ashtanga & Therapeutic Yoga
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Author of "Arogyaniki Arunayoga" and Scientific Yoga DVDs
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                Featured on TV9, ETV and major media outlets
                            </li>
                        </ul>
                        <Link href="/contact?subject=teacher-training" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            Train with Yogini Arunadevi
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
