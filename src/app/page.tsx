"use client";

import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import TargetAudience from "@/components/home/TargetAudience";
import Testimonials from "@/components/home/Testimonials";
import MediaCoverage from "@/components/home/MediaCoverage";
import Certifications from "@/components/home/Certifications";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero />
            <TrustIndicators />
            <MediaCoverage />
            <AboutPreview />
            <ServicesOverview />
            <TargetAudience />
            <Certifications />
            <Testimonials />
        </main>
    );
}
