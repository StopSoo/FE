// interface: 객체 타입을 정의하기 위한 TS 문법
// 다른 파일에서 해당 interface를 사용할 수 있게 하기 위해 'export' 키워드를 넣을 것!
export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  publisher: string;
  coverImgUrl: string;
}