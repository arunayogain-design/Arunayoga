"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "Yogini Arunadevi",
        role: "Founder & Lead Director",
        image: "/about-founder.png", // Reusing existing asset
        bio: "With over 30 years of experience, she is a pioneer in therapeutic yoga."
    },
    {
        name: "Dr. Ramesh Kumar",
        role: "Senior Consultant (Ayurveda)",
        image: "/placeholder-doctor.png", // Placeholder
        bio: "Expert in Pulse Diagnosis and Panchakarma therapies."
    },
    {
        name: "Priya Sharma",
        role: "Senior Instructor",
        image: "/placeholder-instructor.png", // Placeholder
        bio: "Specializes in Prenatal Yoga and Meditation techniques."
    },
    {
        name: "Vikram Singh",
        role: "Hatha Yoga Trainer",
        image: "/placeholder-trainer.png", // Placeholder
        bio: "Advance asana practitioner and alignment specialist."
    }
];

export default function TeamGrid() {
    return (
        <section className="py-20 bg-brand-light-blue/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-primary text-secondary mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Dedicated professionals committed to guiding you on your path.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center group"
                        >
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                {/* Placeholder for real image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                    [Photo: {member.name}]
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                                    <p className="text-white text-sm">{member.bio}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold font-primary text-lg text-gray-900">{member.name}</h3>
                                <p className="text-primary text-sm font-medium">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
