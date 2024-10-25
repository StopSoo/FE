'use client'
import { useRouter } from "next/navigation";  // next/router가 아라 next/navigation에서 가져와야 함(!)

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  }
  
  return (
    <button onClick={handleClick}>HOME</button>
  );
}