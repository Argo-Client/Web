import axios from "axios";

import { REGISTER_URL } from "@src/app.config";

import Register, { RegisterResponse } from "@interfaces/register";

const fetchCommits = async (
	page: number,
	count: number,
): Promise<[commits: Register[], length: number]> => {
	const data = await axios
		.get<RegisterResponse>(`${REGISTER_URL}/register.json`)
		.then(({ data }) => data);

	return [
		data.files.reverse().slice(page * count, page * count + count),
		data.files.length,
	];
};

export default fetchCommits;
