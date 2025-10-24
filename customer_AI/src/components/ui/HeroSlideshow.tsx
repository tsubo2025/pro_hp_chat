'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface SlideshowProps {
    images: string[]; // スライドショーに表示する画像のURLリスト
    interval?: number; // ミリ秒単位でのスライド切り替え間隔
    type?: 'main' | 'protect' | 'reuse'; // 現在は未使用だが、互換性のために残す
}

// 640x320の画像を2枚並べて表示し、横にスライドさせるコンポーネント
export default function HeroSlideshow({
    images,
    interval = 5000,
}: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // スライドショーの表示ロジックを簡素化するため、画像パスの配列を調整
    // 例: [A, B, C] -> [A, B], [B, C], [C, A] の組み合わせでスライドさせる
    const slideCombinations = useMemo(() => {
        if (images.length < 2) return [];
        const combinations = [];
        for (let i = 0; i < images.length; i++) {
            combinations.push([
                images[i],
                images[(i + 1) % images.length],
            ]);
        }
        return combinations;
    }, [images]);

    const totalSlides = slideCombinations.length;

    // スライドの自動切り替え
    useEffect(() => {
        if (totalSlides > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [totalSlides, interval]);

    if (totalSlides === 0) {
        // 画像がない場合は、単色のプレースホルダーを表示
        return <div className="absolute inset-0 w-full h-full bg-blue-600" />;
    }

    // スライドの幅は、コンテナの幅（100%）に固定
    // translateXで、現在のスライド位置に移動させる
    const translateX = -currentIndex * 100;

    return (
        <div className="relative w-full h-full overflow-hidden bg-blue-600">
            {/* スライドコンテナ */}
            <div
                className="absolute inset-0 flex h-full transition-transform duration-700 ease-in-out"
                style={{
                    width: `${totalSlides * 100}%`,
                    transform: `translateX(${translateX / totalSlides}%)`,
                }}
            >
                {/* 各スライド（2枚の画像セット） */}
                {slideCombinations.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        className="flex h-full"
                        style={{ width: `${100 / totalSlides}%` }}
                    >
                        {/* 1枚目の画像 (左側) */}
                        <div className="w-1/2 h-full relative">
                            <Image
                                src={slide[0]}
                                alt={`スライド ${slideIndex + 1} - 1`}
                                fill
                                sizes="50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        {/* 2枚目の画像 (右側) */}
                        <div className="w-1/2 h-full relative">
                            <Image
                                src={slide[1]}
                                alt={`スライド ${slideIndex + 1} - 2`}
                                fill
                                sizes="50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* ナビゲーションドット */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {slideCombinations.map((_, index) => (
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
            
            {/* 画像の上に半透明のオーバーレイをかけて、テキストの視認性を向上させる（page.tsxのテキストは削除されたため、不要だが残す） */}
            <div className="absolute inset-0 bg-black opacity-30 z-10" />
        </div>
    );
}
