import style from './review-editor.module.css';
import { createReviewAction } from '@/actions/create-review.action';
// 리뷰 추가 기능 구현
// using Server Action
export default function ReviewEditor({ bookId }: { bookId: string }) {
  // bookId는 trick!
  // hidden과 readOnly 속성을 같이 사용할 것.
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly /> 
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}