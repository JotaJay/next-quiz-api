// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import "../../../../db/db.ts";
import User from "../../../../models/user.model";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = new User({ name, email });

  await user.save();

  res.status(200).json(user);
};
