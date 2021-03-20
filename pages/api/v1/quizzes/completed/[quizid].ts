// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../../db/db.ts";
import CompletedQuizzes from "../../../../../models/completedQuizzes.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { quizid: id } = req.query;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }
      const quiz = await CompletedQuizzes.findById(id);

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
      const { quizid: id } = req.query;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }

      const quiz = await CompletedQuizzes.findById(id);

      if (!quiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      await CompletedQuizzes.deleteOne(quiz);

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  if (req.method === "PATCH") {
    try {
      const { quizid: id } = req.query;
      delete req.body["_id"];
      const updates = Object.keys(req.body);
      const newQuiz = req.body;

      if (id.length != 24) {
        return res
          .status(400)
          .json({ error: "quizz Id must be 24 digits long" });
      }
      const oldQuiz = await CompletedQuizzes.findById(id);

      if (!oldQuiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      updates.forEach((prop) => {
        oldQuiz[prop] = newQuiz[prop];
      });

      await oldQuiz.save({ new: true });

      return res.status(200).json(oldQuiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
