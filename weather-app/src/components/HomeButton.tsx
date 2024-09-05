import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  }
  
  return (
    <button onClick={handleClick}>HOME</button>
  );
}