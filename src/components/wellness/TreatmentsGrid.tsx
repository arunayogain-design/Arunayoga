"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const treatments = [
    {
        title: "Ayurvedic Massage",
        desc: "Rejuvenates the whole body, cleanses and detoxifies, prevents stiffness of muscles, releases fatigue, corrects digestion and blood pressure.",
        image: "/assets/ayurvedic-treatment-1.jpg",
    },
    {
        title: "Healing Massage",
        desc: "Helps relax the nervous system, relieves stress, anxiety and depression. Facilitates release of deeply seated emotions and improves sensitivity of five senses.",
        image: "/assets/healing-point-massage.jpg",
    },
    {
        title: "Kati Vasti (Lower Back)",
        desc: "Increases circulation in the region, nourishes and strengthens muscles and nerves. Relieves chronic lower backaches, painful muscle spasms and stiffness.",
        image: "/assets/lower-back-treatment.jpg",
    },
    {
        title: "Greeva Vasti (Upper Back)",
        desc: "Same benefits as Kati Vasti but for the upper back region. Relieves neck pain, shoulder tension and cervical issues.",
        image: "/assets/upper-back-treatment.jpg",
    },
    {
        title: "Janu Vasti (Knee)",
        desc: "Relief of knee joint pain. Helps alleviate Osteoarthritis of the knee joint and strengthens the knee area.",
        image: "/assets/knee-support.jpg",
    },
    {
        title: "Nabhi Vasti (Digestive)",
        desc: "Strengthens the power of digestion and absorption. Relieves digestive symptoms such as irritable bowel, flatulence, poor appetite and constipation.",
        image: "/assets/digestion-improvement.jpg",
    },
    {
        title: "Netra Vasti (Eye Care)",
        desc: "Refreshes tired, sore, dry eyes. Eases eye tension, twitches, wrinkles and dark circles. Improves vision and nourishes eyes.",
        image: "/assets/eye-relaxation-treatment.jpg",
    },
    {
        title: "Navarakidi",
        desc: "Traditional Kerala therapy for radiant skin, relief from body pains, improved blood circulation and deep relaxation.",
        image: "/assets/navarakidi.jpg",
    },
    {
        title: "Shirodhara",
        desc: "Stimulates 3rd eye and crown chakras. Relieves stress, anxiety, depression and insomnia. Helps mental focus, reduces migraine and balances Vata Dosha.",
        image: "/assets/sidhora-treatment.jpg",
    },
];

export default function TreatmentsGrid() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Healing Therapies
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold font-primary text-text mb-4"
                    >
                        Ayurvedic Wellness Therapy
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Experience authentic healing therapies tailored to your unique needs
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <h3 className="text-xl font-bold font-primary mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-sm leading-relaxed mb-3">{item.desc}</p>
                                <Link href="/contact?subject=treatment" className="inline-block bg-primary/90 hover:bg-primary text-white text-xs px-4 py-2 rounded-full font-semibold transition-colors">
                                    Book Therapy
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
