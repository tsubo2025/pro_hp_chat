'use client';

import { useState, useEffect } from 'react';

interface SlideshowProps {
    images?: string[]; // 画像は使用しないが、互換性のために残す
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
    const gradients = [
        'from-blue-600 via-purple-600 to-blue-800',
        'from-purple-600 via-pink-600 to-red-600',
        'from-green-600 via-blue-600 to-purple-600'
    ];

    // スライドの自動切り替え
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % gradients.length);
        }, interval);

        return () => clearInterval(timer);
    }, [gradients.length, interval]);

    // タイプに応じた背景グラデーションを取得
    const getBackgroundGradient = () => {
        switch (type) {
            case 'protect':
                return [
                    'from-protect-primary via-blue-700 to-blue-900',
                    'from-blue-600 via-protect-primary to-blue-800',
                    'from-protect-primary via-blue-600 to-purple-700'
                ];
            case 'reuse':
                return [
                    'from-reuse-primary via-orange-600 to-red-700',
                    'from-yellow-500 via-reuse-primary to-orange-700',
                    'from-reuse-primary via-yellow-600 to-orange-800'
                ];
            default:
                return gradients;
        }
    };

    const backgroundGradients = getBackgroundGradient();

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* グラデーション背景スライド */}
            {backgroundGradients.map((gradient, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-gradient-to-br ${gradient} ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* ナビゲーションドット */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {backgroundGradients.map((_, index) => (
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