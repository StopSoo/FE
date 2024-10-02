"use client"; // 검색바의 클라이언트 컴포넌트화
import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input 
        value={search} 
        onChange={onChangeSearch}
      />
      <button>검색</button>
    </div>
  );
}