"use client";

import Image from "next/image";

interface CollageBackgroundProps {
    images: string[];
    opacity?: number;
}

export default function CollageBackground({ images, opacity = 0.4 }: CollageBackgroundProps) {
    const imageCount = images.length;

    if (imageCount === 2) {
        return (
            <div className="absolute inset-0 grid grid-cols-2 gap-0">
                {images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full">
                        <Image
                            src={img}
                            alt={`Background ${idx + 1}`}
                            fill
                            className="object-cover"
                            style={{ opacity }}
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (imageCount === 3) {
        return (
            <div className="absolute inset-0 grid grid-cols-3 gap-0">
                {images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full">
                        <Image
                            src={img}
                            alt={`Background ${idx + 1}`}
                            fill
                            className="object-cover"
                            style={{ opacity }}
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (imageCount === 4) {
        return (
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
                {images.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full">
                        <Image
                            src={img}
                            alt={`Background ${idx + 1}`}
                            fill
                            className="object-cover"
                            style={{ opacity }}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="absolute inset-0">
            <Image
                src={images[0]}
                alt="Background"
                fill
                className="object-cover"
                style={{ opacity }}
            />
        </div>
    );
}
