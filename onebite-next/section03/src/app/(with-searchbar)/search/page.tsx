import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  // 지금은 임시 데이터 렌더링 중
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
