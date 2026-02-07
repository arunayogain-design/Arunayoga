"use client";

import { Button } from "../ui/button";

const scheduleData = [
    { time: "6:00 - 7:00 AM", mon: "Hatha Yoga", wed: "Vinyasa Flow", fri: "Ashtanga" },
    { time: "7:00 - 8:00 AM", mon: "Pranayama", wed: "Therapeutic", fri: "Advanced" },
    { time: "8:00 - 9:00 AM", mon: "All Levels", wed: "Beginners", fri: "Intermediate" },
    { time: "9:00 - 10:00 AM", mon: "Prenatal", wed: "Seniors", fri: "Therapeutic" },
    { time: "10:00 - 11:00 AM", mon: "Advanced", wed: "Meditation", fri: "Kriya Yoga" },
    { time: "5:00 - 6:00 PM", mon: "Kids Yoga", wed: "Hatha Yoga", fri: "Fun Flow" },
    { time: "6:00 - 7:00 PM", mon: "Power Yoga", wed: "Core Strength", fri: "Stress Relief" },
];

export default function Schedule() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-primary text-primary text-center mb-8">
                    Weekly Schedule
                </h2>

                <div className="flex justify-center gap-4 mb-8">
                    {/* Simple toggle for Morning/Evening visualization if needed, keeping simple table for now */}
                    <div className="text-sm text-gray-500 italic">
                        * Schedule subject to change. Please contact us for latest updates.
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                    <table className="w-full min-w-[600px] text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 font-semibold border-b border-primary/80 w-1/4">Time</th>
                                <th className="p-4 font-semibold border-b border-primary/80 w-1/4">Monday</th>
                                <th className="p-4 font-semibold border-b border-primary/80 w-1/4">Wednesday</th>
                                <th className="p-4 font-semibold border-b border-primary/80 w-1/4">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-brand-light-blue/10 transition-colors
                  `}
                                >
                                    <td className="p-4 font-medium text-gray-900 border-b border-gray-100">{row.time}</td>
                                    <td className="p-4 text-gray-600 border-b border-gray-100 font-medium">{row.mon}</td>
                                    <td className="p-4 text-gray-600 border-b border-gray-100 font-medium">{row.wed}</td>
                                    <td className="p-4 text-gray-600 border-b border-gray-100 font-medium">{row.fri}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-8">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Download Full Schedule (PDF)
                    </Button>
                </div>
            </div>
        </section>
    );
}
