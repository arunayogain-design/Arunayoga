"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    { q: "Is this course suitable for beginners?", a: "Yes, our 200-hour TTC is designed to build a strong foundation from the ground up. No prior teaching experience is required." },
    { q: "Is the certificate internationally recognized?", a: "Absolutely. We are a Registered Yoga School (RYS) with Yoga Alliance USA. Our graduates can register as RYT-200/500." },
    { q: "Do you offer accommodation?", a: "Yes, we offer comfortable accommodation/ashram stay options for residential students, including satvik meals." },
    { q: "What is the batch size?", a: "We keep our batches small (max 15 students) to ensure personalized attention from the gurus." },
];

export default function FAQApplication() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-brand-light-blue/10">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold font-primary text-center text-primary mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-gray-800">{faq.q}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            {openIndex === index && (
                                <div className="pb-4 text-gray-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center bg-brand-dark-grey text-white rounded-2xl p-12 relative overflow-hidden border-2 border-black">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold font-primary mb-4">Ready to Start Your Journey?</h3>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            Applications are now open for the upcoming batch. Secure your spot today and transform your life.
                        </p>
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 text-lg">
                            Apply Now
                        </Button>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
                </div>
            </div>
        </section>
    );
}
