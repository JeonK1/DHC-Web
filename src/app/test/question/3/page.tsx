"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import QuestionHeader from "@/components/QuestionHeader";

export default function Question3() {
  const router = useRouter();
  const [firstLoveDate, setFirstLoveDate] = useState("");

  const handleComplete = () => {
    if (firstLoveDate) {
      router.push("/result");
    }
  };

  return (
    <>
      <QuestionHeader currentStep={3} totalSteps={3} />
      <main className="pt-28 pb-8 px-6 min-h-screen flex flex-col">
        <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            처음 사랑에 빠진 날을 입력해주세요
          </h2>
          <p className="text-gray-600 mb-8">
            두 사람이 처음 만났거나 설레기 시작한 날을 선택해주세요
          </p>

          <div className="flex-1">
            <label htmlFor="first-love-date" className="block text-sm font-medium text-gray-700 mb-2">
              처음 사랑에 빠진 날
            </label>
            <input
              type="date"
              id="first-love-date"
              value={firstLoveDate}
              onChange={(e) => setFirstLoveDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none text-lg"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          <button
            onClick={handleComplete}
            disabled={!firstLoveDate}
            className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors duration-200 mt-6 ${
              firstLoveDate
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            결과 보기
          </button>
        </div>
      </main>
    </>
  );
}
