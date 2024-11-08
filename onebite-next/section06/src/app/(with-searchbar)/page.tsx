import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
/** 
 * 라우트 세그먼트 옵션
 * Ex> dynamic: 특정 페이지의 유형을 Static, Dynamic 페이지로 설정.
 * 1. auto: 기본 값. 아무 것도 강제하지 않음.
 * 2. force-dynamic: 페이지를 강제로 Dynamic 페이지로 설정.
 * 3. force-static: 페이지를 강제로 Static 페이지로 설정. 쿼리 스트링 등의 동적 함수는 빈 값을 반환.
 * 4. error: 페이지를 강제로 Static 페이지로 설정. 하지만 Static 페이지로 설정되면 안되는 페이지의 경우 빌드 오류를 발생시킴.
 */
export const dynamic = "force-dynamic"; // 강제로 dynamic page로 설정됨.
// 모든 도서
async function AllBooks() {
  await delay(1500);  // 1.5초의 딜레이
  // cache 옵션을 "force-cache"로 설정함으로써 Dynamic Page -> Static Page로 변경.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allBooks: BookData[] = await response.json(); // any 자동 추론 오류를 직접 단언해서 해결.

  return (
    <>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}
// 추천 도서
async function RecoBooks() {
  await delay(3000);  // 3초의 딜레이
  // cache 옵션 중 revalidate 옵션은 페이지를 dynamic하게 설정하는 데 관여X, 따라서 옵션 유지.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } } // 3초마다 데이터 갱신
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoBooks: BookData[] = await response.json();

  return (
    <>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

export default function Home() {  
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<div>도서를 불러오는 중 ~</div>}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<div>도서를 불러오는 중 ~</div>}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}