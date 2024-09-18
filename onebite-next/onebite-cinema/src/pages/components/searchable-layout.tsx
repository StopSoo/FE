import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(""); // 검색어
  const q = router.query.q as string;
  
  useEffect(() => { // q의 값이 바뀌면 검색 페이지의 검색어도 q로 변경
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;  // 예외 처리
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div>
      <div className={style.searchbar_container}>
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