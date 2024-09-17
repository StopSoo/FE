// 글로벌 레이아웃을 설정하는 파일
import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
// 새로운 타입 정의
// &: 교집합
// getLayout을 option type으로 선언.
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}
// Component의 타입을 확장시킴.
export default function App({ Component, pageProps }: AppProps & {
  Component: NextPageWithLayout;
}) {
  // 1. 객체에 선언한 메서드를 다음과 같이 불러와서 호출하여 반환.
  // 2. 다음 메서드를 사용하지 않는 페이지들을 위한 예외 처리 적용.
  // 3. getLayout의 적절한 타입 선언을 위해 위 절차들을 거침.
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}