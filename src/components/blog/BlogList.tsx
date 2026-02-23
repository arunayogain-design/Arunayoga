"use client";

import { motion } from "framer-motion";
import { User, Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

type BlogListProps = {
    limit?: number;
    showHeader?: boolean;
};

export default function BlogList({ limit, showHeader = true }: BlogListProps) {
    const posts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {showHeader ? (
                    <div className="text-center mb-16">
                        <p className="text-text max-w-2xl mx-auto">
                            Authentic insights on yoga practice, ayurveda, pranayama, and traditional healing.
                        </p>
                    </div>
                ) : null}

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
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
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

                {limit ? (
                    <div className="mt-12 text-center">
                        <Link href="/blog">
                            <Button variant="outline" size="lg" className="border-gray-200 text-gray-600 hover:border-primary hover:text-primary">
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
