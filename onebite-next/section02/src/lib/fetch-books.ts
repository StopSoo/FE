import { BookData } from "@/types";
// q: 검색어라서, optional 키워드로 설정.
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  // 검색 결과 호출을 적용하기 위해 url을 let 키워드로 설정(!)
  let url = `http://localhost:12345/book`;
  // 검색어 존재 시 url을 해당 키워드에 맞게 변경
  if (q) { 
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) 
      throw new Error();

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}