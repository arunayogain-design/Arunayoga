import FounderHero from "@/components/about/FounderHero";
import HeritageStory from "@/components/about/HeritageStory";
import Achievements from "@/components/about/Achievements";
import Vision from "@/components/about/Vision";

export const metadata = {
    title: "Yogini Arunadevi | Founder - Arunayoga",
    description: "Meet Yogini Arunadevi, the visionary founder of Arunayoga Training and Research Institute with over 30 years of experience.",
};

export default function FounderPage() {
    return (
        <main className="min-h-screen">
            <FounderHero />
            <HeritageStory />
            <Achievements />
            <Vision />
        </main>
    );
}
