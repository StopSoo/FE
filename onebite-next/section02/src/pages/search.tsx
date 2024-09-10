import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { q } = router.query; // 구조분해할당 문법을 이용해서 쿼리스트링을 가져옴.

  return (<h1>Search {q}</h1>);
}