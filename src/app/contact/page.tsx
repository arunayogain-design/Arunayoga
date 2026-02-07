import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";
import LocationMap from "@/components/contact/LocationMap";

export const metadata = {
    title: "Contact Us | Arunayoga",
    description: "Get in touch with Arunayoga for classes, teacher training, and wellness consultations in Hyderabad.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactContent />
            <LocationMap />
        </main>
    );
}
