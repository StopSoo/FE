'use client'  // because of event handler

type Props = {
  tag: string
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await fetch('/api/revalidate?tag=' + tag, {
      method: 'POST',
    });  // query로 tag를 넘겨줌 (POST)

    const result = await res.json();
    console.log(result);
  }
  
  return <button onClick={handleClick}>캐시 비우기</button>
}