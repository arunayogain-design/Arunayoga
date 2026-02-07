"use client";

import { Button } from "../ui/button";

export default function Newsletter() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold font-primary mb-4">
                    Stay Connected with Arunayoga
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Join our community and receive wellness tips, class updates, and exclusive offers delivering straight to your inbox.
                </p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        required
                    />
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-gray-100 border-0"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
            {/* Decorative Lotus/Pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/3 translate-y-1/3">
                <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>
        </section>
    );
}
