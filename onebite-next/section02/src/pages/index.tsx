// CSS module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from '@/mock/books.json';
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
// getServerSideProps(): 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 SSR 함수
// getStaticProps(): SSG 함수
export const getStaticProps = async () => {
  // Promise.all(): 인수로 전달한 배열 안에 있는 모든 비동기 함수들을 실행시킴.
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);
  // SSR, SSG 모두 props라는 property를 가진 객체를 반환해야 함.
  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};
// SSR: InferGetServerSidePropsType
// SSG: InferGetStaticPropsType
// 둘 다 제네릭으로 넣은 함수의 반환값 타입을 자동으로 추론해서 props의 타입으로 설정해주는 역할을 함.
export default function Home({ 
  allBooks,
  recoBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => <BookItem key={book.id} {...book}/>)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => <BookItem key={book.id} {...book}/>)}
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