export default function Page({
  params,
}: {
  params: {id: string | string[]}
}) {
  return (
    <div>book/[id] Page {params.id}</div>
  );
}