import { NextApiHandler } from "next";

import fetchCommits from "@utils/commits";

const handler: NextApiHandler = async (req, res) => {
	const page = parseInt(req.query.page as string);
	const limit = parseInt(req.query.limit as string);

	if (page == undefined || limit == undefined) {
		res.status(400).json({ error: "Missing params" });
		return;
	}

	const [commits] = await fetchCommits(page, limit);

	res.json(commits);
};

export default handler;
