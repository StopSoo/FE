import HomeButton from "@/components/HomeButton"; // 상세 페이지가 클라이언트 컴포넌트가 되는 걸 막을 수 있음.
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string
  },
  searchParams: { // 위치의 한글 이름을 받음
    name: string
  }
}
// 동적 메타데이터 사용
export function generateMetadata({ searchParams }: Props) {
  return {
    title: `Weather App - ${searchParams.name}`,
    description: `Let you know weather in ${searchParams.name}`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const res = await getForecast(params.location);
  
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map(day => (
          <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
        ))}
      </ul>
      {/* <Link href="/">HOME</Link> */}
      <HomeButton />
    </>
  );
}