import { useEffect, useState } from "react";

/**
 * IME 키보드가 가리는 화면 하단 영역의 높이(px)를 반환한다.
 * fixed 하단 버튼의 bottom 값으로 사용해 버튼이 키보드 바로 위에 위치하도록 한다.
 *
 * inset = window.innerHeight - visualViewport.height - visualViewport.offsetTop
 * - resizes-visual: 정확한 키보드 높이를 계산한다.
 * - resizes-content: innerHeight 가 키보드만큼 함께 줄어 ≈ 0 이 되어 이중 보정이 없다.
 *
 * 텍스트필드 포커스 시 브라우저가 visual viewport 를 스크롤(offsetTop > 0)하므로
 * offsetTop 을 빼주지 않으면 버튼이 키보드보다 위로 과도하게 떠오른다.
 * resize 와 scroll 을 모두 구독해 스크롤 변화에도 보정한다.
 */
export function useKeyboardInset(): number {
  const [inset, setInset] = useState(0);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      const next = window.innerHeight - vv.height - vv.offsetTop;
      setInset(Math.max(0, Math.round(next)));
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, []);

  return inset;
}
