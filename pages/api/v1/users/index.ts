// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import User from "../../../../models/user.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email } = req.body;

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ name, email });

    await user.save();

    res.status(200).json(user);
  }

  if (req.method === "GET") {
    try {
      const users = await User.find();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
