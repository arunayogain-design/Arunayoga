import Link from "next/link";
import { Button } from "../ui/button";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-dark-grey text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            {["About Us", "Classes", "Teacher Training", "Treatments", "Blog", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Column 2: Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Programs</h3>
                        <ul className="space-y-3">
                            {[
                                "200-Hour Diploma",
                                "300-Hour Advanced",
                                "500-Hour PG Diploma",
                                "Daily Classes",
                                "Retreats & Events",
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span className="text-gray-300">
                                    Arunayoga Training Institute<br />
                                    Park #7, Rd Number 44<br />
                                    Kavuri Hills, Madhapur<br />
                                    Hyderabad, Telangana 500033
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-gray-300">+91 9440698003</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-gray-300">info@arunayoga.co.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Stay Connected</h3>
                        <p className="text-gray-300 mb-4">
                            Join our community and receive wellness tips and updates.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-white/10 border border-white/20 rounded px-4 py-2 w-full focus:outline-none focus:border-primary text-white"
                            />
                            <Button size="sm">Subscribe</Button>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Youtube className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2024 Arunayoga Training and Research Institute. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-2xl">
                        🧘
                    </div>
                </div>
            </div>
        </footer>
    );
}
