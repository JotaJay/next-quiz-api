// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import Quiz from "../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { quizId: id } = req.query;
      const quiz = await Quiz.findById(id);

      if (quiz.length === 0) {
        return res.status(200).json({ msg: "No quiz found" });
      }

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
