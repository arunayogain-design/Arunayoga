import ClassesHero from "@/components/classes/ClassesHero";
import ClassesGrid from "@/components/classes/ClassesGrid";
import ClassComponents from "@/components/classes/ClassComponents";
import Schedule from "@/components/classes/Schedule";
import Pricing from "@/components/classes/Pricing";
import DemoCta from "@/components/classes/DemoCta";

export const metadata = {
    title: "Yoga Classes | Arunayoga",
    description: "Explore our daily yoga classes including Hatha, Ashtanga, Vinyasa, and Therapeutic Yoga. Join us in Hyderabad.",
};

export default function ClassesPage() {
    return (
        <main className="min-h-screen">
            <ClassesHero />
            <ClassesGrid />
            <ClassComponents />
            <Schedule />
            <Pricing />
            <DemoCta />
        </main>
    );
}
