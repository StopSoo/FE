import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {/* Suspense: 곧바로 렌더링X, 컴포넌트의 비동기 작업 종료 시까지 fallback 옵션으로 설정한 대체 UI를 띄움. */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}