import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout({ children }: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(""); // 검색어
  // 쿼리 스트링의 타입을 string으로 단언.
  // q의 타입이 여러 가지일 가능성이 많으므로, Line.14에서 에러가 남.
  const q = router.query.q as string; 
  // q의 값이 변하면 검색된 페이지의 검색어도 q가 됨.
  useEffect(() => {
    setSearch(q || "");
  }, [q]);
  // e: 리액트의 HTML Input element에서 발생한 ChangeEvent 객체 타입. 
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  // 1. 검색 버튼 클릭 시 해당 쿼리의 검색 페이지로 이동
  // 2. 조건을 추가하여, 쿼리 스트링과 검색어가 같을 경우 페이지 이동 방지.
  const onSubmit = () => {
    if (!search || q === search) return;  // 예외 처리
    router.push(`/search?q=${search}`);
  }
  // 검색창에서 엔터키 입력 시 검색페이지로 이동할 수 있게 설정.
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  }

  return (
    <div>
      <div>
        <input 
          value={search} 
          onChange={onChangeSearch} 
          onKeyDown={onKeyDown}
          placeholder="검색어를 입력하세요 :)" 
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}