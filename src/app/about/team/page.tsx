"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star, UserCircle2, Leaf } from "lucide-react";

const teamData = {
    leadership: [
        {
            name: "Yoga Guru Arunadevi",
            role: "Founder, Director & Chief Trainer",
            image: "/assets/Yoga-Guru-Arunadevi_1.jpg",
            speciality: "Yogic Philosophy, Advanced Training, Therapy",
        },
        {
            name: "Srinivas Vempa",
            role: "Lead Trainer (RYT500)",
            image: "/assets/community-2.jpg",
            speciality: "Teacher Training, Gentle yoga, Advanced Yoga",
        }
    ],
    yogaFaculty: [
        { name: "Janaki", role: "Faculty", speciality: "Gentle Yoga", cert: "Diploma in Yoga (Gold Medalist)" },
        { name: "Ramakrishna", role: "Faculty", speciality: "Hatha, Vinyasa, Advanced Yoga", cert: "Diploma in Yoga (Arunayoga & Annamalai)" },
        { name: "Sri Lakshmi", role: "Faculty", speciality: "Yoga for Women", cert: "P.G. Diploma in Yoga" },
        { name: "Srinivas", role: "Faculty", speciality: "Power Yoga", cert: "Diploma in Yoga" },
        { name: "Vijaya Lakshmi", role: "Faculty", speciality: "Ashtanga Yoga", cert: "P.G. Diploma in Yoga" },
    ],
    yogaInterns: [
        { name: "Lalitha", role: "Intern", speciality: "Hatha, Vinyasa, Advanced Yoga", cert: "P.G. Diploma in Yoga" },
        { name: "Yamini", role: "Intern", speciality: "Gentle, Ashtanga, Hatha Yoga", cert: "P.G. Diploma in Yoga" },
        { name: "Nafhat Jahan", role: "Intern", speciality: "Gentle, Prenatal Yoga", cert: "P.G. Diploma in Yoga" },
        { name: "Yogi", role: "Intern", speciality: "Beginners Yoga", cert: "Diploma in Yoga" },
    ],
    treatments: {
        ayurveda: [
            { name: "Dr. Kalpana", role: "Ayurvedic Doctor" },
            { name: "Pratibha", role: "Experienced Therapist", cert: "Kerala Kottayam College" },
            { name: "Allen", role: "Experienced Therapist", cert: "Kerala Kottayam College" },
            { name: "Anusha", role: "Experienced Therapist", cert: "5-year Clinical Internship" },
        ],
        naturopathy: [
            { name: "Yoga Guru Arunadevi", role: "Consultant and Therapist", cert: "" },
            { name: "Srinivas Achari", role: "Therapist", cert: "Panchaphala Yoga Chikitsa, Acupressure, Aroma Therapy", speciality: "Nerves related issues" },
        ],
        homeopathy: [
            { name: "Dr. Anil Nanduri", role: "Doctor" },
        ]
    }
};

const MemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 rounded-full bg-brand-light-blue/10 flex items-center justify-center text-primary">
                {member.image ? (
                    <Image src={member.image} alt={member.name} width={64} height={64} className="rounded-full object-cover w-full h-full" />
                ) : (
                    <UserCircle2 className="w-10 h-10" />
                )}
            </div>
            {member.role.includes("Doctor") || member.role.includes("Lead") || member.role.includes("Founder") ? (
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ) : null}
        </div>
        <h3 className="text-xl font-bold text-brand-dark-grey mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>

        {member.speciality && (
            <div className="mt-auto pt-4 border-t border-gray-50">
                <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Speciality:</span> {member.speciality}
                </p>
            </div>
        )}
        {member.cert && (
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                <Award className="w-4 h-4 text-brand-blue" />
                <span>{member.cert}</span>
            </div>
        )}
    </motion.div>
);

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-28 pb-20">
            {/* Header */}
            <section className="container mx-auto px-4 mb-20 text-center max-w-3xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
                >
                    Our Experts
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold font-primary text-brand-dark-grey mb-6"
                >
                    Meet the Minds Behind Arunayoga
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg"
                >
                    A dedicated team of experienced yoga masters, accredited doctors, and seasoned therapists united by the mission of holistic well-being.
                </motion.p>
            </section>

            {/* Leadership */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-2xl font-bold text-brand-dark-grey mb-8 border-b pb-2 inline-block border-primary">
                    Foundership & Leadership
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.leadership.map((member, i) => (
                        <MemberCard key={i} member={member} index={i} />
                    ))}
                </div>
            </section>

            {/* Yoga Faculty */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-2xl font-bold text-brand-dark-grey mb-8 border-b pb-2 inline-block border-brand-blue">
                    Yoga Faculty
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teamData.yogaFaculty.map((member, i) => (
                        <MemberCard key={i} member={member} index={i} />
                    ))}
                </div>
            </section>

            {/* Yoga Interns */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-2xl font-bold text-brand-dark-grey mb-8 border-b pb-2 inline-block border-brand-medium-grey">
                    Yoga Interns
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamData.yogaInterns.map((member, i) => (
                        <MemberCard key={i} member={member} index={i} />
                    ))}
                </div>
            </section>

            {/* Therapy: Ayurveda, Naturopathy, Homeopathy */}
            <section className="bg-white py-20 border-t border-gray-100 mt-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-primary text-brand-dark-grey mb-4">
                            Wellness & Therapy Team
                        </h2>
                        <div className="w-20 h-1 bg-brand-green mx-auto rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Ayurveda */}
                        <div>
                            <h3 className="text-xl font-bold text-brand-green mb-6 flex items-center gap-2">
                                <Leaf className="w-5 h-5" /> Ayurveda
                            </h3>
                            <div className="flex flex-col gap-4">
                                {teamData.treatments.ayurveda.map((member, i) => (
                                    <MemberCard key={i} member={member} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Naturopathy */}
                        <div>
                            <h3 className="text-xl font-bold text-brand-light-blue mb-6 flex items-center gap-2">
                                <Leaf className="w-5 h-5" /> Naturopathy
                            </h3>
                            <div className="flex flex-col gap-4">
                                {teamData.treatments.naturopathy.map((member, i) => (
                                    <MemberCard key={i} member={member} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Homeopathy */}
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                                <Leaf className="w-5 h-5" /> Homeopathy
                            </h3>
                            <div className="flex flex-col gap-4">
                                {teamData.treatments.homeopathy.map((member, i) => (
                                    <MemberCard key={i} member={member} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
