"use clinet";
// 클라이언트 컴포넌트에서 서버 컴포넌트를 직접 import X.
// children으로 받아서 직접 호출하지 않게 할 것.
import { ReactNode } from "react";

export default function ClientComponent({ 
  children 
}: {
  children: ReactNode;
}) {
  console.log("client component");

  return (<div>{children}</div>);
}