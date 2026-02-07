"use client";

import { motion } from "framer-motion";
import { User, Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const posts = [
    {
        id: 1,
        title: "The Benefits of Suryanamaskar for Modern Life",
        excerpt: "Discover how the ancient practice of Sun Salutations can improve your physical health and mental clarity in today's fast-paced world.",
        author: "Yogini Arunadevi",
        date: "Feb 1, 2026",
        category: "Practice",
        image: "bg-orange-100"
    },
    {
        id: 2,
        title: "Understanding Your Dosha: An Introduction to Ayurveda",
        excerpt: "Learn the basics of Vata, Pitta, and Kapha, and how identifying your constitution can transform your health.",
        author: "Dr. Ramesh Kumar",
        date: "Jan 25, 2026",
        category: "Ayurveda",
        image: "bg-green-100"
    },
    {
        id: 3,
        title: "5 Pranayama Techniques for Stress Relief",
        excerpt: "Simple breathing exercises you can do at your desk to instantly calm your nervous system.",
        author: "Priya Sharma",
        date: "Jan 15, 2026",
        category: "Wellness",
        image: "bg-blue-100"
    },
    {
        id: 4,
        title: "Yoga Philosophy: The Eight Limbs Explained",
        excerpt: "A deep dive into Ashtanga Yoga's eight-fold path and how to apply these ethical principles daily.",
        author: "Yogini Arunadevi",
        date: "Jan 05, 2026",
        category: "Philosophy",
        image: "bg-purple-100"
    },
    {
        id: 5,
        title: "Healthy Eating for Yogis",
        excerpt: "Nutritional guidelines to support your practice, including sattvic food choices and eating habits.",
        author: "Dr. Ramesh Kumar",
        date: "Dec 20, 2025",
        category: "Nutrition",
        image: "bg-yellow-100"
    },
    {
        id: 6,
        title: "Getting Started with Meditation",
        excerpt: "Practical tips for beginners to establish a consistent and rewarding meditation practice.",
        author: "Priya Sharma",
        date: "Dec 10, 2025",
        category: "Meditation",
        image: "bg-teal-100"
    }
];

export default function BlogList() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-secondary mb-4">
                        Insights & Wisdom
                    </h2>
                    <p className="text-text max-w-2xl mx-auto">
                        Explore articles on yoga philosophy, practice tips, ayurvedic wellness, and healthy living.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 ${post.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium opacity-50">
                                    [Article Image]
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                                    <Tag className="w-3 h-3" /> {post.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                </div>

                                <h3 className="text-xl font-bold font-primary text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link href={`/blog/${post.id}`}>
                                        <span className="inline-flex items-center text-sm font-bold text-primary hover:text-secondary transition-colors">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="border-gray-200 text-gray-600 hover:border-primary hover:text-primary">
                        Load More Articles
                    </Button>
                </div>
            </div>
        </section>
    );
}
