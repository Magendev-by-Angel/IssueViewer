import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type data = {};

const getRepo: data = async (user: string, repo: string) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${user}/${repo}/issues`
  );
  
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
