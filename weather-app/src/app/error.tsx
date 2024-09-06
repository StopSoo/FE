'use client' // 에러 컴포넌트는 반드시 클라이언트 컴포넌트여야 한다!

import { useEffect } from "react";

type Props = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error('---', error.message)
  }, []);
  
  return (
    <>
      <h1>Error Page</h1>
      <button onClick={() => {
        reset();
      }}>
        새로고침
      </button>
    </>
  );
}