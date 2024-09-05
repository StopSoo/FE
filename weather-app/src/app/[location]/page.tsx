import HomeButton from "@/components/HomeButton"; // 상세 페이지가 클라이언트 컴포넌트가 되는 걸 막을 수 있음.

type Props = {
  params: {
    location: string
  }
}

export default function Detail({ params }: Props) {
  const name = params.location === 'seoul' ? '서울' : '';

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      {/* <Link href="/">HOME</Link> */}
      <HomeButton />
    </>
  );
}