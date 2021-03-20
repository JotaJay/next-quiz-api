// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../../../db/db.ts";
import CompletedQuizzes from "../../../../../../models/completedQuizzes.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { userid } = req.query;

      if (userid.length != 24) {
        return res
          .status(400)
          .json({ error: "user Id must be 24 digits long" });
      }
      const quiz = await CompletedQuizzes.find({ user: userid }).exec();

      if (!quiz) {
        return res.status(400).json({ msg: "No quiz found" });
      }

      return res.status(200).json(quiz);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
