import { NextApiRequest, NextApiResponse } from "next";
// for On-Demand ISR
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await res.revalidate('/');  // revalidate할 페이지 경로 설정.
    return res.json({ revalidate: true });  // revalidate에 성공했음을 표시.
  } catch (err) {
    res.status(500).send("Revalidation Failed.")  // revalidate가 실패했음을 표시.
  }
}