import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

// 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // 모르겠으면 일단 해당 객체 출력해보고 파악하자!
  const q = context.query.q;
  const books = await fetchBooks(q as string);  // q 타입 단언하기
  
  return {
    props: {
      books,
    },
  };
}

export default function Page({
  books
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => <BookItem key={book.id} {...book} />)}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}