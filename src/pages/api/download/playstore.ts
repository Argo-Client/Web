import { NextApiHandler } from "next";

import { PLAY_STORE_LINK } from "@src/app.config";

const handler: NextApiHandler = (req, res) => {
	res.redirect(PLAY_STORE_LINK);
};

export default handler;
