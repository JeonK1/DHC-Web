"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/test/question/1");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-6xl mb-4 inline-block">💕</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          내 썸녀와 잘될 수 있을까?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          두 사람의 운명적인 궁합을 확인해보세요
        </p>
        <button
          onClick={handleStart}
          className="w-full max-w-xs bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
        >
          시작하기
        </button>
      </div>
    </main>
  );
}
