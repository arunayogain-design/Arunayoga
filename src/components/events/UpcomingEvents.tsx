"use client";

import { Button } from "../ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
    {
        title: "Chakra Healing Workshop",
        date: "March 15, 2026",
        time: "9:00 AM - 1:00 PM",
        location: "Arunayoga Main Hall",
        description: "A comprehensive workshop focusing on balancing the seven chakras through specific asanas, pranayama, and meditation techniques.",
        image: "bg-red-100", // Placeholder color
        category: "Workshop"
    },
    {
        title: "3-Day Detox Retreat",
        date: "April 10-12, 2026",
        time: "Full Day",
        location: "Ananthagiri Hills",
        description: "Escape the city and rejuvenate with our signature detox retreat. Includes satvik diet, nature walks, and therapeutic yoga.",
        image: "bg-green-100",
        category: "Retreat"
    },
    {
        title: "International Yoga Day Celebration",
        date: "June 21, 2026",
        time: "6:00 AM - 8:00 AM",
        location: "Public Gardens, Hyderabad",
        description: "Join thousands of yogis in a mass yoga session to celebrate the spirit of unity and wellness.",
        image: "bg-blue-100",
        category: "Community"
    }
];

export default function UpcomingEvents() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-secondary mb-12 text-center">
                    Upcoming Events
                </h2>

                <div className="grid gap-8 max-w-5xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Date Badge (Mobile: Top, Desktop: Left) */}
                            <div className="md:w-48 bg-primary/5 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                                <span className="text-primary font-bold text-xl block mb-1">{event.date.split(',')[0]}</span>
                                <span className="text-gray-500 text-sm">{event.date.split(',')[1]}</span>
                                <span className="mt-3 px-3 py-1 bg-white rounded-full text-xs font-bold text-brand-dark-grey border border-gray-200">
                                    {event.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                                <h3 className="text-2xl font-bold font-primary text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" /> {event.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> {event.location}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="flex items-center justify-end mt-auto">
                                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                                        Register Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
