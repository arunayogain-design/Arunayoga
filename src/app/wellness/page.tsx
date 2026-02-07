import WellnessHero from "@/components/wellness/WellnessHero";
import TreatmentsGrid from "@/components/wellness/TreatmentsGrid";
import ConsultationProcess from "@/components/wellness/ConsultationProcess";
import WellnessTestimonials from "@/components/wellness/WellnessTestimonials";

export const metadata = {
    title: "Ayurvedic Wellness | Arunayoga",
    description: "Experience authentic Ayurvedic treatments and holistic healing therapies tailored to your unique constitution.",
};

export default function WellnessPage() {
    return (
        <main className="min-h-screen">
            <WellnessHero />
            <TreatmentsGrid />
            <ConsultationProcess />
            <WellnessTestimonials />
        </main>
    );
}
