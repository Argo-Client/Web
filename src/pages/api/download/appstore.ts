import { NextApiHandler } from "next";

import { APP_STORE_LINK } from "@src/app.config";

const handler: NextApiHandler = (req, res) => {
  res.redirect(APP_STORE_LINK);
};

export default handler;
