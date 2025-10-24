'use client';

import { useState, useEffect } from 'react';

interface SlideshowProps {
    images: string[]; // スライドショーに表示する画像のURLリスト
    interval?: number; // ミリ秒単位でのスライド切り替え間隔
    type?: 'main' | 'protect' | 'reuse';
}

export default function HeroSlideshow({
    images = [],
    interval = 5000,
    type = 'main'
}: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // グラデーションパターンを定義


    // スライドの自動切り替え
    // スライドの自動切り替え
    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [images.length, interval]);

    if (images.length === 0) {
        // 画像がない場合は、単色のプレースホルダーを表示
        return <div className="absolute inset-0 w-full h-full bg-blue-600" />;
    }

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* 画像スライド */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`スライド ${index + 1}`}
                        className="w-full h-full object-contain"
                    />
                    {/* 画像の上に半透明のオーバーレイをかけて、テキストの視認性を向上させる */}
                    <div className="absolute inset-0 bg-black opacity-30" />
                </div>
            ))}

            {/* ナビゲーションドット */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`スライド ${index + 1} に移動`}
                    />
                ))}
            </div>
        </div>
    );
}