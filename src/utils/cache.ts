import { ensureFile, readFile, readJSON, writeJSON } from "fs-extra";
import { join } from "path";

import { CACHE_LOCATION } from "@src/app.config";

const CACHE_FILE = join(CACHE_LOCATION, "cache.json");

export const init = async (): Promise<void> => {
	await ensureFile(CACHE_FILE);

	const isNotEmpty = await readFile(CACHE_FILE);

	if (!isNotEmpty.toString()) {
		await writeJSON(CACHE_FILE, {});
	}
};

export const get: <T>(key: string) => Promise<T | null> = async <T>(
	key: string,
) => {
	const data: Record<string, T> = await readJSON(CACHE_FILE);

	return data[key];
};

export const set: <T>(key: string, value: T) => Promise<void> = async (
	key,
	value,
) => {
	const data: Record<string, unknown> = await readJSON(CACHE_FILE);

	const updated = {
		...data,
		[key]: value,
	};

	await writeJSON(CACHE_FILE, updated);
};

export const unset: (key: string) => Promise<void> = async (key) => {
	const data: Record<string, unknown> = await readJSON(CACHE_FILE);

	delete data[key];

	await writeJSON(CACHE_FILE, data);
};
