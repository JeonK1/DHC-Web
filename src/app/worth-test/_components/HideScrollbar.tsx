"use client";

import { useEffect } from "react";

/**
 * worth-test 진입 시 <html>에 스크롤바 숨김 클래스를 추가하고,
 * 이탈(언마운트) 시 제거한다. body 레벨 스크롤과 내부 overflow 컨테이너의
 * 스크롤바를 모두 숨기되 스크롤 기능 자체는 유지한다.
 */
export function HideScrollbar() {
  useEffect(() => {
    const el = document.documentElement;
    el.classList.add("worth-test-hide-scrollbar");
    return () => el.classList.remove("worth-test-hide-scrollbar");
  }, []);

  return null;
}
