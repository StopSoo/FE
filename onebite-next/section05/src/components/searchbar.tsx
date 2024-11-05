"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 현재 페이지에 전달된 쿼리 스트링을 꺼내오는 역할(비동기로 실행됨)
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");
  // 쿼리 스트링이 변경되면 그 값을 search에 저장.
  useEffect(() => {
    setSearch(q || "");
  }, [q]);
  // 사용자가 input 값을 입력하면 그 값을 search에 저장.
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    // 현재 검색어가 없거나, 쿼리 스트링과 검색어가 같다면 페이지 이동을 방지하는 조건.
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 사용자가 누른 키가 enter라면 onSubmit()를 호출해 검색이 이루어지도록 함.
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
