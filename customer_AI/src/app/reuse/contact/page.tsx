'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';

export default function ReuseContactPage() {
    // フォームの状態
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // 送信状態
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    // 入力変更ハンドラ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // フォーム送信ハンドラ
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // ここで実際のAPIリクエストを行う代わりにタイムアウトで成功をシミュレート
            await new Promise(resolve => setTimeout(resolve, 1500));

            // 送信成功
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setError('送信中にエラーが発生しました。後ほど再度お試しください。');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header type="reuse" />

            <div className="flex-grow">
                {/* ヒーローセクション */}
                <section className="bg-reuse-primary text-white py-12">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h1>
                        <p className="text-lg">商品のご質問や在庫確認など、お気軽にお問い合わせください</p>
                    </div>
                </section>

                {/* お問い合わせフォーム */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-3xl">
                        {isSubmitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <h2 className="text-2xl font-bold text-green-800 mb-4">お問い合わせありがとうございます</h2>
                                <p className="text-green-700 mb-6">内容を確認次第、担当者よりご連絡いたします。</p>
                                <Link href="/reuse" className="inline-block bg-reuse-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors">
                                    トップページに戻る
                                </Link>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-center mb-8">お問い合わせフォーム</h2>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前 <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-reuse-primary focus:border-reuse-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-reuse-primary focus:border-reuse-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-reuse-primary focus:border-reuse-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ項目 <span className="text-red-500">*</span></label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-reuse-primary focus:border-reuse-primary"
                                        >
                                            <option value="">選択してください</option>
                                            <option value="商品について">商品について</option>
                                            <option value="在庫確認">在庫確認</option>
                                            <option value="納期について">納期について</option>
                                            <option value="修理・サポート">修理・サポート</option>
                                            <option value="その他">その他</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">お問い合わせ内容 <span className="text-red-500">*</span></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-reuse-primary focus:border-reuse-primary"
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`bg-reuse-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? '送信中...' : '送信する'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </section>

                {/* 連絡先情報 */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-12">その他の連絡方法</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="inline-block p-3 bg-reuse-secondary rounded-full mb-4">
                                    <svg className="w-8 h-8 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">お電話</h3>
                                <p className="text-gray-600 mb-4">営業時間: 10:00〜18:00（平日）</p>
                                <p className="text-lg font-semibold text-reuse-primary">080-3577-3848</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="inline-block p-3 bg-reuse-secondary rounded-full mb-4">
                                    <svg className="w-8 h-8 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">メール</h3>
                                <p className="text-gray-600 mb-4">24時間受付中</p>
                                <p className="text-lg font-semibold text-reuse-primary">info@reuse-zanmai.com</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="inline-block p-3 bg-reuse-secondary rounded-full mb-4">
                                    <svg className="w-8 h-8 text-reuse-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">所在地</h3>
                                <p className="text-gray-600 mb-4">ご来店の際は事前にご連絡ください</p>
                                <p className="text-lg font-semibold text-reuse-primary">島根県出雲市佐田町</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer type="reuse" />

            {/* チャットボット */}
            <ChatBot />
        </main>
    );
}