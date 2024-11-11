'use client';  // 반드시 client component!

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({ error, reset }: { error: Error, reset: ()=>void }) {
  const router = useRouter();
  
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div>
      <h3>오류가 발생했습니다</h3>
      <button onClick={() => {
        startTransition(() => {
          // 현재 페이지에 필요한 서버 컴포넌트들을 다시 불러올 것을 서버에 요청.
          router.refresh()
          // 에러 상태를 초기화, 컴포넌트들을 리렌더링.
          reset()
        })
      }}>다시 시도</button>
    </div>
  );
}