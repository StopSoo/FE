import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = new Date();  // 현재 시간을 보관
  res.json({ time: date.toLocaleString() });
}