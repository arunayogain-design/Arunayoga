import AboutHero from "@/components/about-main/AboutHero";
import MissionValues from "@/components/about-main/MissionValues";
import TeamGrid from "@/components/about-main/TeamGrid";

export const metadata = {
    title: "About Us | Arunayoga",
    description: "Learn about the history, mission, and team behind Arunayoga Training and Research Institute.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <MissionValues />
            <TeamGrid />
        </main>
    );
}
