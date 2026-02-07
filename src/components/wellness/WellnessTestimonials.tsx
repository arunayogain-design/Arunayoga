"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Anita Desai",
        condition: "Migraine Relief",
        text: "I suffered from severe migraines for years. After just 2 months of Ayurvedic treatment and specific yoga kriyas at Arunayoga, my headaches have completely vanished.",
    },
    {
        name: "John Miller",
        condition: "Digestive Health",
        text: "The detox program was intense but incredibly rewarding. I feel lighter, more energetic, and my digestion has never been better. Highly recommend the Panchakarma.",
    },
    {
        name: "Priya Reddy",
        condition: "Stress Management",
        text: "Arunadevi's holistic approach to stress was exactly what I needed. The Shirodhara treatments were pure bliss. I feel like I have my life back.",
    }
];

export default function WellnessTestimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-center text-primary mb-12">
                    Healing Stories
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                            <Quote className="w-10 h-10 text-brand-green/20 absolute top-6 left-6" />
                            <div className="relative z-10 pt-6">
                                <div className="flex gap-1 mb-4 text-brand-green">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-gray-700 italic mb-6 leading-relaxed">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-brand-green font-medium">{testimonial.condition}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
