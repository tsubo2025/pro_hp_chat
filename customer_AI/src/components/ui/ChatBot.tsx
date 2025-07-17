'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'こんにちは！サポートちゃんです。PCのトラブルや質問があれば、お気軽に聞いてください！'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // チャットが更新されたら自動スクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // ユーザーメッセージを追加
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // Mastra APIにリクエスト
      const response = await fetch('/api/mastra/pc-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: userInput,
          userLevel: 'beginner'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'APIリクエストに失敗しました');
      }

      // アシスタントの応答を追加
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response || 'すみません、エラーが発生しました。もう一度お試しください。'
      }]);
    } catch (error) {
      console.error('Error:', error);

      // デモモード: Mastraサーバーが起動していない場合のフォールバック応答
      const demoResponses = [
        'こんにちは！PCの調子はどうですか？何かお手伝いできることはありますか？',
        'Windowsの起動が遅い場合は、スタートアップアプリを確認してみましょう！タスクマネージャーを開いて、「スタートアップ」タブで不要なアプリを無効にできますよ♪',
        'インターネット接続に問題がある場合は、まずルーターの再起動を試してみてください。電源を30秒ほど切ってから再度入れると解決することが多いです！',
        'ブラウザが重い時は、キャッシュのクリアが効果的ですよ。Ctrl+Shift+Deleteを押して、キャッシュデータを削除してみてください！',
        'パソコンの動作が全体的に遅い場合は、ディスククリーンアップを実行してみましょう。Cドライブを右クリックして「プロパティ」→「ディスククリーンアップ」で不要なファイルを削除できます！'
      ];

      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: randomResponse
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* チャットボットトグルボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-protect-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* チャットボットウィンドウ */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col" style={{ height: '500px' }}>
          {/* ヘッダー */}
          <div className="bg-protect-primary text-white p-4 rounded-t-lg flex items-center">
            <div className="w-10 h-10 mr-3 relative">
              <Image
                src="/images/support-chan_AI.svg"
                alt="サポートちゃん"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </div>
            <h3 className="font-bold">サポートちゃん</h3>
          </div>

          {/* メッセージエリア */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 ${msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'
                  }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${msg.role === 'user'
                    ? 'bg-protect-primary text-white'
                    : 'bg-white border border-gray-200'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 rounded-lg p-3 flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 入力エリア */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メッセージを入力..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-protect-primary"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-protect-primary text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}