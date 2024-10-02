"use client"; // 검색바의 클라이언트 컴포넌트화
import { useRouter } from "next/navigation";  // app router
import { useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`);
  };

  return (
    <div>
      <input 
        value={search} 
        onChange={onChangeSearch}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}