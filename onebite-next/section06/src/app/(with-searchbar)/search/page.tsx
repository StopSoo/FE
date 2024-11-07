import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
/** 
 * 라우트 세그먼트 옵션
 * - force-static: 쿼리 스트링은 빈 값을 반환하며, 데이터 캐싱도 강제로 실행됨. 검색 결과 반환이 원활히 이루어지지 않음.
 * - error: force-static과 같은 역할을 하나, 이 페이지에서는 동적 함수를 사용하므로 빌드 오류를 발생시킴.
 */
// export const dynamic = "error";

// 동적 함수를 사용하기 때문에 동적 페이지가 됨.
// 따라서 풀 라우트 캐시 적용 불가(!)
export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  await delay(1500);  // 1.5초만큼 딜레이
  // cache 옵션을 "force-cache"로 설정함.
  // 페이지는 계속 재생성이 되겠지만, 검색 결과는 캐싱이 이루어져 한 번 검색된 데이터에 대해서는 좀 더 빠른 속도로 응답 가능.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
    { cache: "force-cache" }
  );
  // 예외 처리
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}