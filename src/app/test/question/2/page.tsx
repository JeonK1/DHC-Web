"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import QuestionHeader from "@/components/QuestionHeader";

export default function Question2() {
  const router = useRouter();
  const [partnerBirthdate, setPartnerBirthdate] = useState("");

  const handleNext = () => {
    if (partnerBirthdate) {
      router.push("/test/question/3");
    }
  };

  return (
    <>
      <QuestionHeader currentStep={2} totalSteps={3} />
      <main className="pt-28 pb-8 px-6 min-h-screen flex flex-col">
        <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            상대방의 생년월일을 입력해주세요
          </h2>
          <p className="text-gray-600 mb-8">
            썸녀의 생년월일을 입력해주세요
          </p>

          <div className="flex-1">
            <label htmlFor="partner-birthdate" className="block text-sm font-medium text-gray-700 mb-2">
              상대방 생년월일
            </label>
            <input
              type="date"
              id="partner-birthdate"
              value={partnerBirthdate}
              onChange={(e) => setPartnerBirthdate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none text-lg"
              max={new Date().toISOString().split('T')[0]}
            />
          </div>

          <button
            onClick={handleNext}
            disabled={!partnerBirthdate}
            className={`w-full font-semibold py-4 px-8 rounded-lg transition-colors duration-200 mt-6 ${
              partnerBirthdate
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            다음
          </button>
        </div>
      </main>
    </>
  );
}
