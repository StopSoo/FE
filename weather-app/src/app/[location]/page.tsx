import HomeButton from "@/components/HomeButton"; // 상세 페이지가 클라이언트 컴포넌트가 되는 걸 막을 수 있음.
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string
  }
}

export default async function Detail({ params }: Props) {
  const name = params.location === 'seoul' ? '서울' : '';
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