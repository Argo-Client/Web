import { NextApiHandler } from "next";

import build from "@src/build.json";

const handler: NextApiHandler = (req, res) => {
	res.json(build.devs);
};

export default handler;
