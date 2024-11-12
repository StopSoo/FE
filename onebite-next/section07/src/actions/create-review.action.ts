"use server";

export async function createReviewAction(formData: FormData) {
  // 데이터 꺼내 쓰기
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();
  // 예외 처리
  if (!bookId || !content || !author) {
    return;
  }
  // 리뷰 추가 기능 구현
  try {
    // api 경로, fetch 요청의 옵션 객체
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );

    console.log(response.status);
  } catch(err) {
    console.error(err);
    return;
  }
}