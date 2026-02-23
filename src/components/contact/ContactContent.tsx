"use client";

import { Button } from "../ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactContent() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Information */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold font-primary text-secondary mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
<p className="text-gray-600">
                                            <span className="block font-semibold text-primary">ATRI</span>
                                            <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                                                Arunayoga Training & Research Institute
                                            </span>
                                            8-3, 833/13A, Kundan Marble Ln,<br />
                                            Sagar Society, Sri Nagar Colony,<br />
                                            Aurora Colony, Banjara Hills,<br />
                                            Hyderabad, Telangana 500073.
                                        </p>
                                        <a 
                                            href="https://www.google.co.in/maps/place/Aruna+Yoga/@17.4353349,78.3967849,15z" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-primary text-sm font-medium hover:underline"
                                        >
                                            View on Google Maps →
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 9440698003</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@arunayoga.co.in</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 6:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Sunday: 7:00 AM - 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/arunayoga" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-gray-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold font-primary text-secondary mb-2">
                            Send us a Message
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we will get back to you within 24 hours.
                        </p>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="+91 98765 43210"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
<select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white"
                                >
                                    <option value="">-- Select Purpose --</option>
                                    <optgroup label="Daily Classes">
                                        <option value="demo">Book a Demo Class</option>
                                        <option value="class-inquiry">Class Schedule Inquiry</option>
                                    </optgroup>
                                    <optgroup label="Teacher Training">
                                        <option value="diploma-200">Diploma in Yoga (200 Hours)</option>
                                        <option value="advanced-300">Advanced Diploma in Yoga (300 Hours)</option>
                                        <option value="pg-diploma-500">PG Diploma in Yoga (500 Hours)</option>
                                        <option value="teacher-training">General Teacher Training Inquiry</option>
                                    </optgroup>
                                    <optgroup label="Ayurvedic Therapy">
                                        <option value="treatment">Book a Therapy</option>
                                        <option value="consultation">Wellness Consultation</option>
                                        <option value="detox">Ayurvedic Detox Program</option>
                                        <option value="stress-relief">Stress Relief Program</option>
                                    </optgroup>
                                    <optgroup label="Other">
                                        <option value="general">General Inquiry</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="collaboration">Collaboration / Partnership</option>
                                        <option value="media">Media Inquiry</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                    placeholder="How can we help you?"
                                    required
                                />
                            </div>

                            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
