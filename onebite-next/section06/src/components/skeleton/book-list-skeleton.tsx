// 라이브러리로 react-loading-skeleton을 사용해보는 것도 추천됨(!)
import BookItemSkeleton from "./book-item-skeleton";
// 인수로 넘어오는 숫자 만큼 스켈레톤을 뿌려주는 함수
export default function BookListSkeleton({
  count 
}: {
  count: number;
}) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => (
    <BookItemSkeleton key={`book-item-skeleton-${idx}`} />
  ));
}