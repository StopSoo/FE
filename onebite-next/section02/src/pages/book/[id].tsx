import { useRouter } from "next/router";
import style from './[id].module.css';
import { GetServerSidePropsContext, GetStaticPropsContext, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import Head from "next/head";
// 동적 페이지에서 경로 설정하는 함수.
// paths property를 갖는 객체를 반환.
// URL 파라미터의 값들은 반드시 문자열로 설정해야 함.
// fallback: 대체, 대비책, 예외 처리 (기본값은 false) => 404.tsx 실행됨.
export const getStaticPaths = () => {
  return {
    paths: [
      {params: { id: "1" }},
      {params: { id: "2" }},
      {params: { id: "3" }},
    ],
    fallback: true,
    // false: 404 Not found
    // blocking: SSR 방식
    // true: SSR 방식 + 데이터가 없는 폴백 상태의 페이지부터 반환.
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
  // type error 발생 시, ! 단언을 통해 해결 가능.
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));  // id가 string 형태라 숫자화.
  // 해당 페이지가 존재하지 않을 경우 Not found 페이지로 보내고 싶을 때!
  if (!book) {  
    return {
      notFound: true,
    };
  }
  return {
    props: {
      book
    },
  };
}

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 예외 처리 - fallback과 로딩 중을 구분하기.
  const router = useRouter();
  // fallback 상태일 때도 기본적인 메타 태그가 설정되도록 구현.
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요!" />
        </Head>
        <div>로딩 중입니다 :)</div>
      </>
    );
  }
  if (!book) return "문제가 발생했습니다. 다시 시도해주세요 :)";

  const { 
    id, 
    title, 
    subTitle, 
    description, 
    author, 
    publisher, 
    coverImgUrl 
  } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div 
          style={{ backgroundImage: `url('${coverImgUrl}')` }} 
          className={style.cover_img_container}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
    </>
  );
}