// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("products");
  res.status(200).json({ data: data });
}
