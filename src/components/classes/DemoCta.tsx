"use client";

import { Button } from "../ui/button";

export default function DemoCta() {
    return (
        <section className="py-20 bg-brand-dark-grey text-white text-center border-t-2 border-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-primary mb-6">
                    Experience Arunayoga
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                    Not sure where to start? Book a <span className="font-bold text-white">complimentary demo class</span> today.
                    Our instructors will assess your needs and guide you to the perfect program.
                </p>
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 text-lg px-10 h-14">
                    Book Your Free Demo Class
                </Button>
            </div>
        </section>
    );
}
