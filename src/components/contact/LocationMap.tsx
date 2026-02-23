"use client";

export default function LocationMap() {
    return (
        <section className="h-[400px] w-full bg-gray-200 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4467!3d17.4243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f2b8e5e5%3A0x5c5e5e5e5e5e5e5e!2s8-3%2C%20833%2F13A%2C%20Kundan%20Marble%20Ln%2C%20Sagar%20Society%2C%20Sri%20Nagar%20Colony%2C%20Aurora%20Colony%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500073!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Arunayoga Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-t-4 border-primary/20" />
        </section>
    );
}
