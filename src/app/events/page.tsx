import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEvents from "@/components/events/PastEvents";

export const metadata = {
    title: "Events & Workshops | Arunayoga",
    description: "Join our upcoming yoga workshops, retreats, and community events in Hyderabad.",
};

export default function EventsPage() {
    return (
        <main className="min-h-screen">
            <EventsHero />
            <UpcomingEvents />
            <PastEvents />
        </main>
    );
}
