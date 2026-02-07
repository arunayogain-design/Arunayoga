"use client";

export default function LocationMap() {
    return (
        <section className="h-[400px] w-full bg-gray-200 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.99786961726!2d78.486671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin"
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
