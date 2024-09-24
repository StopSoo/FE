import { BookData } from "@/types";
// BookData 형태가 반환될 것이나, 검색 결과가 없을 경우 null을 반환할 것이다. -> | 연산자를 활용.
export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) 
      throw new Error();

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;  // 하나의 책만 반환하므로 배열 X. null로 설정.
  }
}