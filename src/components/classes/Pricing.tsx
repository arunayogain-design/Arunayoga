"use client";

import { Check } from "lucide-react";
import { Button } from "../ui/button";

const plans = [
    {
        name: "Drop-in Class",
        price: "₹500",
        period: "per class",
        features: ["Single session access", "Valid for any regular class", "No commitment", "Mat included"],
        highlight: false,
        cta: "Book Class",
    },
    {
        name: "Monthly Pass",
        price: "₹4,500",
        period: "per month",
        features: ["Unlimited classes", "Access to all levels", "Priority booking", "1 Guest pass/month"],
        highlight: true,
        tag: "Most Popular",
        cta: "Get Started",
    },
    {
        name: "Quarterly Pass",
        price: "₹12,000",
        period: "3 months",
        features: ["Unlimited classes", "Personal assessment", "Discounted workshops", "3 Guest passes"],
        highlight: false,
        cta: "Best Value",
    },
];

export default function Pricing() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-primary text-center mb-12">
                    Simple Pricing
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                relative bg-white rounded-2xl p-8 shadow-sm flex flex-col
                ${plan.highlight ? "border-2 border-primary shadow-xl scale-105 z-10" : "border border-gray-200"}
              `}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                                    {plan.tag}
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? "primary" : "outline"}
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
