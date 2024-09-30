import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import { GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import Head from "next/head";

// 검색 결과를 불러오는 페이지는 쿼리를 사용해야 하는데, SSG를 적용하면 쿼리를 사용할 수가 없다! 
// 따라서 원래 리액트에서 사용하는 방식을 사용해야 함!

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   // 모르겠으면 일단 해당 객체 출력해보고 파악하자!
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);  // q 타입 단언하기
  
//   return {
//     props: {
//       books,
//     },
//   };
// }

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]); // books의 타입을 제네릭으로 정의.

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };
  // q 변경 시 검색 결과를 불러옴
  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);
  
  return (
    <div>
      <Head>
        <title>한입북스 - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색 결과" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요!" />
      </Head>
      {books.map((book) => <BookItem key={book.id} {...book} />)}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}