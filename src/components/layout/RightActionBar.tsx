"use client";

import Link from "next/link";
import { MessageCircle, ShoppingBag } from "lucide-react";

export default function RightActionBar() {
    const whatsappUrl = "https://wa.me/919440698003";

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden sm:flex flex-col overflow-hidden rounded-l-2xl shadow-lg">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group"
            >
                <div className="bg-brand-dark-grey text-white px-4 py-4 border-l-2 border-black flex items-center gap-3 transition-colors hover:bg-brand-dark-grey/90" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="font-bold tracking-wide">Chat with us</span>
                </div>
            </a>

            <Link href="/events" className="group">
                <div className="bg-primary text-white px-4 py-4 border-l-2 border-black flex items-center gap-3 transition-colors hover:bg-primary/90" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                    <ShoppingBag className="w-5 h-5 text-white" />
                    <span className="font-bold tracking-wide">View our Products</span>
                </div>
            </Link>
        </div>
    );
}
