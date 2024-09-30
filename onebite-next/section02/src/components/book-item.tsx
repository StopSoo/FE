import type { BookData } from "@/types";
import Link from "next/link";
import style from './book-item.module.css';
// 책 컴포넌트 클릭 시 해당 책 상세 페이지로 이동.
export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl}/>
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>: {subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}