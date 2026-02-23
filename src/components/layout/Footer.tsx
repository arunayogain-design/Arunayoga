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
                            <li>
                                <Link href="/classes" className="text-gray-300 hover:text-primary transition-colors">
                                    Daily Classes
                                </Link>
                            </li>
                            <li>
                                <Link href="/teacher-training" className="text-gray-300 hover:text-primary transition-colors">
                                    Teacher Training
                                </Link>
                            </li>
                            <li>
                                <Link href="/wellness" className="text-gray-300 hover:text-primary transition-colors">
                                    Ayurvedic Therapy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Programs</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/teacher-training" className="text-gray-300 hover:text-primary transition-colors">
                                    Diploma in Yoga (200 Hours)
                                </Link>
                            </li>
                            <li>
                                <Link href="/teacher-training" className="text-gray-300 hover:text-primary transition-colors">
                                    Advanced Diploma (300 Hours)
                                </Link>
                            </li>
                            <li>
                                <Link href="/teacher-training" className="text-gray-300 hover:text-primary transition-colors">
                                    PG Diploma in Yoga (500 Hours)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-primary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span className="text-gray-300">
                                    <span className="text-primary font-semibold">ATRI</span><br />
                                    8-3, 833/13A, Kundan Marble Ln<br />
                                    Sagar Society, Sri Nagar Colony<br />
                                    Aurora Colony, Banjara Hills<br />
                                    Hyderabad, Telangana 500073.
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
                            <a href="https://www.facebook.com/arunayoga" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                </div>
            </div>
        </footer>
    );
}
