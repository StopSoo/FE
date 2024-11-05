import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
// 모든 도서
async function AllBooks() {
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
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
