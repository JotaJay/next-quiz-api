// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import Quiz from "../../../../models/quiz.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { quizId: id } = req.query;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }
      const quiz = await Quiz.findById(id);

      if (!quiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  if (req.method === "DELETE") {
    try {
      const { quizId: id } = req.query;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }

      const quiz = await Quiz.findById(id);

      if (!quiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      await Quiz.deleteOne(quiz);

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  if (req.method === "PUT") {
    try {
      const { quizId: id } = req.query;
      const updates = Object.keys(req.body);
      const newQuiz = req.body;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }
      const quiz = await Quiz.findById(id);

      if (!quiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      updates.forEach((prop) => {
        quiz[prop] = newQuiz[prop];
      });

      await quiz.save();

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  return res.status(405).json({});
};
