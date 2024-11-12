import { createReviewAction } from "@/actions/create-review.action";
import style from "./page.module.css";
import { notFound } from "next/navigation";
// dynamicParams: generateStaticParams() 함수에서 설정된 파라미터 외의 파라미터들에 대해서는 모두 404를 반환하는 옵션.
// export const dynamicParams = false;

// 빌드 타임에 정적 파라미터들을 읽어 이 파라미터에 해당하는 페이지들을 생성(!)
// 페이지 생성 후 서버 측에 풀 라우트 캐시로 저장.
// 설정해놓지 않은 페이지들은 실시간으로 동적 페이지로 생성됨.
export function generateStaticParams() {
  return [{ id: "1" },  { id: "2" }, { id: "3" }];
}
// 컴포넌트 분리
async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );
  // 예외처리
  if (!response.ok) {
    if (response.status === 404)
      notFound();
    return <div>오류가 발생했습니다.</div>;
  }
  // 구조 분해 할당
  const book = await response.json();
  const {
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}
// for Server Action
function ReviewEditor({ bookId }: { bookId: string }) {
  // bookId는 trick!
  // hidden과 readOnly 속성을 같이 사용할 것.
  return (
    <section>
      <form action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly /> 
        <input required name="content" placeholder="리뷰 내용" />
        <input required name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}
// generateStaticParams 함수를 통해 정적 페이지로 설정 가능.
export default function Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className={style.container}>
      <BookDetail bookId={params.id} />
      <ReviewEditor bookId={params.id} />
    </div>
  );
}
