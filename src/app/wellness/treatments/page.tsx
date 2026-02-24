"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Droplets, Eye, Brain, Activity, Heart, Wind, Flower2 } from "lucide-react";

// Interactive Therapy Selector Component
function TherapySelector({ treatments }: { treatments: typeof treatmentsData }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => {
            setSelectedIndex((prev) => (prev + 1) % treatments.length);
        }, 4500);

        return () => {
            window.clearInterval(id);
        };
    }, [treatments.length]);

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-primary text-brand-dark-grey mb-4">
                        Discover Our Healing Therapies
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ancient ayurvedic techniques to balance your body, mind, and spirit.
                    </p>
                </div>

                <div className="relative min-h-[600px] flex items-center justify-between gap-8">
                    {/* Left Semi-Circle - Therapy Circles */}
                    <div className="relative w-1/2 h-[600px]">
                        <div className="absolute left-[200px] top-[350px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border border-black/10 shadow-sm">
                                <Image
                                    src="/assets/YOGA.png"
                                    alt="Yoga"
                                    fill
                                    className="object-cover"
                                    style={{ filter: "grayscale(0.2) contrast(1.05) brightness(0.95)" }}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-white/35" />
                            </div>
                        </div>

                        {treatments.map((treatment, idx) => {
                            // C-shape arc (left side). This draws ~220° arc (open to the right).
                            const totalItems = treatments.length;
                            const angleStart = 70;
                            const angleEnd = 290;
                            const angle = angleStart + (idx / (totalItems - 1)) * (angleEnd - angleStart);
                            const radius = 240;
                            const centerX = 130;
                            const centerY = 300;
                            const x = Math.cos((angle * Math.PI) / 180) * radius + centerX;
                            const y = Math.sin((angle * Math.PI) / 180) * radius + centerY;

                            const isSelected = idx === selectedIndex;

                            return (
                                <motion.button
                                    key={idx}
                                    onClick={() => setSelectedIndex(idx)}
                                    className="absolute cursor-pointer"
                                    style={{
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ 
                                        opacity: 1, 
                                        scale: isSelected ? 1.2 : 1,
                                        x: isSelected ? 28 : 0,
                                        zIndex: isSelected ? 20 : 10
                                    }}
                                    whileHover={{ scale: isSelected ? 1.2 : 1.1 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                    <div className={`relative ${isSelected ? 'w-24 h-24' : 'w-20 h-20'} transition-all duration-300`}>
                                        <div className={`absolute inset-0 rounded-full overflow-hidden border-4 ${isSelected ? 'border-primary shadow-2xl' : 'border-white shadow-lg'}`}>
                                            <Image
                                                src={treatment.image}
                                                alt={treatment.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className={`absolute inset-0 ${isSelected ? 'bg-primary/20' : 'bg-black/40'} transition-all`} />
                                        </div>
                                        <div className={`absolute inset-0 flex items-center justify-center ${treatment.color} rounded-full`}>
                                            <treatment.icon className={`${isSelected ? 'w-10 h-10' : 'w-8 h-8'} transition-all`} />
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right Side - Selected Therapy Display */}
                    <div className="w-1/2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
                            >
                                {/* Large Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={treatments[selectedIndex].image}
                                        alt={treatments[selectedIndex].title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    
                                    {/* Icon Overlay */}
                                    <div className="absolute top-6 right-6">
                                        <div className={`w-20 h-20 ${treatments[selectedIndex].color} rounded-full flex items-center justify-center shadow-xl`}>
                                            {(() => {
                                                const IconComponent = treatments[selectedIndex].icon;
                                                return <IconComponent className="w-10 h-10" />;
                                            })()}
                                        </div>
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-3xl font-bold font-primary text-white mb-2">
                                            {treatments[selectedIndex].title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {treatments[selectedIndex].description}
                                    </p>

                                    <h4 className="font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide border-b-2 border-primary pb-2 inline-block">
                                        Benefits:
                                    </h4>
                                    <ul className="space-y-3">
                                        {treatments[selectedIndex].benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-base">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Navigation Dots */}
                                    <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-gray-200">
                                        {treatments.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedIndex(idx)}
                                                className={`w-3 h-3 rounded-full transition-all ${
                                                    idx === selectedIndex 
                                                        ? 'bg-primary w-8' 
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

const treatmentsData = [
    {
        title: "Ayurvedic Body Massage – Abhyanga/Udvartana",
        description: "An ancient Indian Ayurvedic massage therapy for healing and detoxifying Body, Mind, and Spirit. Performed using herbal oils and powders.",
        benefits: [
            "Rejuvenates the whole body",
            "Cleans your body (detoxify)",
            "Prevents stiffness of muscles",
            "Releases fatigue",
            "Corrects digestion, blood pressure & improves sleep"
        ],
        icon: Leaf,
        color: "text-brand-green bg-brand-green/10",
        border: "border-brand-green",
        image: "/assets/ayurvedic-treatment-1.jpg"
    },
    {
        title: "Healing Marma Point Massage",
        description: "Awakens 'energy points' throughout the body. Helps to release stress on cellular and subtle levels when our biorhythm is out of balance.",
        benefits: [
            "Helps to relax the nervous system",
            "Relieves stress, anxiety, depression",
            "Deeply relaxes mind and body",
            "Stimulates the flow of prana (72,000 nadis)",
            "Improves sensitivity of the five senses"
        ],
        icon: Activity,
        color: "text-brand-light-blue bg-brand-light-blue/10",
        border: "border-brand-light-blue",
        image: "/assets/healing-point-massage.jpg"
    },
    {
        title: "Lower Back Treatment - Kati Vasti",
        description: "Specialized therapy using warm herbal oil poured over the lumbar sacral area and retained inside a dough dam. Combined with a spinal massage.",
        benefits: [
            "Increases circulation, nourishes muscles and nerves",
            "Pacifies Vata, relieving pain and tension",
            "Restores flexibility",
            "Relieves chronic lower backaches and spasms"
        ],
        icon: Heart,
        color: "text-primary bg-primary/10",
        border: "border-primary",
        image: "/assets/lower-back-treatment.jpg"
    },
    {
        title: "Upper Back Treatment - Greeva Vasti",
        description: "Similar to Kati Vasti, but focused on relieving and nourishing the upper back and cervical area.",
        benefits: [
            "Relieves upper back and neck tension",
            "Strengthens bone tissue in cervical area",
            "Melts spinal rigidity"
        ],
        icon: Brain,
        color: "text-brand-blue bg-brand-blue/10",
        border: "border-brand-blue",
        image: "/assets/upper-back-treatment.jpg"
    },
    {
        title: "Knee Support & Rejuvenation - Janu Vasti",
        description: "Your knee is bathed in warm medicated oils or herbal decoctions, promoting joint strength by improving circulation.",
        benefits: [
            "Relief of knee joint pain",
            "Alleviates Osteoarthritis of the knee joint"
        ],
        icon: Droplets,
        color: "text-secondary bg-secondary/10",
        border: "border-secondary",
        image: "/assets/knee-support.jpg"
    },
    {
        title: "Digestion Improvement - Nabhi Vasti",
        description: "Balances the Nabhi Marma (navel center) where energy pathways converge using warm medicated ghee and steam towels.",
        benefits: [
            "Strengthens digestion and absorption",
            "Relieves irritable bowel, flatulence, constipation",
            "Facilitates release of deeply seated emotions"
        ],
        icon: Wind,
        color: "text-accent bg-accent/10",
        border: "border-accent",
        image: "/assets/digestion-improvement.jpg"
    },
    {
        title: "Eye Relaxation - Netra Vasti",
        description: "Nourishing ghee eye bath therapy. Highly recommended for people constantly reading or exposed to screens.",
        benefits: [
            "Refreshes tired, sore, dry, and itchy eyes",
            "Eases wrinkles and dark circles",
            "Improves vision & relieves twitches",
            "Preventive therapy for Diabetes/Hypertension patients"
        ],
        icon: Eye,
        color: "text-brand-green-2 bg-brand-green-2/10",
        border: "border-brand-green-2",
        image: "/assets/eye-relaxation-treatment.jpg"
    },
    {
        title: "Navarakidi",
        description: "Ancient Ayurvedic ritual using organic ingredients like milk and rice for radiant skin, pain relief, and deep relaxation.",
        benefits: [
            "Radiant skin",
            "Relief from body pains",
            "Improved blood circulation",
            "Profound Relaxation"
        ],
        icon: Flower2,
        color: "text-brand-dark-grey bg-brand-dark-grey/10",
        border: "border-brand-dark-grey",
        image: "/assets/navarakidi.jpg"
    }
];

export default function TreatmentsPage() {
    return (
        <>
            <main className="pt-20 bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center bg-brand-dark-grey text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/IMG_0872.jpg"
                            alt="Ayurvedic Therapy"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-grey/90 to-transparent z-0" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                                <Leaf className="w-4 h-4" />
                                Holistic Healing
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold font-primary mb-6 text-white">
                                Ayurvedic Therapy
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed">
                                Arunayoga helps you in prevention and cure with natural therapies that include:
                                Ayurveda, Detoxification, Stress-relief, Panchakarma, Traditional Herbal Medicine,
                                Aroma Therapy, Acupressure and Homeopathy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Shirodhara Highlight */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-brand-blue/5 rounded-3xl p-8 lg:p-12 border border-brand-blue/10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2"
                            >
                                <h2 className="text-h3 font-primary text-brand-dark-grey font-bold mb-4">
                                    Shirodhara Treatment
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Experience the ancient Ayurvedic ritual to rest and calm the mind. A steady flow of warm oil
                                    onto the forehead stimulates the pituitary gland, or "third-eye." This treatment is profoundly
                                    relaxing and nourishing, improving mental clarity and comprehension.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Relieves stress, anxiety, depression, and insomnia",
                                        "Reduces migraine headaches and hair loss",
                                        "Rejuvenates the face and softens worry lines",
                                        "Balances Vata Dosha and 'Praan Vaayu'"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg">
                                    Book Shirodhara
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/assets/ayurvedic-treatment-1.jpg"
                                    alt="Shirodhara Treatment"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Interactive Therapy Selector - Left Semi-Circle */}
                <TherapySelector treatments={treatmentsData} />
                

                {/* Wellness Packages CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-brand-green/10 rounded-3xl p-10 flex flex-col items-center text-center border border-brand-green/20">
                                <Leaf className="w-12 h-12 text-brand-green mb-4" />
                                <h3 className="text-2xl font-bold font-primary text-brand-dark-grey mb-3">
                                    Ayurvedic Detox
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Purify Body, Mind & Heart with our specialized 1, 3, or 5-day detox programs.
                                </p>
                                <Link href="/wellness/detox" className="mt-auto">
                                    <Button className="bg-brand-green hover:bg-brand-green/90 text-white w-full">
                                        Know More
                                    </Button>
                                </Link>
                            </div>

                            <div className="bg-brand-light-blue/10 rounded-3xl p-10 flex flex-col items-center text-center border border-brand-light-blue/20">
                                <Brain className="w-12 h-12 text-brand-light-blue mb-4" />
                                <h3 className="text-2xl font-bold font-primary text-brand-dark-grey mb-3">
                                    Ayurvedic Stress-Relief
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Become peaceful in mind & heart. Treat anxiety, insomnia, and fatigue naturally.
                                </p>
                                <Link href="/wellness/stress-relief" className="mt-auto">
                                    <Button className="bg-brand-light-blue hover:bg-brand-light-blue/90 text-white w-full">
                                        Know More
                                    </Button>
                                </Link>
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
                            <Link href="/wellness/stress-relief" className="group">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all border-2 border-blue-200 hover:border-blue-400">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        Ayurvedic Stress-Relief
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Become peaceful in mind & heart. Treat anxiety, insomnia, and fatigue naturally with specialized therapies.
                                    </p>
                                    <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                        Explore Program →
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
