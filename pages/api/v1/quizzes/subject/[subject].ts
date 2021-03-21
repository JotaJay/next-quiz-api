// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../../db/db.ts";
import Quiz from "../../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { subject } = req.query;

      const quiz = await Quiz.find({ subject }).exec();

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  return res.status(405).json({});
};
