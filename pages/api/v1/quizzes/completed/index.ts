// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../../db/db";
import CompletedQuizzes from "../../../../../models/completedQuizzes.model";
import "../../../../../models/user.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const body = req.body;
    const { user, quiz, score } = body;

    try {
      const completedQuiz = new CompletedQuizzes({ user, quiz, score });
      await completedQuiz.save();

      res.status(200).json(completedQuiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  if (req.method === "GET") {
    try {
      const completedQuizzes = await CompletedQuizzes.find();

      return res.status(200).json(completedQuizzes);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  return res.status(405).json({});
};
