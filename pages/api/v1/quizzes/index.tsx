// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import Quiz from "../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const { title, difficulty, type, category, questions } = body;

  try {
    const quiz = new Quiz({ title, difficulty, type, category, questions });

    await quiz.save();

    res.status(200).json(quiz);
  } catch (err) {
    return res.status(500).json(err);
  }
};
