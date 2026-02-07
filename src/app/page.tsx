"use client";

import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import TargetAudience from "@/components/home/TargetAudience";
import Testimonials from "@/components/home/Testimonials";
import Certifications from "@/components/home/Certifications";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <TrustIndicators />
            <AboutPreview />
            <ServicesOverview />
            <TargetAudience />
            <Testimonials />
            <Certifications />
            <Newsletter />
        </main>
    );
}
