"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Clock, MapPin, Calendar, Check, Info, Droplets } from "lucide-react";

const schedule = [
    { time: "5:30 am", activity: "Ushapanam, Oil pulling, Danthadhavanam" },
    { time: "6:00 am", activity: "Basti (Yogic Enema)" },
    { time: "7:00 am", activity: "Suryasnanam (Sunbath)" },
    { time: "8:00 am", activity: "Consultation" },
    { time: "8:30 am", activity: "Yoga asanas" },
    { time: "9:30 am", activity: "Body Massage, Steam bath" },
    { time: "11:30 am", activity: "Meditation" },
    { time: "12:30 pm", activity: "Journal, Rest in silence" },
    { time: "1:30 pm", activity: "Mud Bath" },
    { time: "2:30 pm", activity: "Pranayama" },
    { time: "3:00 pm", activity: "Deep Relaxation (Yoga Nidra)" },
    { time: "4:00 pm", activity: "Mud pack, Basti" },
    { time: "5:00 pm", activity: "Interactive Discussion on Lifestyle changes" },
    { time: "6:00 pm", activity: "Feedback/Closure" },
];

const faq = [
    {
        q: "Are there moments of Silence?",
        a: "Yes there are moments of Silence. In general we ask our guests to speak less and stay as much in silence as possible to tune within."
    },
    {
        q: "Do we have free time during Yoga and Detox Program?",
        a: "Yes, there is time for reading, reflecting, feeling inner and outer space. During your stay we strongly recommend to stay tuned within and therefore to not be busy with sightseeing, shopping etc. For the benefit of your practice going out in nature is soothing. There is time to take walks among the beautiful lush green woods."
    },
    {
        q: "What to bring?",
        a: "Comfortable outfits for yoga practice, mosquito spray, small torch with batteries, slippers and socks, comfortable shoes for walking in the area, a copy of your passport. We have yogamats, meditation pillows and meditation blankets."
    },
    {
        q: "What are not allowed during your detox programs?",
        a: "Cell-phones or electronic gadgets, Internet, Office or personal work, Plastic, Chemical products like toothpaste, bath soap, shampoo, conditioner etc., Tobacco, alcohol, outside food or drinks."
    },
    {
        q: "What is the cancellation policy?",
        a: "Cancellation is allowed only until 15 days prior to the start of the program. Any deposit paid in advance will not be refunded if cancelled after that."
    }
];

export default function DetoxPage() {
    return (
        <main className="pt-20 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-brand-green text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/ayurvedic-treatment-1.jpg"
                        alt="Ayurvedic Detox"
                        fill
                        className="object-cover opacity-30 mix-blend-multiply"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="bg-white/20 text-white py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
                            <Leaf className="w-4 h-4" />
                            Purify Body, Mind & Heart
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-bold font-primary mb-6 text-white">
                            Ayurvedic Detox
                        </h1>
                        <p className="text-xl text-brand-green-100 mb-8 leading-relaxed max-w-2xl">
                            When the physical and mental body are cleaned up, we can start to feel the spiritual body,
                            our center of real happiness. This detox program combines physical and mental cleaning through
                            Ayurvedic Detox therapy, Yoga, Pranayama, and Meditation.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact?subject=detox-booking">
                                <Button size="lg" className="bg-white hover:bg-gray-100 text-brand-green shadow-xl font-bold">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Program Options */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-4">
                            Choose Your Cleanse
                        </h2>
                        <p className="text-gray-600">If you are looking for a deep inner cleanse on body, mind and heart, this is your program.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "1-Day Reset", day: "Saturdays", icon: Clock },
                            { title: "3-Day Purify", day: "Wednesdays", icon: Calendar },
                            { title: "5-Day Deep Cleanse", day: "Mondays", icon: Calendar }
                        ].map((prog, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 text-center hover:bg-brand-green/10 transition-colors"
                            >
                                <prog.icon className="w-8 h-8 text-brand-green mx-auto mb-3" />
                                <h3 className="text-xl font-bold text-brand-dark-grey mb-2">{prog.title}</h3>
                                <p className="text-brand-green font-semibold">Starts on {prog.day}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Section: Therapy & Benefits */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Therapy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-6 flex items-center gap-3">
                                <Droplets className="w-8 h-8 text-brand-light-blue" />
                                Detox Therapy May Include
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Intake session and daily guidance by our Qualified Ayurvedic Therapist",
                                    "Fasting with juices, fruit snacks, sweet potato and soup",
                                    "Colon Cleansing",
                                    "Mud pack (Ayurvedic therapy to detox and stimulate the digestive fire)",
                                    "Lower or Upper Back Basti (Ayurvedic oil therapy)",
                                    "Ayurvedic massage"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-6 flex items-center gap-3">
                                <Leaf className="w-8 h-8 text-brand-green" />
                                Program Benefits
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Toxins get removed from the digestive system.",
                                    "Stimulates the flow of prana.",
                                    "Strengthens muscles, joints and helps in hormone secretion of all glands.",
                                    "Increases one's awareness, capacity to think, to digest, to feel and express."
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-brand-green font-bold">{i + 1}</span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed pt-2">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-4">
                            One Day Detox Schedule
                        </h2>
                        <p className="text-gray-600">A structured day designed for maximum purification and healing.</p>
                    </div>

                    <div className="relative border-l-2 border-brand-green/20 ml-4 md:ml-0">
                        {schedule.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="mb-6 ml-6 relative"
                            >
                                <span className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-brand-green shadow-[0_0_0_4px_white]" />
                                <div className="bg-gray-50 rounded-lg p-4 transition-colors hover:bg-brand-green/5">
                                    <span className="font-bold text-brand-green text-sm uppercase tracking-wider block mb-1">
                                        {item.time}
                                    </span>
                                    <span className="text-gray-800 font-medium">{item.activity}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-dark-grey text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-primary mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    </div>

                    <div className="space-y-6">
                        {faq.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                            >
                                <h3 className="text-xl font-bold mb-3 flex items-start gap-3 text-brand-green-100">
                                    <Info className="w-6 h-6 flex-shrink-0 text-brand-green" />
                                    {item.q}
                                </h3>
                                <p className="text-gray-300 leading-relaxed pl-9">
                                    {item.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Clothing Tip */}
                    <div className="mt-12 bg-white/10 rounded-2xl p-8 border border-white/20">
                        <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2 inline-block">Seasonal Clothing Guide:</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-300">
                            <div><strong className="text-white block mb-1">Dec - Feb:</strong> Woolen vest, thermal underwear, warm socks, lighter daytime clothes.</div>
                            <div><strong className="text-white block mb-1">Mar - May:</strong> Spring/summer clothes, a cap, sunglasses. Warm layer in March.</div>
                            <div><strong className="text-white block mb-1">Jun - Aug:</strong> Light summer clothes, light raincoat, umbrella.</div>
                            <div><strong className="text-white block mb-1">Sep - Nov:</strong> Light clothes for day, warm shawl/vest for morning/evening.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cross-References to Other Wellness Programs */}
            <section className="py-16 bg-white border-t-2 border-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-primary text-center text-gray-900 mb-12">
                        Explore Our Other Wellness Programs
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link href="/wellness/stress-relief" className="group">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-blue-200 hover:border-blue-400">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    Ayurvedic Stress-Relief
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Become peaceful in mind & heart. Treat anxiety, insomnia, and fatigue naturally with specialized therapies.
                                </p>
                                <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                    Learn More →
                                </span>
                            </div>
                        </Link>
                        <Link href="/wellness/treatments" className="group">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-green-200 hover:border-green-400">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    Ayurvedic Therapy
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Experience authentic Ayurvedic therapies including Shirodhara, Kati Vasti, and various healing treatments.
                                </p>
                                <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                    Explore Therapies →
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
