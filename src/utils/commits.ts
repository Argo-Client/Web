import axios from "axios";

import { CACHE_TIMEOUT, REGISTER_URL } from "@src/app.config";

import Register, { RegisterResponse } from "@interfaces/register";

import * as Cache from "@utils/cache";

const fetchCommits = async (
	page: number,
	count: number,
): Promise<[commits: Register[], length: number]> => {
	await Cache.init();

	let data = await Cache.get<RegisterResponse & { expires: number }>("commits");

	if (!data || data.expires < Date.now()) {
		data = await axios
			.get<RegisterResponse>(`${REGISTER_URL}/register.json`)
			.then(async ({ data }) => {
				const updated = {
					...data,
					expires: Date.now() + CACHE_TIMEOUT,
				};

				await Cache.set("commits", updated);

				return updated;
			});
	}

	return [
		data.files.reverse().slice(page * count, page * count + count),
		data.files.length,
	];
};

export default fetchCommits;
