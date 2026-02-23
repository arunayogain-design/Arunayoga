"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Smile, Check, Info } from "lucide-react";

const schedule = [
    { time: "05:30 - 06:30", activity: "Pranayama / Meditation" },
    { time: "06:45 - 08:15", activity: "Hatha Yoga Practice" },
    { time: "08:30 - 09:30", activity: "Yoga Theory (Tue - Sat)" },
    { time: "10:00", activity: "Brunch" },
    { time: "11:00 - 14:00", activity: "Anti Stress Treatment" },
    { time: "13:30", activity: "Fruit snack" },
    { time: "15:45 - 17:00", activity: "Yoga Therapy (Mon - Fri)" },
    { time: "17:00 - 18:00", activity: "Meditation" },
    { time: "18:00", activity: "Dinner" },
    { time: "21:00 - 05:30", activity: "Silence" },
];

const faq = [
    {
        q: "Are there moments of Silence?",
        a: "Yes there are moments of Silence. In general we ask our guests to speak less and stay as much in silence as possible to tune within."
    },
    {
        q: "Do we have free time during the Program?",
        a: "Yes, there is time for reading, reflecting, feeling inner and outer space. During your stay we strongly recommend to stay tuned within and therefore to not be busy with sightseeing, shopping etc. For the benefit of your practice going out in nature is soothing."
    },
    {
        q: "What to bring?",
        a: "Comfortable outfits for yoga practice, mosquito spray, small torch with batteries, slippers and socks, comfortable shoes for walking in the area, a copy of your passport. We have yogamats, meditation pillows and meditation blankets."
    },
    {
        q: "What are not allowed during the programs?",
        a: "Cell-phones or electronic gadgets, Internet, Office or personal work, Plastic, Chemical products like toothpaste, bath soap, shampoo, conditioner etc., Tobacco, alcohol, outside food or drinks."
    },
    {
        q: "What is the cancellation policy?",
        a: "Cancellation is allowed only until 15 days prior to the start of the program. Any deposit paid in advance will not be refunded if cancelled after that."
    }
];

export default function StressReliefPage() {
    return (
        <main className="pt-20 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-brand-light-blue text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/ayurvedic-treatment-1.jpg"
                        alt="Ayurvedic Stress-Relief"
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
                            <Brain className="w-4 h-4" />
                            Become Peaceful in Mind & Heart
                        </span>
                        <h1 className="text-4xl lg:text-7xl font-bold font-primary mb-6 text-white">
                            Ayurvedic Stress-Relief
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                            How can we enjoy all things we are striving to achieve, if one is lacking energy?
                            This program targets stress—the root cause of anxiety, tiredness, depression, and insomnia—helping you regain balance and inner peace.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact?subject=stress-relief-booking">
                                <Button size="lg" className="bg-white hover:bg-gray-100 text-brand-light-blue shadow-xl font-bold">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Split Section: Therapy & Benefits */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Weekly Therapy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-6 flex items-center gap-3">
                                <Smile className="w-8 h-8 text-brand-light-blue" />
                                Weekly Therapy May Include
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Intake session and daily guidance by our Qualified Ayurvedic Therapist",
                                    "Yoga Therapy class (Mon - Fri: mix of asanas, breathing techniques & yoga nidra)",
                                    "Basti (Healing Ayurvedic Oil Therapies)",
                                    "Ayurvedic massage with herbal oil to remove stress from muscles",
                                    "Healing massage",
                                    "Shirodhara treatment (steady flow of warm oil for mental clarity)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                                        <Check className="w-5 h-5 text-brand-light-blue flex-shrink-0 mt-0.5" />
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
                                <Brain className="w-8 h-8 text-brand-light-blue" />
                                Program Benefits
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Greatly relieves stress and strain.",
                                    "Increases peace of mind and decreases hypertension, anxiety, tiredness, anger.",
                                    "Improves harmonious sleep and makes the brain more fresh and healthy.",
                                    "Helps to develop a positive attitude towards life."
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-light-blue/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-brand-light-blue font-bold">{i + 1}</span>
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
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-4">
                            Daily Healing Schedule
                        </h2>
                        <p className="text-gray-600">A structured routine designed to restore your nervous system and bring peace.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {schedule.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.05)] p-5 border border-gray-100 flex flex-col justify-center text-center hover:border-brand-light-blue/30 transition-colors"
                            >
                                <span className="text-brand-light-blue font-bold text-lg mb-1">{item.time}</span>
                                <span className="text-gray-700">{item.activity}</span>
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
                        <div className="w-20 h-1 bg-brand-light-blue mx-auto rounded-full" />
                    </div>

                    <div className="space-y-6">
                        {faq.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col"
                            >
                                <h3 className="text-xl font-bold mb-3 flex items-start gap-3 text-blue-100">
                                    <Info className="w-6 h-6 flex-shrink-0 text-brand-light-blue" />
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
                        <Link href="/wellness/detox" className="group">
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-purple-200 hover:border-purple-400">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    Ayurvedic Detox
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Purify Body, Mind & Heart with our specialized 1, 3, or 5-day detox programs combining yoga and Ayurveda.
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
