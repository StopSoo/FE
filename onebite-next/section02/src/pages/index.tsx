// CSS module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <h1 className={style.h1}>인덱스</h1>
  );
}
// 메서드 추가
// Next.js에서는 모든 페이지가 React Component!
// 페이지를 받아와서 SearchableLayout 컴포넌트로 감싸진 페이지를 return.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}