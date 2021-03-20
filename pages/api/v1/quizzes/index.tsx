// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import Quiz from "../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const body = req.body;
    const { subject, title, difficulty, type, category, questions } = body;

    try {
      const quiz = new Quiz({
        subject,
        title,
        difficulty,
        type,
        category,
        questions,
      });

      await quiz.save();

      res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  if (req.method === "GET") {
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
