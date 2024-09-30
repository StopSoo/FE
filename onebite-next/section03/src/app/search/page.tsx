// props의 형태를 먼저 확인한 후 타입 설정.
export default function Page({
  searchParams 
}: {
  searchParams: {q?: string;}
}) {
  return (
    <div>
      Search Page {searchParams.q}
    </div>
  );
}