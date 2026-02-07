"use client";

import { motion } from "framer-motion";
import { ClipboardList, Stethoscope, FileHeart, UserCheck } from "lucide-react";

const steps = [
    {
        title: "Initial Assessment",
        desc: "Detailed analysis of your body constitution (Prakriti) and current imbalances (Vikriti).",
        icon: ClipboardList,
    },
    {
        title: "Diagnosis",
        desc: "Identification of root causes of ailments through pulse reading (Nadi Pariksha) and observation.",
        icon: Stethoscope,
    },
    {
        title: "Treatment Plan",
        desc: "Customized plan including diet, lifestyle changes, herbal remedies, and yoga therapy.",
        icon: FileHeart,
    },
    {
        title: "Follow-up",
        desc: "Regular monitoring of progress and adjustments to the plan for sustainable health.",
        icon: UserCheck,
    },
];

export default function ConsultationProcess() {
    return (
        <section className="py-20 bg-brand-light-blue/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-primary text-primary mb-4">
                        Consultation Process
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Our systematic approach ensures a deep understanding of your unique health needs.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold border-4 border-white shadow-sm">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold font-primary text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
