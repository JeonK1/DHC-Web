"use client";

import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();

  // 임시 궁합 점수 (나중에 실제 계산 로직으로 대체)
  const compatibilityScore = 92;

  const handleRestart = () => {
    router.push("/");
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-pink-600";
    if (score >= 60) return "text-orange-600";
    return "text-gray-600";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "천생연분이에요! 💕";
    if (score >= 80) return "완벽한 커플이 될 수 있어요! 💖";
    if (score >= 70) return "좋은 궁합이에요! 💗";
    if (score >= 60) return "노력하면 잘 될 수 있어요! 💓";
    return "서로를 이해하는 시간이 필요해요 💙";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center max-w-md w-full">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-6xl">💕</span>
          </div>

          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            궁합 분석 완료!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            두 사람의 궁합 점수는
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-10 mb-6">
            <div className="mb-4">
              <p className={`text-7xl font-bold ${getScoreColor(compatibilityScore)}`}>
                {compatibilityScore}
              </p>
              <p className="text-2xl text-gray-400 mt-2">점</p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-pink-500 to-pink-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${compatibilityScore}%` }}
              />
            </div>

            <p className="text-xl font-semibold text-gray-700">
              {getScoreMessage(compatibilityScore)}
            </p>
          </div>

          <div className="bg-pink-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">궁합 분석 포인트</h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>✨ 생년월일로 본 운명적인 연결</li>
              <li>💫 두 사람의 에너지 조화도</li>
              <li>💖 사랑의 시작점이 주는 의미</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleRestart}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
          >
            다시 하기
          </button>
          <button
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-lg border-2 border-gray-200 transition-colors duration-200"
          >
            결과 공유하기
          </button>
        </div>
      </div>
    </main>
  );
}
