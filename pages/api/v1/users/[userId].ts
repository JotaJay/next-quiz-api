// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import User from "../../../../models/user.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { userId: id } = req.query;

    if (id.length != 24) {
      return res
        .status(400)
        .json({ error: "user id must be 24 characters long" });
    }

    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({ error: "no user found" });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
