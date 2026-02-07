"use client";

import Image from "next/image";

export default function FacultyPreview() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold font-primary text-secondary mb-12">
                    Learn from the Masters
                </h2>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {/* Founder Card */}
                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary">
                            <Image
                                src="/about-founder.png"
                                alt="Yogini Arunadevi"
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="text-2xl font-bold font-primary">Yogini Arunadevi</h3>
                        <p className="text-accent font-medium mb-2">Lead Trainer</p>
                        <p className="text-gray-500 text-sm max-w-xs">30+ Years Experience. Master of Hatha & Ashtanga Yoga. Founder of Arunayoga.</p>
                    </div>

                    {/* Placeholder Faculty 1 */}
                    <div className="flex flex-col items-center opacity-70">
                        <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Faculty Photo</span>
                        </div>
                        <h3 className="text-xl font-bold font-primary">Dr. Ramesh Kumar</h3>
                        <p className="text-gray-600 font-medium mb-2">Anatomy Expert</p>
                        <p className="text-gray-500 text-sm max-w-xs">Ayurvedic Doctor with specialization in Yoga Therapy and Anatomy.</p>
                    </div>

                    {/* Placeholder Faculty 2 */}
                    <div className="flex flex-col items-center opacity-70">
                        <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Faculty Photo</span>
                        </div>
                        <h3 className="text-xl font-bold font-primary">Priya Sharma</h3>
                        <p className="text-gray-600 font-medium mb-2">Philosophy Teacher</p>
                        <p className="text-gray-500 text-sm max-w-xs">Scholar in Sanskrit and Vedic texts. Expert in Yoga Sutras.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
