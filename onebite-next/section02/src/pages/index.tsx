// CSS module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from '@/mock/books.json';
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book}/>)}
      </section>
    </div>
  );
}
// 메서드 추가
// Next.js에서는 모든 페이지가 React Component!
// 페이지를 받아와서 SearchableLayout 컴포넌트로 감싸진 페이지를 return.
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}