// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import Quiz from "../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    if (!req.query) {
      return res
        .status(400)
        .json({ error: "quizId is required as query param" });
    }
    return res.json(req.query);
    try {
      const quizzes = await Quiz.find();

      if (quizzes.length === 0) {
        return res.status(200).json({ msg: "No quiz found" });
      }

      return res.status(200).json(quizzes);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
